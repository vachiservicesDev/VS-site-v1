import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Cloud, 
  Brain, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Quote,
  Calendar,
  Award,
  Shield,
  Zap
} from 'lucide-react'

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Tripled adoption in 90 days",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "Saved $70K/year via AI project",
      author: "Marcus Rodriguez", 
      role: "VP Operations",
      company: "Manufacturing Leader"
    },
    {
      quote: "Felt like in-house team",
      author: "Emily Johnson",
      role: "Project Manager",
      company: "Healthcare Innovation"
    }
  ]

  const services = [
    {
      title: "Salesforce Implementation",
      description: "Boost user adoption by 80% with our proven methodology and AI-enhanced configurations",
      icon: <Cloud className="w-8 h-8" />,
      benefits: ["80% faster user adoption", "Custom workflows", "AI-powered insights"]
    },
    {
      title: "AI & Cloud Projects", 
      description: "Cut infrastructure costs by 30% while scaling performance with intelligent cloud solutions",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["30% cost reduction", "Scalable architecture", "AI integration"]
    },
    {
      title: "Training & Enablement",
      description: "Hands-on learning programs to reduce consultant dependency and empower your team",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Reduce dependency", "Hands-on training", "Team empowerment"]
    },
    {
      title: "Strategic Consulting",
      description: "KPI-aligned roadmaps with compliance-first approach for sustainable growth",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["KPI alignment", "Compliance ready", "Growth focused"]
    }
  ]

  const trustBadges = [
    { icon: <Shield className="w-6 h-6" />, text: "US-Based Team" },
    { icon: <Award className="w-6 h-6" />, text: "Founded 2022" },
    { icon: <Zap className="w-6 h-6" />, text: "AI-First Delivery" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Enterprise Grade" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

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
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="relative gradient-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Enhanced Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float"></div>
        </div>
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 bg-[#4CAF50]/30 rounded-full blur-xl animate-pulse-glow"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-48 h-48 bg-white/15 rounded-full blur-2xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400/20 rounded-full blur-lg"
            animate={{ 
              scale: [0.8, 1.4, 0.8],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              CRM & Cloud Solutions That Deliver{' '}
              <span className="bg-gradient-to-r from-[#4CAF50] via-[#10b981] to-[#059669] bg-clip-text text-transparent animate-pulse-glow">2× Faster ROI</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 font-medium"
              variants={fadeInUp}
            >
              Powered by AI. Delivered by Experts.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={fadeInUp}
            >
              <Link
                to="/contact"
                className="group gradient-secondary hover:shadow-2025-large text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-2025-medium flex items-center hover-lift focus-2025"
              >
                Book Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <button onClick={() => window.open('https://youtu.be/s4AoBwzuWGw?si=KNG5wzyZiD1cueor', '_blank', 'noopener,noreferrer')} className="glass-card text-white border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 hover:bg-white/20 hover-lift focus-2025">
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-sm"
              variants={fadeInUp}
            >
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center text-gray-200">
                  <div className="text-[#4CAF50] mr-2">{badge.icon}</div>
                  {badge.text}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
              Services That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From Salesforce implementation to AI-powered cloud solutions, we deliver measurable outcomes that transform your business.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="glass-card-light p-8 rounded-3xl shadow-2025-medium hover:shadow-2025-large transition-all duration-500 group border border-gray-100/50 hover-lift relative overflow-hidden"
                whileHover={{ y: -12, scale: 1.02 }}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4B8F]/5 to-[#4CAF50]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-[#1B4B8F] mb-6 group-hover:text-[#4CAF50] transition-colors duration-500 transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-[#1B4B8F] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#4CAF50] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-16" variants={fadeInUp}>
            <Link
              to="/services"
              className="inline-flex items-center gradient-primary hover:shadow-2025-large text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-2025-medium hover-lift focus-2025"
            >
              Explore All Services
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Section - Client Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1B4B8F] to-[#4CAF50]"></div>
        </div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped companies achieve breakthrough results
            </p>
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto"
            variants={fadeInUp}
          >
            <div className="glass-card gradient-primary rounded-3xl p-12 text-white relative overflow-hidden shadow-2025-large">
              {/* Enhanced Decorative Elements */}
              <div className="absolute top-6 left-6">
                <Quote className="w-16 h-16 text-[#4CAF50] opacity-60 animate-float" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#4CAF50]/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1 animate-pulse-glow" />
                ))}
              </div>

              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center relative z-10"
              >
                <p className="text-2xl md:text-4xl font-bold mb-10 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-white mb-2">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-gray-200 text-lg mb-1">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-gray-300">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <div className="flex justify-center mt-10 space-x-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      index === currentTestimonial ? 'bg-[#4CAF50] scale-125 shadow-2025-medium' : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
              Why Leading Companies Choose Vachi
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We combine boutique execution with enterprise-grade delivery, powered by AI and delivered by experts.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
          >
            {[
              {
                title: "US-Based Excellence",
                description: "Founded in 2022, our team of certified experts delivers world-class solutions with American business values and communication standards.",
                icon: <Shield className="w-12 h-12" />
              },
              {
                title: "AI-Embedded Delivery",
                description: "Every project leverages cutting-edge AI to accelerate implementation, reduce costs, and deliver superior outcomes.",
                icon: <Brain className="w-12 h-12" />
              },
              {
                title: "Boutique Execution",
                description: "White-glove service with dedicated teams that feel like an extension of your organization, not just another vendor.",
                icon: <Award className="w-12 h-12" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="glass-card-light p-10 rounded-3xl shadow-2025-medium text-center group hover:shadow-2025-large transition-all duration-500 hover-lift relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B4B8F]/10 to-[#4CAF50]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-[#1B4B8F] mb-8 flex justify-center group-hover:text-[#4CAF50] transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-[#1B4B8F] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary text-white relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 right-10 w-80 h-80 bg-[#4CAF50]/20 rounded-full blur-3xl animate-pulse-glow"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl"
            animate={{ 
              scale: [1.2, 0.8, 1.2],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
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
            className="text-4xl md:text-6xl font-bold mb-8"
            variants={fadeInUp}
          >
            Ready to 2× Your ROI?
          </motion.h2>
          <motion.p 
            className="text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed"
            variants={fadeInUp}
          >
            Join industry leaders who've transformed their business with our AI-powered solutions. 
            Book your free strategy session today.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={fadeInUp}
          >
            <Link
              to="/contact"
              className="group gradient-secondary hover:shadow-2025-large text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-2025-medium flex items-center hover-lift focus-2025"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Schedule Free Strategy Session
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="glass-card text-white border-2 border-white/20 hover:border-white/40 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 hover:bg-white/20 hover-lift focus-2025"
            >
              Learn About Our Team
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating CTA Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <Link
          to="/contact"
          className="gradient-secondary hover:shadow-2025-large text-white p-4 rounded-full shadow-2025-medium transition-all duration-500 transform hover:scale-110 flex items-center group hover-lift focus-2025 animate-pulse-glow"
        >
          <Calendar className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden sm:inline font-semibold">Book Strategy Call</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Home