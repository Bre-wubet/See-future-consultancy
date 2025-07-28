import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, Phone, Mail, MapPin } from 'lucide-react';
import seefLogo from '../assets/seef-logo.svg';
import MapLocation from '../utils/MapLocation';

const navItems = [
  {
    label: 'Home',
    path: '/',
    children: [
      { label: 'Our Vision', path: '/#vision' },
      { label: 'Latest News', path: '/latest-news' }
    ]
  },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'Our Story', path: '/about/story' },
      { label: 'Our Mission', path: '/about/mission' },
      { label: 'Our Achievements', path: '/about/achievements' },
      { label: 'Our Awards', path: '/about/awards' },
      { label: 'Our Projects', path: '/about/projects' },
      { label: 'Our Team', path: '/about/team' },
      { label: 'Core Values', path: '/about/values' },
      { label: 'Our Partners', path: '/about/partners' },
      { label: 'Our Clients', path: '/about/clients' },
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Consulting', path: '/services/consulting' },
      { label: 'Research & Development', path: '/services/research' },
      { label: 'Training Programs', path: '/services/training' },
      { label: 'Innovation Solutions', path: '/services/innovation' },
      { label: "Agriculture & Environment", path: "/services/agriculture" },
      { label: "Water Management", path: "/services/water" },
      { label: "Health & Social Affairs", path: "/services/health" },
      { label: "GeoInformation Services", path: "/services/geoinfo" }
    ]
  },
  {
    label: 'Thematic Areas',
    path: '/thematic-areas',
    children: [
      { label: 'Climate Change', path: '/thematic-areas/climate-change' },
      { label: 'Sustainable Development', path: '/thematic-areas/sustainable-development' },
      { label: 'Biodiversity', path: '/thematic-areas/biodiversity' },
      { label: 'Renewable Energy', path: '/thematic-areas/renewable-energy' },
      { label: 'Water Resources', path: '/thematic-areas/water-resources' },
      { label: 'Agriculture', path: '/thematic-areas/agriculture' },
      { label: 'Health & Social Affairs', path: '/thematic-areas/health-social' },
      { label: 'GeoInformation Services', path: '/thematic-areas/geo-info' }
    ]
  },
  {
    label: 'Contact Us',
    path: '/contact'
  }
];

function Header() {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white h-12">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+251 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@seefconsulting.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-200 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          onClick={() => setIsMapOpen(true)}
          >
            <MapPin className="w-4 h-4" />
            <span>SEEF Consulting</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-12 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="group">
                <img 
                  src={seefLogo} 
                  alt="SEEF Consulting Logo" 
                  className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={item.label} className="relative group">
                  <div className="flex items-center space-x-1">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                          isActive
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    {item.children && (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        {activeDropdown === index ? (
                          <ChevronUp className="w-4 h-4 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        )}
                      </button>
                    )}
                  </div>
                  
                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 transform origin-top ${
                      activeDropdown === index 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}>
                      <div className="p-2">
                        {item.children.map((subItem) => (
                          <NavLink
                            key={subItem.label}
                            to={subItem.path}
                            className={({ isActive }) =>
                              `block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ${
                                isActive ? 'bg-blue-50 text-blue-600 font-medium' : ''
                              }`
                            }
                            onClick={closeAll}
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`
                      }
                      onClick={() => !item.children && closeAll()}
                    >
                      {item.label}
                    </NavLink>
                    {item.children && (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {activeDropdown === index ? (
                          <ChevronUp className="w-4 h-4 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        )}
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {item.children && (
                    <div className={`ml-4 space-y-1 transition-all duration-300 ${
                      activeDropdown === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {item.children.map((subItem) => (
                        <NavLink
                          key={subItem.label}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 ${
                              isActive ? 'bg-blue-50 text-blue-600 font-medium' : ''
                            }`
                          }
                          onClick={closeAll}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                  onClick={closeAll}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
        {/* Map Location Modal */}
      <MapLocation 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
      />
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-28" />
    </>
  );
}

export default Header;