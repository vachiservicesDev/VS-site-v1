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
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <motion.div 
            className="flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/Transparent-logo.png" 
                alt="Vachi Services LLC" 
                className="h-16 w-auto"
              />
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-4">
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
                  className="px-3 py-2 rounded-md text-gray-700 hover:text-[#1B4B8F] transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1B4B8F] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1B4B8F]"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={navItemVariants}
                  custom={i}
                >
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#1B4B8F] hover:bg-gray-100 transition-colors duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar