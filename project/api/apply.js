import nodemailer from 'nodemailer'
import Busboy from 'busboy'

export const config = {
  api: {
    bodyParser: false,
  },
}

function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const busboy = Busboy({ headers: req.headers })
    const fields = {}
    const attachments = []
    let totalBytes = 0
    const MAX_BYTES = 12 * 1024 * 1024 // 12MB total across all files

    busboy.on('field', (name, val) => {
      fields[name] = val
    })

    busboy.on('file', (name, file, info) => {
      const { filename, mimeType } = info
      const chunks = []
      file.on('data', data => {
        totalBytes += data.length
        if (totalBytes > MAX_BYTES) {
          file.unpipe()
          busboy.emit('error', new Error('Payload too large'))
          return
        }
        chunks.push(data)
      })
      file.on('end', () => {
        if (filename) {
          attachments.push({
            filename,
            content: Buffer.concat(chunks),
            contentType: mimeType,
          })
        }
      })
    })

    busboy.on('error', reject)
    busboy.on('finish', () => resolve({ fields, attachments }))

    req.pipe(busboy)
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed')
    return
  }

  try {
    const { fields, attachments } = await parseMultipart(req)

    const {
      jobId = '',
      role = '',
      department = '',
      fullName = '',
      email = '',
      phone = '',
      location = '',
      linkedInUrl = '',
      githubUrl = '',
      portfolioUrl = '',
      yearsOfExperience = '',
      skills = '',
      coverLetter = '',
      expectedSalary = '',
      noticePeriod = '',
      earliestStartDate = '',
    } = fields

    if (!fullName || !email) {
      res.status(400).send('Name and email are required')
      return
    }

    // Zoho SMTP transporter
    const smtpHost = process.env.SMTP_HOST || 'smtp.zoho.com'
    const smtpPort = Number(process.env.SMTP_PORT || 465)
    const smtpUser = process.env.SMTP_USER || 'info@vachiservices.com'
    const smtpPass = process.env.SMTP_PASS

    if (!smtpPass) {
      res.status(500).send('SMTP credentials not configured')
      return
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const toAddress = process.env.APPLICATIONS_TO || 'info@vachiservices.com'

    const subject = `New Job Application: ${role || 'General'} — ${fullName}`
    const textLines = [
      `Role: ${role} (${department})`,
      `Job ID: ${jobId}`,
      '',
      `Applicant: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Location: ${location}`,
      '',
      `LinkedIn: ${linkedInUrl}`,
      `GitHub: ${githubUrl}`,
      `Portfolio: ${portfolioUrl}`,
      '',
      `Experience: ${yearsOfExperience} years`,
      `Expected Salary: ${expectedSalary}`,
      `Notice Period: ${noticePeriod}`,
      `Earliest Start Date: ${earliestStartDate}`,
      '',
      `Skills: ${skills}`,
      '',
      `Cover Letter:`,
      coverLetter || '(none)'
    ]

    await transporter.sendMail({
      from: smtpUser,
      to: toAddress,
      replyTo: email,
      subject,
      text: textLines.join('\n'),
      attachments,
    })

    // Slack notification (optional)
    const slackWebhook = process.env.SLACK_WEBHOOK_URL
    if (slackWebhook) {
      const summary = {
        text: `New application: ${role || 'General'} — ${fullName}`,
        blocks: [
          { type: 'section', text: { type: 'mrkdwn', text: `*New Job Application*\n*Role:* ${role || 'General'} (${department})\n*Applicant:* ${fullName}\n*Email:* ${email}\n*Phone:* ${phone || '-'}\n*LinkedIn:* ${linkedInUrl || '-'}\n*GitHub:* ${githubUrl || '-'}\n*Portfolio:* ${portfolioUrl || '-'}` } },
          { type: 'context', elements: [{ type: 'mrkdwn', text: `Job ID: ${jobId || '-'} | Exp: ${yearsOfExperience || '-'} yrs | Notice: ${noticePeriod || '-'} | Earliest: ${earliestStartDate || '-'}` }] },
        ],
      }
      try {
        await fetch(slackWebhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(summary) })
      } catch {}
    }

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).send('Failed to process application')
  }
}