import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Linkedin,
  ArrowRight
} from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/Transparent-logo.png" 
              alt="Vachi Services LLC" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              AI-First Consulting. Enterprise-Grade Delivery. Boutique Excellence.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-medium text-white mb-1">Founded 2022</p>
              <p>US-Based Team</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Technology Stack', path: '/technology' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Salesforce Implementation',
                'AI & Cloud Projects',
                'Training & Enablement',
                'Strategic Consulting',
                'Data Integration',
                'Security & Compliance'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>83 Wooster Heights Rd,</p>
                  <p>Suite 125, Danbury, CT 06810</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#4CAF50] mr-3 flex-shrink-0" />
                <a 
                  href="tel:+16124238425" 
                  className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300"
                >
                  +1 (612) 423-8425
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#4CAF50] mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@vachiservices.com" 
                  className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300"
                >
                  info@vachiservices.com
                </a>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} Vachi Services LLC. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.linkedin.com/company/vachiservicesllc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 flex items-center group"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                <span className="text-sm">Follow us on LinkedIn</span>
                <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-[#1B4B8F] to-[#2563eb] rounded-2xl text-center">
          <h4 className="text-xl font-bold mb-2">Ready to Transform Your Business?</h4>
          <p className="text-gray-200 mb-4">Schedule your free strategy session today</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Schedule Free Strategy Session
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer