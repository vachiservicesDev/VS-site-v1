import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Technology', path: '/technology' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="glass-card-light shadow-2025-medium fixed w-full z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <motion.div 
            className="flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center group">
              <motion.img 
                src="/Transparent-logo.png" 
                alt="Vachi Services LLC" 
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                whileHover={{ rotate: [0, -2, 2, 0] }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link 
                  to={item.path}
                  className="px-4 py-3 rounded-full text-gray-700 hover:text-[#1B4B8F] hover:bg-white/50 transition-all duration-300 font-semibold relative group focus-2025"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1B4B8F]/10 to-[#4CAF50]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            ))}
            <motion.div
              key="myVachi"
              custom={navItems.length}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <a
                href="https://vs-self-services-portal.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-full text-gray-700 hover:text-[#1B4B8F] hover:bg-white/50 transition-all duration-300 font-semibold relative group focus-2025"
              >
                <span className="relative z-10">myVachi</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1B4B8F]/10 to-[#4CAF50]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center">
            <div>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-full text-gray-700 hover:text-[#1B4B8F] hover:bg-white/50 focus-2025 transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  className="h-6 w-6" 
                  stroke="currentColor" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </motion.svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden glass-card-light"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 border-t border-white/20">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={navItemVariants}
                  custom={i}
                >
                  <Link
                    to={item.path}
                    className="block px-4 py-3 rounded-full text-gray-700 hover:text-[#1B4B8F] hover:bg-white/50 transition-all duration-300 font-semibold relative group focus-2025"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1B4B8F]/10 to-[#4CAF50]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                key="myVachi-mobile"
                variants={navItemVariants}
                custom={navItems.length}
              >
                <a
                  href="https://vs-self-services-portal.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-full text-gray-700 hover:text-[#1B4B8F] hover:bg-white/50 transition-all duration-300 font-semibold relative group focus-2025"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">myVachi</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1B4B8F]/10 to-[#4CAF50]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar