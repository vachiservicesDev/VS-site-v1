import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  Zap, 
  Globe, 
  Award, 
  Heart, 
  TrendingUp,
  Search,
  Filter,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Upload,
  Star,
  Quote,
  DollarSign,
  Calendar,
  GraduationCap,
  Coffee,
  Wifi,
  Home,
  Plane,
  Shield
} from 'lucide-react'
import { jobs as defaultJobs } from '../data/jobs'

function Careers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [expandedJob, setExpandedJob] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [overrideJobs, setOverrideJobs] = useState(null)
  const [heroTitle, setHeroTitle] = useState('Join the Future of ')
  const [heroEmphasis, setHeroEmphasis] = useState('AI-Powered Consulting')
  const [heroSubtitle, setHeroSubtitle] = useState("Shape the future of technology with the industry's brightest minds")

  useEffect(() => {
    try {
      const storedJobs = localStorage.getItem('adminJobs')
      if (storedJobs) setOverrideJobs(JSON.parse(storedJobs))
    } catch {}
    const storedTitle = localStorage.getItem('careerTitle')
    const storedSubtitle = localStorage.getItem('careerSubtitle')
    if (storedTitle) {
      setHeroTitle(storedTitle.replace(/<em>.?<\/em>/g, ''))
    }
    if (storedSubtitle) setHeroSubtitle(storedSubtitle)
  }, [])

  const jobs = overrideJobs && Array.isArray(overrideJobs) && overrideJobs.length > 0 ? overrideJobs : defaultJobs

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior AI Engineer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Vachi Services has been the perfect place to grow my career. The projects are challenging, the team is supportive, and the technology stack is cutting-edge. I've learned more here in two years than I did in my previous five years combined."
    },
    {
      name: "Marcus Rodriguez",
      role: "DevOps Lead",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The culture here is incredible. We're encouraged to innovate, take ownership, and push boundaries. The work-life balance is genuine, and the professional development opportunities are unmatched."
    },
    {
      name: "Emily Johnson",
      role: "Salesforce Architect",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "What sets Vachi apart is the quality of projects and clients. We work on meaningful solutions that make a real impact. The leadership team truly cares about employee growth and success."
    }
  ]

  const companyPerks = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Top-tier salaries with performance bonuses and equity participation"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learning Budget",
      description: "$5,000 annual budget for courses, conferences, and certifications"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and home office stipend"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Premium health insurance, mental health support, and wellness programs"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and maintain work-life balance"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Team Events",
      description: "Regular team building, company retreats, and social activities"
    }
  ]

  const companyValues = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and encourage creative problem-solving."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Culture",
      description: "We believe the best solutions come from diverse teams working together."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continuous Growth",
      description: "We invest in our people's development and career advancement."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Our solutions help businesses worldwide transform and succeed."
    }
  ]

  const faqs = [
    {
      question: "What is the hiring process like?",
      answer: "Our hiring process typically includes an initial phone screening, technical assessment, team interviews, and a final conversation with leadership. We aim to complete the process within 2-3 weeks and provide feedback at every stage."
    },
    {
      question: "Do you offer remote work options?",
      answer: "Yes! We're a remote-first company with team members across the United States. We provide home office stipends and flexible working hours to support your productivity and work-life balance."
    },
    {
      question: "What professional development opportunities are available?",
      answer: "We provide a $5,000 annual learning budget for courses, conferences, and certifications. We also have internal mentorship programs, lunch-and-learns, and support for advanced degrees."
    },
    {
      question: "How do you support diversity and inclusion?",
      answer: "Diversity and inclusion are core to our values. We have employee resource groups, unconscious bias training, diverse hiring panels, and regular D&I initiatives. We're committed to building an inclusive workplace for everyone."
    },
    {
      question: "What benefits do you offer?",
      answer: "We offer comprehensive health insurance, 401(k) matching, unlimited PTO, professional development budget, equity participation, wellness programs, and many other benefits designed to support your whole life."
    }
  ]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation
    
    return matchesSearch && matchesDepartment && matchesLocation
  })

  const departments = [...new Set(jobs.map(job => job.department))]
  const locations = [...new Set(jobs.map(job => job.location))]

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
      <section className="relative bg-gradient-to-br from-[#1B4B8F] via-[#1B4B8F]/95 to-[#2563eb] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="max-w-4xl mx-auto text-center" variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {heroTitle}
              <span className="text-[#4CAF50]">{heroEmphasis}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {heroSubtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              {[
                { icon: <Users className="w-5 h-5" />, text: "Remote-First Culture" },
                { icon: <GraduationCap className="w-5 h-5" />, text: "$5K Learning Budget" },
                { icon: <Heart className="w-5 h-5" />, text: "Unlimited PTO" },
                { icon: <Award className="w-5 h-5" />, text: "Equity Participation" }
              ].map((badge, index) => (
                <div key={index} className="flex items-center text-gray-200">
                  <div className="text-[#4CAF50] mr-2">{badge.icon}</div>
                  {badge.text}
                </div>
              ))}
            </div>

            <motion.button
              className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Opportunities
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">Why Vachi Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just building software – we're building the future. Join a team that values innovation, 
              collaboration, and personal growth in an AI-first environment.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={staggerContainer}
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#1B4B8F] mb-4 group-hover:text-[#4CAF50] transition-colors duration-300 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Perks */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {companyPerks.map((perk, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start">
                  <div className="text-[#1B4B8F] mr-4 group-hover:text-[#4CAF50] transition-colors duration-300">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{perk.title}</h3>
                    <p className="text-gray-600 text-sm">{perk.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next career opportunity with us</p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div 
            className="bg-gray-50 p-6 rounded-2xl shadow-lg mb-8"
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B8F]/50 focus:border-[#1B4B8F] transition-colors"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B8F]/50 focus:border-[#1B4B8F] appearance-none transition-colors"
                >
                  <option value="all">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4B8F]/50 focus:border-[#1B4B8F] appearance-none transition-colors"
                >
                  <option value="all">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div className="text-gray-600 flex items-center justify-center">
                <span className="font-medium">{filteredJobs.length} positions found</span>
              </div>
            </div>
          </motion.div>

          {/* Job Cards */}
          <motion.div className="space-y-6" variants={staggerContainer}>
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex flex-wrap justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm mb-4">
                        <span className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{job.description}</p>
                    </div>
                    
                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-[#4CAF50] mb-3">{job.salary}</div>
                      <div className="space-y-2">
                        <button
                          onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                          className="flex items-center text-[#1B4B8F] hover:text-[#1B4B8F]/80 font-medium text-sm"
                        >
                          {expandedJob === job.id ? 'Less Details' : 'View Details'}
                          {expandedJob === job.id ? 
                            <ChevronUp className="w-4 h-4 ml-1" /> : 
                            <ChevronDown className="w-4 h-4 ml-1" />
                          }
                        </button>
                        <Link
                          to={`/contact?job=${job.id}`}
                          className="block bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-6 py-2 rounded-lg transition-colors duration-300 text-center font-semibold"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-gray-50"
                    >
                      <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-gray-800">Responsibilities</h4>
                            <ul className="space-y-3">
                              {job.responsibilities.map((resp, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="w-2 h-2 bg-[#1B4B8F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-600">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-gray-800">Requirements</h4>
                            <ul className="space-y-3">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-600">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-xl border">
                          <h4 className="text-lg font-semibold mb-4 text-gray-800">Benefits & Perks</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {job.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center">
                                <Shield className="w-4 h-4 text-[#4CAF50] mr-3 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">What Our Team Says</h2>
            <p className="text-xl text-gray-600">Hear from the people who make Vachi Services special</p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-[#1B4B8F] mr-4" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-[#1B4B8F] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about joining our team</p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                  {expandedFAQ === index ? 
                    <ChevronUp className="w-6 h-6 text-[#1B4B8F]" /> : 
                    <ChevronDown className="w-6 h-6 text-[#1B4B8F]" />
                  }
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="px-8 py-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B4B8F] to-[#2563eb] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 right-10 w-64 h-64 bg-[#4CAF50]/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-200"
            variants={fadeInUp}
          >
            Join a team that's passionate about technology, innovation, and making a difference. 
            Your next career adventure starts here.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Link
              to="/contact"
              className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-[#1B4B8F] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Learn About Our Culture
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Careers