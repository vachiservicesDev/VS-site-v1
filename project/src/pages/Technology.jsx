import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Cloud, 
  Brain, 
  Database, 
  Shield, 
  Zap, 
  Settings,
  ArrowRight,
  CheckCircle,
  Code,
  Cpu,
  Globe,
  Lock,
  BarChart3,
  GitBranch
} from 'lucide-react'

function Technology() {
  const techCategories = [
    {
      category: "Salesforce Ecosystem",
      description: "Complete Salesforce platform expertise with AI-enhanced implementations",
      icon: <Cloud className="w-12 h-12" />,
      color: "from-blue-500 to-blue-600",
      technologies: [
        { name: "Salesforce CRM", description: "Sales, Service, Marketing Cloud implementations" },
        { name: "Lightning Platform", description: "Custom app development and automation" },
        { name: "Einstein AI", description: "AI-powered insights and predictions" },
        { name: "MuleSoft", description: "API-led connectivity and integration" },
        { name: "Tableau", description: "Advanced analytics and visualization" }
      ]
    },
    {
      category: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions with intelligent automation",
      icon: <Globe className="w-12 h-12" />,
      color: "from-green-500 to-green-600",
      technologies: [
        { name: "AWS", description: "Complete cloud infrastructure and services" },
        { name: "Google Cloud", description: "AI/ML services and data analytics" },
        { name: "Microsoft Azure", description: "Enterprise cloud and hybrid solutions" },
        { name: "Kubernetes", description: "Container orchestration and management" },
        { name: "Docker", description: "Containerization and deployment" }
      ]
    },
    {
      category: "AI & Machine Learning",
      description: "Cutting-edge AI integration for intelligent business solutions",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-500 to-purple-600",
      technologies: [
        { name: "TensorFlow", description: "Deep learning and neural networks" },
        { name: "PyTorch", description: "Research and production ML models" },
        { name: "OpenAI GPT", description: "Natural language processing and generation" },
        { name: "Computer Vision", description: "Image and video analysis solutions" },
        { name: "MLOps", description: "ML model deployment and monitoring" }
      ]
    },
    {
      category: "Development & DevOps",
      description: "Modern development practices with CI/CD automation",
      icon: <Code className="w-12 h-12" />,
      color: "from-orange-500 to-orange-600",
      technologies: [
        { name: "React/Node.js", description: "Modern web application development" },
        { name: "Python", description: "Backend development and data science" },
        { name: "Java/.NET", description: "Enterprise application development" },
        { name: "CI/CD Pipelines", description: "Automated testing and deployment" },
        { name: "Infrastructure as Code", description: "Terraform and CloudFormation" }
      ]
    }
  ]

  const methodologies = [
    {
      title: "API-First Architecture",
      description: "Design systems with API-first approach for maximum flexibility and integration capabilities.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "CI/CD Automation",
      description: "Continuous integration and deployment pipelines for faster, more reliable releases.",
      icon: <GitBranch className="w-8 h-8" />
    },
    {
      title: "Compliance-Ready",
      description: "Built-in compliance for SOC 2, HIPAA, GDPR, and industry-specific regulations.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "AI-Enhanced Delivery",
      description: "Leverage AI throughout the development lifecycle for optimized outcomes.",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Security by Design",
      description: "Enterprise-grade security integrated from the ground up, not bolted on later.",
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization for peak performance and scalability.",
      icon: <Zap className="w-8 h-8" />
    }
  ]

  const integrationCapabilities = [
    "Real-time data synchronization",
    "RESTful and GraphQL APIs",
    "Event-driven architecture",
    "Microservices design patterns",
    "Legacy system modernization",
    "Third-party platform connectivity"
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
              Technology Stack That <span className="text-[#4CAF50]">Delivers Results</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive Solutions with Cutting-Edge Technologies
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { icon: <Brain className="w-5 h-5" />, text: "AI-Enhanced" },
                { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security" },
                { icon: <Zap className="w-5 h-5" />, text: "High Performance" },
                { icon: <Globe className="w-5 h-5" />, text: "Cloud-Native" }
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

      {/* Technology Categories */}
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
              Our Technology Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage a comprehensive technology stack to deliver enterprise-grade solutions that drive digital transformation.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ y: -8 }}
              >
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.category}</h3>
                      <p className="opacity-90">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4">
                    {category.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                          <p className="text-gray-600 text-sm">{tech.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Methodologies Section */}
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
              Our Development Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading practices and methodologies that ensure successful project delivery and long-term success.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {methodologies.map((methodology, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#1B4B8F] mb-4 group-hover:text-[#4CAF50] transition-colors duration-300">
                  {methodology.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{methodology.title}</h3>
                <p className="text-gray-600 leading-relaxed">{methodology.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-8">
                Seamless Integration Capabilities
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our integration expertise ensures your systems work together harmoniously, creating a unified technology ecosystem that drives efficiency and innovation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {integrationCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center bg-[#1B4B8F] hover:bg-[#1B4B8F]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Integration Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div 
              className="relative"
              variants={scaleIn}
            >
              <div className="bg-gradient-to-br from-[#1B4B8F] to-[#2563eb] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Integration Architecture</h3>
                <div className="space-y-6">
                  {[
                    { icon: <Database className="w-8 h-8" />, title: "Data Layer", desc: "Unified data management across all systems" },
                    { icon: <Settings className="w-8 h-8" />, title: "API Gateway", desc: "Centralized API management and security" },
                    { icon: <Cpu className="w-8 h-8" />, title: "Processing Engine", desc: "Real-time data processing and transformation" },
                    { icon: <BarChart3 className="w-8 h-8" />, title: "Analytics Layer", desc: "Business intelligence and reporting" }
                  ].map((layer, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-[#4CAF50] mr-4">{layer.icon}</div>
                      <div>
                        <h4 className="font-semibold">{layer.title}</h4>
                        <p className="text-gray-200 text-sm">{layer.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Performance & Security */}
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
              Performance & Security First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every solution is built with enterprise-grade performance and security standards from the ground up.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "High Performance",
                metrics: ["99.9% Uptime", "Sub-second Response", "Auto-scaling"],
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Enterprise Security",
                metrics: ["SOC 2 Compliant", "End-to-end Encryption", "Zero Trust Architecture"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Global Scale",
                metrics: ["Multi-region Deployment", "CDN Integration", "Load Balancing"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Real-time Monitoring",
                metrics: ["24/7 Monitoring", "Predictive Analytics", "Automated Alerts"],
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center group"
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-r ${feature.color} rounded-2xl p-6 mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <div className="text-white flex justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.metrics.map((metric, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{metric}</li>
                  ))}
                </ul>
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
            Ready to Leverage Our Technology Stack?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-200"
            variants={fadeInUp}
          >
            Let's discuss how our comprehensive technology expertise can accelerate your digital transformation and deliver measurable business results.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Link
              to="/contact"
              className="group bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
              Schedule Technology Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10"
            >
              View Our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Technology