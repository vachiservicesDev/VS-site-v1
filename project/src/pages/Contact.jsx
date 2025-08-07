import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  Linkedin,
  ArrowRight
} from 'lucide-react'
import { jobs } from '../data/jobs'

function Contact() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const jobId = searchParams.get('job')
  const selectedJob = jobs.find(job => job.id === jobId)

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    jobTitle: selectedJob?.title || ''
  })

  const [submitStatus, setSubmitStatus] = useState({
    status: '',
    message: ''
  })

  useEffect(() => {
    if (selectedJob) {
      setFormData(prev => ({
        ...prev,
        jobTitle: selectedJob.title,
        message: `I am interested in the ${selectedJob.title} position and would like to schedule an interview.`
      }))
    }
  }, [selectedJob])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Simulate form submission
    try {
      setSubmitStatus({
        status: 'success',
        message: selectedJob 
          ? 'Thank you for your application! We will review your information and get back to you within 2 business days.'
          : 'Thank you for your message! We will get back to you within 24 hours to schedule your free strategy session.'
      })
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        message: '',
        jobTitle: selectedJob?.title || ''
      })
    } catch (error) {
      setSubmitStatus({
        status: 'error',
        message: 'Failed to send message. Please try again later or contact us directly.'
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["83 Wooster Heights Rd,", "Suite 125, Danbury, CT 06810"],
      color: "text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (612) 423-8425"],
      color: "text-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@vachiservices.com"],
      color: "text-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Monday - Friday", "9:00 AM - 5:00 PM EST"],
      color: "text-orange-600"
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B4B8F] via-[#1B4B8F]/95 to-[#2563eb] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="max-w-4xl mx-auto text-center" variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {selectedJob ? 'Apply for Position' : 'Let\'s Start a Conversation'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {selectedJob 
                ? `Join our team as a ${selectedJob.title}` 
                : 'Ready to transform your business with AI-powered solutions?'
              }
            </p>
            
            {selectedJob && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-2">{selectedJob.title}</h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="flex items-center">
                    <Building className="w-4 h-4 mr-1" />
                    {selectedJob.department}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedJob.type}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-xl"
              variants={scaleIn}
            >
              <h2 className="text-3xl font-bold text-[#1B4B8F] mb-6">
                {selectedJob ? 'Submit Your Application' : 'Schedule Free Strategy Session'}
              </h2>
              
              {submitStatus.status && (
                <div className={`mb-6 p-4 rounded-xl flex items-start ${
                  submitStatus.status === 'success' 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  {submitStatus.status === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  )}
                  <span className={submitStatus.status === 'success' ? 'text-green-700' : 'text-red-700'}>
                    {submitStatus.message}
                  </span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B8F]/50 focus:border-[#1B4B8F] transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company {selectedJob ? '(Optional)' : '*'}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B8F]/50 focus:border-[#1B4B8F] transition-colors"
                      placeholder="Your company name"
                      required={!selectedJob}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B8F]/50 focus:border-[#1B4B8F] transition-colors"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                {selectedJob && (
                  <div>
                    <label htmlFor="jobTitle" className="block text-gray-700 font-medium mb-2">
                      Position
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                      readOnly
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {selectedJob ? 'Cover Letter / Message' : 'Tell us about your project'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B8F]/50 focus:border-[#1B4B8F] transition-colors"
                    placeholder={selectedJob 
                      ? "Tell us why you're interested in this role and what makes you a great fit..."
                      : "Describe your current challenges, goals, and how we can help..."
                    }
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="mr-2 w-5 h-5" />
                  {selectedJob ? 'Submit Application' : 'Schedule Strategy Session'}
                </motion.button>
              </form>

              {!selectedJob && (
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    We'll respond within 24 hours to schedule your free 30-minute strategy session.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={fadeInUp}
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-[#1B4B8F] mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`${info.color} mr-4 mt-1`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Connect With Us</h4>
                  <a 
                    href="https://www.linkedin.com/company/vachiservicesllc/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#1B4B8F] hover:text-[#4CAF50] transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Follow us on LinkedIn
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-[#1B4B8F] mb-6">Our Location</h3>
                <div className="h-64 w-full rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.5276813876087!2d-73.45489372342987!3d41.37796999616445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7fe6bc5972717%3A0x5a7b17551ed626ac!2s83%20Wooster%20Heights%20Rd%2C%20Danbury%2C%20CT%2006810!5e0!3m2!1sen!2sus!4v1682947558799!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      {!selectedJob && (
        <section className="py-20 bg-white">
          <motion.div 
            className="container mx-auto px-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6"
              variants={fadeInUp}
            >
              Ready to 2× Your ROI?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Join industry leaders who've transformed their business with our AI-powered solutions. 
              Let's discuss your specific needs and create a custom strategy.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Link
                to="/services"
                className="bg-[#1B4B8F] hover:bg-[#1B4B8F]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link
                to="/about"
                className="border-2 border-[#1B4B8F] text-[#1B4B8F] hover:bg-[#1B4B8F] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Learn About Our Team
              </Link>
            </motion.div>
          </motion.div>
        </section>
      )}
    </motion.div>
  )
}

export default Contact