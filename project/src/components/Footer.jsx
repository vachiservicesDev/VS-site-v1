import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Linkedin,
  ArrowRight,
  LogIn
} from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4CAF50] to-[#1B4B8F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#2563eb] to-purple-500 rounded-full blur-2xl"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={staggerContainer}
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <motion.img 
              src="/Transparent-logo.png" 
              alt="Vachi Services LLC" 
              className="h-14 w-auto mb-6 brightness-0 invert"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              AI-First Consulting. Enterprise-Grade Delivery. Boutique Excellence.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white mb-2 text-base">Founded 2022</p>
              <p className="text-gray-300">US-Based Team</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-8 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Technology Stack', path: '/technology' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 flex items-center group text-lg focus-2025"
                  >
                    {link.name}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-8 text-white">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Salesforce Implementation',
                'AI & Cloud Projects',
                'Training & Enablement',
                'Strategic Consulting',
                'Data Integration',
                'Security & Compliance'
              ].map((service, index) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 cursor-pointer text-lg">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-8 text-white">Contact Info</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-6 h-6 text-[#4CAF50] mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-300 text-lg">
                  <p>83 Wooster Heights Rd,</p>
                  <p>Suite 125, Danbury, CT 06810</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-6 h-6 text-[#4CAF50] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="tel:+16124238425" 
                  className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 text-lg focus-2025"
                >
                  +1 (612) 423-8425
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-6 h-6 text-[#4CAF50] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="mailto:info@vachiservices.com" 
                  className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 text-lg focus-2025"
                >
                  info@vachiservices.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-6 h-6 text-[#4CAF50] mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-300 text-lg">
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM EST</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 pt-10 border-t border-gray-700"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="text-gray-400 text-base mb-6 md:mb-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p>&copy; 2022 Vachi Services LLC. All rights reserved.</p>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <a 
                href="https://www.linkedin.com/company/vachiservicesllc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 flex items-center group focus-2025"
              >
                <Linkedin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-base">Follow us on LinkedIn</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </a>
              <a
                href="https://vs-self-services-portal.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gradient-secondary hover:shadow-2025-large text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 transform shadow-2025-medium hover-lift focus-2025"
              >
                <LogIn className="w-5 h-5 mr-2" />
                <span className="text-base">Login</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer