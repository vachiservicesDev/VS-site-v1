import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, Save, LogOut, Lock, Briefcase, RefreshCw } from 'lucide-react'
import { jobs as defaultJobs } from '../data/jobs'

const ADMIN_EMAIL = 'admin@vachiservices.com'
const ADMIN_PASSWORD = 'PR@vi2517726'

function Admin() {
  const [isAuthed, setIsAuthed] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [heroTitle, setHeroTitle] = useState('')
  const [heroSubtitle, setHeroSubtitle] = useState('')
  const [jobs, setJobs] = useState([])
  const [demoUrl, setDemoUrl] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (token === 'ok') setIsAuthed(true)

    const storedTitle = localStorage.getItem('careerTitle')
    const storedSubtitle = localStorage.getItem('careerSubtitle')
    if (storedTitle) setHeroTitle(storedTitle)
    if (storedSubtitle) setHeroSubtitle(storedSubtitle)

    const storedJobs = localStorage.getItem('adminJobs')
    if (storedJobs) {
      try { setJobs(JSON.parse(storedJobs)) } catch {}
    }

    const storedDemo = localStorage.getItem('homeDemoUrl')
    if (storedDemo) setDemoUrl(storedDemo)
  }, [])

  function handleLogin(e) {
    e.preventDefault()
    if (emailInput.trim().toLowerCase() === ADMIN_EMAIL && passwordInput === ADMIN_PASSWORD) {
      localStorage.setItem('adminToken', 'ok')
      setIsAuthed(true)
    } else {
      alert('Invalid email or password')
    }
  }

  function handleLogout() {
    localStorage.removeItem('adminToken')
    setIsAuthed(false)
  }

  function saveHero() {
    localStorage.setItem('careerTitle', heroTitle)
    localStorage.setItem('careerSubtitle', heroSubtitle)
    alert('Career hero content saved')
  }

  function saveDemoUrl() {
    if (!demoUrl || !/^https?:\/\//i.test(demoUrl)) {
      alert('Please enter a valid URL starting with http or https')
      return
    }
    localStorage.setItem('homeDemoUrl', demoUrl)
    alert('Demo URL saved')
  }

  function resetDemoUrl() {
    localStorage.removeItem('homeDemoUrl')
    setDemoUrl('')
    alert('Demo URL reset to default')
  }

  function addJob() {
    setJobs(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: '',
        department: '',
        location: '',
        type: '',
        salary: '',
        description: '',
        responsibilities: [],
        requirements: [],
        benefits: []
      }
    ])
  }

  function loadCurrentJobs() {
    try {
      const stored = localStorage.getItem('adminJobs')
      const source = stored ? JSON.parse(stored) : defaultJobs
      const normalized = (Array.isArray(source) ? source : []).map(j => ({
        id: crypto.randomUUID(),
        title: j.title || '',
        department: j.department || '',
        location: j.location || '',
        type: j.type || '',
        salary: j.salary || '',
        description: j.description || '',
        responsibilities: Array.isArray(j.responsibilities)
          ? j.responsibilities
          : (j.responsibilities ? String(j.responsibilities).split(/\r?\n/).map(s => s.trim()).filter(Boolean) : []),
        requirements: Array.isArray(j.requirements)
          ? j.requirements
          : (j.requirements ? String(j.requirements).split(/\r?\n/).map(s => s.trim()).filter(Boolean) : []),
        benefits: Array.isArray(j.benefits)
          ? j.benefits
          : (j.benefits ? String(j.benefits).split(/\r?\n/).map(s => s.trim()).filter(Boolean) : [])
      }))
      setJobs(normalized)
    } catch {
      const normalized = defaultJobs.map(j => ({
        id: crypto.randomUUID(),
        title: j.title || '',
        department: j.department || '',
        location: j.location || '',
        type: j.type || '',
        salary: j.salary || '',
        description: j.description || '',
        responsibilities: Array.isArray(j.responsibilities) ? j.responsibilities : [],
        requirements: Array.isArray(j.requirements) ? j.requirements : [],
        benefits: Array.isArray(j.benefits) ? j.benefits : []
      }))
      setJobs(normalized)
    }
  }

  function updateJob(id, field, value) {
    setJobs(prev => prev.map(j => j.id === id ? { ...j, [field]: value } : j))
  }

  function updateJobLines(id, field, value) {
    const lines = String(value).split(/\r?\n/).map(s => s.trim()).filter(Boolean)
    setJobs(prev => prev.map(j => j.id === id ? { ...j, [field]: lines } : j))
  }

  function removeJob(id) {
    setJobs(prev => prev.filter(j => j.id !== id))
  }

  function saveJobs() {
    localStorage.setItem('adminJobs', JSON.stringify(jobs))
    alert('Jobs saved')
  }

  function resetJobs() {
    localStorage.removeItem('adminJobs')
    setJobs([])
    alert('Jobs reset to default. The site will now use built-in jobs.')
  }

  if (!isAuthed) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md glass-card p-8 rounded-2xl shadow-2025-medium">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-[#1B4B8F]" />
            <h1 className="text-2xl font-bold">Admin Login</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B4B8F]"
                placeholder="admin@vachiservices.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B4B8F]"
                placeholder="Enter admin password"
              />
            </div>
            <button type="submit" className="w-full gradient-secondary text-white px-4 py-3 rounded-full font-semibold shadow-2025-medium hover:shadow-2025-large transition-all">
              Login
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 container mx-auto px-4">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-[#1B4B8F]" />
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button onClick={handleLogout} className="ml-auto inline-flex items-center px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
          <LogOut className="w-4 h-4 mr-2" /> Sign out
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="glass-card p-6 rounded-2xl shadow-2025-medium">
          <h2 className="text-xl font-semibold mb-4">Careers Hero Content</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hero Title</label>
              <input
                type="text"
                value={heroTitle}
                onChange={e => setHeroTitle(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B4B8F]"
                placeholder="Join the Future of AI-Powered Consulting"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hero Subtitle</label>
              <input
                type="text"
                value={heroSubtitle}
                onChange={e => setHeroSubtitle(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B4B8F]"
                placeholder="Shape the future of technology..."
              />
            </div>
            <button onClick={saveHero} className="inline-flex items-center gradient-secondary text-white px-5 py-2.5 rounded-full font-semibold shadow-2025-medium hover:shadow-2025-large transition-all">
              <Save className="w-4 h-4 mr-2" /> Save Hero
            </button>
          </div>
        </section>

        <section className="glass-card p-6 rounded-2xl shadow-2025-medium">
          <h2 className="text-xl font-semibold mb-4">Home Page Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Watch Demo URL</label>
              <input
                type="url"
                value={demoUrl}
                onChange={e => setDemoUrl(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B4B8F]"
                placeholder="https://youtu.be/..."
              />
            </div>
            <div className="flex gap-3">
              <button onClick={saveDemoUrl} className="inline-flex items-center gradient-secondary text-white px-4 py-2 rounded-full font-semibold shadow-2025-medium hover:shadow-2025-large">
                <Save className="w-4 h-4 mr-2" /> Save Demo URL
              </button>
              <button onClick={resetDemoUrl} className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
                Reset to Default
              </button>
            </div>
          </div>
        </section>

        <section className="glass-card p-6 rounded-2xl shadow-2025-medium lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Job Postings</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <button onClick={loadCurrentJobs} className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
                <RefreshCw className="w-4 h-4 mr-2" /> Load Current
              </button>
              <button onClick={addJob} className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
                <Plus className="w-4 h-4 mr-2" /> Add Job
              </button>
              <button onClick={saveJobs} className="inline-flex items-center gradient-secondary text-white px-4 py-2 rounded-full font-semibold shadow-2025-medium hover:shadow-2025-large">
                <Save className="w-4 h-4 mr-2" /> Save Jobs
              </button>
              <button onClick={resetJobs} className="inline-flex items-center px-4 py-2 rounded-full border border-red-300 text-red-600 hover:bg-red-50">
                Reset to Default
              </button>
            </div>

            <div className="space-y-4">
              {jobs.length === 0 && (
                <p className="text-sm text-gray-500">Using built-in jobs. Click "Load Current" to edit/remove existing postings, or "Add Job" to create new ones.</p>
              )}
              {jobs.map(job => (
                <div key={job.id} className="p-4 rounded-xl border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500">Job Title</label>
                      <input value={job.title} onChange={e => updateJob(job.id, 'title', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500">Type of Role (Department)</label>
                      <input value={job.department || ''} onChange={e => updateJob(job.id, 'department', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500">Location</label>
                      <input value={job.location || ''} onChange={e => updateJob(job.id, 'location', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500">Employment Type (Full-time / Part-time)</label>
                      <input value={job.type || ''} onChange={e => updateJob(job.id, 'type', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Full-time, Part-time, Contract, Internship" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500">Salary</label>
                      <input value={job.salary || ''} onChange={e => updateJob(job.id, 'salary', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="$120k - $160k" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs text-gray-500">Role Summary (Description)</label>
                      <textarea value={job.description || ''} onChange={e => updateJob(job.id, 'description', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" rows={3} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs text-gray-500">Responsibilities (one per line)</label>
                      <textarea value={Array.isArray(job.responsibilities) ? job.responsibilities.join('\n') : (job.responsibilities || '')} onChange={e => updateJobLines(job.id, 'responsibilities', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" rows={4} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs text-gray-500">Requirements (one per line)</label>
                      <textarea value={Array.isArray(job.requirements) ? job.requirements.join('\n') : (job.requirements || '')} onChange={e => updateJobLines(job.id, 'requirements', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" rows={4} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs text-gray-500">Benefits & Perks (one per line)</label>
                      <textarea value={Array.isArray(job.benefits) ? job.benefits.join('\n') : (job.benefits || '')} onChange={e => updateJobLines(job.id, 'benefits', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" rows={4} />
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button onClick={() => removeJob(job.id)} className="inline-flex items-center px-3 py-2 rounded-full border border-red-300 text-red-600 hover:bg-red-50">
                      <Trash2 className="w-4 h-4 mr-2" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Admin