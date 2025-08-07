import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Cloud, 
  Brain, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Target,
  Award,
  Settings,
  BarChart3,
  Database,
  Cpu,
  Globe,
  Lock
} from 'lucide-react'

function Services() {
  const mainServices = [
    {
      title: "Salesforce Implementation",
      description: "Boost user adoption by 80% with our proven methodology and AI-enhanced configurations that transform how your teams work.",
      icon: <Cloud className="w-12 h-12" />,
      benefits: [
        "80% faster user adoption rates",
        "Custom workflow automation",
        "AI-powered insights and analytics",
        "Seamless data migration",
        "Comprehensive user training"
      ],
      outcomes: "Average 2.5× ROI within 6 months",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AI & Cloud Projects",
      description: "Cut infrastructure costs by 30% while scaling performance with intelligent cloud solutions that grow with your business.",
      icon: <Brain className="w-12 h-12" />,
      benefits: [
        "30% reduction in infrastructure costs",
        "Scalable cloud architecture",
        "AI/ML model integration",
        "Automated deployment pipelines",
        "Real-time monitoring and optimization"
      ],
      outcomes: "Typical 40% performance improvement",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Training & Enablement",
      description: "Hands-on learning programs to reduce consultant dependency and empower your team with the skills they need to succeed.",
      icon: <Users className="w-12 h-12" />,
      benefits: [
        "Reduce external consultant dependency",
        "Hands-on, practical training modules",
        "Certification preparation programs",
        "Custom learning paths",
        "Ongoing mentorship and support"
      ],
      outcomes: "90% certification pass rate",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Strategic Consulting",
      description: "KPI-aligned roadmaps with compliance-first approach for sustainable growth and long-term success.",
      icon: <TrendingUp className="w-12 h-12" />,
      benefits: [
        "KPI-aligned strategic roadmaps",
        "Compliance-first methodology",
        "Risk assessment and mitigation",
        "Change management support",
        "Executive stakeholder alignment"
      ],
      outcomes: "100% compliance achievement rate",
      color: "from-orange-500 to-orange-600"
    }
  ]

  const additionalServices = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      description: "Seamless data flow between systems with real-time synchronization and advanced analytics."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security implementation with SOC 2, HIPAA, and industry-specific compliance."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Process Automation",
      description: "Intelligent workflow automation that reduces manual tasks and improves efficiency."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Advanced business intelligence with AI-powered insights and predictive analytics."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "API Development",
      description: "Custom API solutions for seamless system integration and third-party connectivity."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "End-to-end transformation strategy with modern technology stack implementation."
    }
  ]

  const methodology = [
    {
      phase: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business requirements, current state analysis, and strategic roadmap development.",
      duration: "1-2 weeks"
    },
    {
      phase: "02", 
      title: "Design & Planning",
      description: "Detailed solution architecture, project planning, and stakeholder alignment sessions.",
      duration: "2-3 weeks"
    },
    {
      phase: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing, AI integration, and quality assurance.",
      duration: "4-12 weeks"
    },
    {
      phase: "04",
      title: "Deployment & Training",
      description: "Seamless go-live support, comprehensive user training, and knowledge transfer.",
      duration: "1-2 weeks"
    },
    {
      phase: "05",
      title: "Support & Optimization",
      description: "Ongoing support, performance monitoring, and continuous improvement initiatives.",
      duration: "Ongoing"
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
              Services That Drive <span className="text-[#4CAF50]">Measurable Results</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Expert-Led Software Development & AI-Powered Consulting
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { icon: <Zap className="w-5 h-5" />, text: "2× Faster ROI" },
                { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security" },
                { icon: <Target className="w-5 h-5" />, text: "Guaranteed Outcomes" },
                { icon: <Award className="w-5 h-5" />, text: "US-Based Team" }
              ].map((badge, index) => (
                <div key={index} className="flex items-center text-gray-200">
                  <div className="text-[#4CAF50] mr-2">{badge.icon}</div>
                  {badge.text}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your business operations and accelerate growth.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ y: -8 }}
              >
                <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-lg opacity-90">{service.description}</p>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#4CAF50]/5 p-4 rounded-xl border-l-4 border-[#4CAF50]">
                    <p className="font-semibold text-gray-800">{service.outcomes}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional services to complement your core technology initiatives and ensure comprehensive coverage.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#1B4B8F] mb-4 group-hover:text-[#4CAF50] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures successful delivery, on-time completion, and measurable business outcomes.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {methodology.map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 mr-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1B4B8F] to-[#2563eb] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {phase.phase}
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-[#1B4B8F] to-gray-300 mx-auto mt-4"></div>
                  )}
                </div>
                
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{phase.title}</h3>
                    <span className="bg-[#4CAF50]/10 text-[#4CAF50] px-3 py-1 rounded-full text-sm font-medium">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6">
              Why Choose Vachi Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver more than just technology solutions – we provide strategic partnerships that drive lasting business transformation.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI-Powered Delivery",
                description: "Every project leverages cutting-edge AI to accelerate implementation and optimize outcomes."
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Enterprise Security",
                description: "SOC 2 compliant processes with enterprise-grade security standards and compliance expertise."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "US-Based Team",
                description: "100% US-based consultants ensuring seamless communication and cultural alignment."
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Guaranteed Results",
                description: "We stand behind our work with measurable KPIs and guaranteed business outcomes."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center group"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#1B4B8F] mb-6 flex justify-center group-hover:text-[#4CAF50] transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-200"
            variants={fadeInUp}
          >
            Let's discuss how our AI-powered solutions can deliver 2× faster ROI for your organization. 
            Schedule your free strategy session today.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Link
              to="/contact"
              className="group bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
              Schedule Free Strategy Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/technology"
              className="text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10"
            >
              View Technology Stack
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Services