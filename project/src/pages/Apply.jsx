import { useEffect, useMemo, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { jobs } from '../data/jobs'

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  linkedInUrl: '',
  githubUrl: '',
  portfolioUrl: '',
  yearsOfExperience: '',
  skills: '',
  coverLetter: '',
  expectedSalary: '',
  noticePeriod: '',
  earliestStartDate: '',
}

function Apply() {
  const query = useQuery()
  const jobId = query.get('job') || ''
  const job = jobs.find(j => j.id === jobId)

  const [form, setForm] = useState(initialForm)
  const [resumeFile, setResumeFile] = useState(null)
  const [additionalFiles, setAdditionalFiles] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function validateUrl(url) {
    if (!url) return true
    try { new URL(url); return true } catch { return false }
  }

  function validate() {
    if (!form.fullName || form.fullName.trim().length < 2) return 'Please enter your full name.'
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.'
    if (!resumeFile) return 'Please attach your resume (PDF or DOCX).'
    if (resumeFile && resumeFile.size > 4 * 1024 * 1024) return 'Resume must be under 4 MB.'
    if (resumeFile && !/\.(pdf|docx?)$/i.test(resumeFile.name)) return 'Resume must be a PDF or DOC/DOCX file.'
    if (additionalFiles.length > 2) return 'You can attach up to 2 additional files.'
    for (const f of additionalFiles) {
      if (f.size > 4 * 1024 * 1024) return 'Additional files must be under 4 MB.'
      if (!/\.(pdf|docx?|zip)$/i.test(f.name)) return 'Additional files must be PDF/DOC/DOCX/ZIP.'
    }
    if (!validateUrl(form.linkedInUrl)) return 'LinkedIn URL is not valid.'
    if (!validateUrl(form.githubUrl)) return 'GitHub URL is not valid.'
    if (!validateUrl(form.portfolioUrl)) return 'Portfolio URL is not valid.'
    return ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')
    const msg = validate()
    if (msg) { setError(msg); return }

    try {
      setSubmitting(true)
      const data = new FormData()
      data.append('jobId', jobId)
      data.append('role', job ? job.title : '')
      data.append('department', job ? job.department : '')
      Object.entries(form).forEach(([k, v]) => data.append(k, v ?? ''))
      if (resumeFile) data.append('resume', resumeFile)
      for (const f of additionalFiles) data.append('attachments', f)

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: data,
      })

      if (!res.ok) {
        const t = await res.text()
        throw new Error(t || 'Submission failed')
      }

      setSuccess('Application submitted successfully! We will get back to you soon.')
      setForm(initialForm)
      setResumeFile(null)
      setAdditionalFiles([])
    } catch (err) {
      setError(err.message || 'Something went wrong while submitting the application.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B4B8F]">Apply for a Position</h1>
        <p className="text-gray-600 mt-2">Complete the form below to submit your application.</p>
        <div className="mt-3 text-sm">
          <Link to="/careers" className="text-[#1B4B8F] hover:underline">← Back to Careers</Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2025-medium p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                value={job ? job.title : ''}
                placeholder="Role you are applying for"
                readOnly={!!job}
                onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
              />
              {job && <p className="text-xs text-gray-500 mt-1">Prefilled from the Careers page</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                value={job ? job.department : ''}
                readOnly
                className="mt-1 w-full rounded-lg border-gray-300 bg-gray-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name *</label>
              <input
                type="text"
                value={form.fullName}
                onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                value={form.location}
                onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/..."
                value={form.linkedInUrl}
                onChange={e => setForm(f => ({ ...f, linkedInUrl: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">GitHub</label>
              <input
                type="url"
                placeholder="https://github.com/username"
                value={form.githubUrl}
                onChange={e => setForm(f => ({ ...f, githubUrl: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Portfolio</label>
              <input
                type="url"
                placeholder="https://your-site.com"
                value={form.portfolioUrl}
                onChange={e => setForm(f => ({ ...f, portfolioUrl: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <input
                type="number"
                min={0}
                max={50}
                value={form.yearsOfExperience}
                onChange={e => setForm(f => ({ ...f, yearsOfExperience: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Expected Salary</label>
              <input
                type="text"
                value={form.expectedSalary}
                onChange={e => setForm(f => ({ ...f, expectedSalary: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Notice Period</label>
              <input
                type="text"
                placeholder="Immediate, 2 weeks, 1 month"
                value={form.noticePeriod}
                onChange={e => setForm(f => ({ ...f, noticePeriod: e.target.value }))}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Skills</label>
            <input
              type="text"
              placeholder="e.g., React, Node.js, AWS"
              value={form.skills}
              onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
            <textarea
              rows={6}
              value={form.coverLetter}
              onChange={e => setForm(f => ({ ...f, coverLetter: e.target.value }))}
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1B4B8F] focus:ring-[#1B4B8F]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Resume (PDF/DOC/DOCX, max 4 MB) *</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={e => setResumeFile(e.target.files?.[0] || null)}
                className="mt-1 w-full rounded-lg border-gray-300 bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Files (up to 2)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.zip"
                multiple
                onChange={e => setAdditionalFiles(Array.from(e.target.files || []).slice(0, 2))}
                className="mt-1 w-full rounded-lg border-gray-300 bg-white"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3">{error}</div>
          )}
          {success && (
            <div className="rounded-lg border border-green-200 bg-green-50 text-green-700 px-4 py-3">{success}</div>
          )}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#1B4B8F] hover:bg-[#1B4B8F]/90 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-semibold"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Apply