import { Link } from "react-router-dom"
import { Facebook, Linkedin, Instagram, Twitter, Mail, MapPin, Phone, Users, Briefcase, Target, FileText, Leaf, Droplets, Heart, Map } from "lucide-react"
import MapLocation from "../utils/MapLocation"
import { useState } from "react"

function Footer() {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Thematic Areas", href: "/thematic-areas", icon: Target },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  const services = [
    { name: "Research & Development", href: "/services", icon: FileText },
    { name: "Consulting", href: "/services", icon: Briefcase },
    { name: "Training Programs", href: "/services", icon: Users },
    { name: "Innovation Solutions", href: "/services", icon: Target },
    { name: "Agriculture & Environment", href: "/services", icon: Leaf },
    { name: "Water Management", href: "/services", icon: Droplets },
    { name: "Health & Social Affairs", href: "/services", icon: Heart },
    { name: "GeoInformation Services", href: "/services", icon: Map }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative bottom-0 w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <Link to="/" className="flex items-center group">
                  <img 
                    src="/src/assets/seef-logo.svg" 
                    alt="See Future Logo" 
                    className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.marginLeft = '0';
                    }}
                  />
                  <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    See Future
                  </span>
                </Link>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Empowering organizations through innovative research, strategic consulting, and transformative solutions for a sustainable future.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <button 
                  onClick={() => setIsMapOpen(true)}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 w-full text-left group"
                >
                  <MapPin className="h-4 w-4 mr-3 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm group-hover:text-blue-300 transition-colors duration-200">
                    Addis Ababa Dembel City Center Street, 12th Floor office no 1237
                  </span>
                </button>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <Phone className="h-4 w-4 mr-3 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">+251-115621777</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <Mail className="h-4 w-4 mr-3 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">info@seefcounsult.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="flex items-center text-gray-300 hover:text-white transition-all duration-200 group"
                    >
                      <link.icon className="h-4 w-4 mr-3 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Our Services
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-white transition-all duration-200 group"
                    >
                      <service.icon className="h-4 w-4 mr-3 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Stay Connected
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </h3>
              
              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe to our newsletter for the latest insights and updates.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-r-md hover:from-blue-600 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-300 text-sm mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-2 bg-gray-700 rounded-lg text-gray-300 transition-all duration-200 ${social.color} hover:bg-gray-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>© {currentYear} See Future. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link to="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Made with</span>
                <span className="text-red-400">❤</span>
                <span>for the future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Location Modal */}
      <MapLocation 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
      />
    </footer>
  )
}

export default Footer