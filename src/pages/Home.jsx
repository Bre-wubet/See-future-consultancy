import React, { useEffect, useState } from 'react'
import Hero from '../sections/homes/Hero'
import LatestNews from '../sections/homes/LatestNews'
import { ArrowUp, ChevronRight, Star, Users, Target, Award, Globe, Leaf, Droplets, Heart, Map, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoIntro from '../assets/logo.mp4'

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    const timer = setTimeout(() => setIsVisible(true), 100)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    {
      icon: Target,
      title: "Research & Development",
      description: "Cutting-edge research solutions for sustainable development challenges.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert consulting for environmental and social impact projects.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Training Programs",
      description: "Comprehensive training for organizations and communities.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Leaf,
      title: "Agriculture & Environment",
      description: "Sustainable agricultural practices and environmental protection.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Droplets,
      title: "Water Management",
      description: "Innovative water resource management and conservation.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Heart,
      title: "Health & Social Affairs",
      description: "Community health initiatives and social development programs.",
      color: "from-pink-500 to-pink-600"
    }
  ]

  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe }
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Environmental Director",
      company: "GreenTech Solutions",
      content: "SEEF Consult's innovative approach to sustainable development has transformed our organization's environmental impact. Their expertise is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      company: "Global Water Initiative",
      content: "The water management solutions provided by SEEF Consult have been game-changing for our community projects. Highly recommended!",
      rating: 5
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Research Lead",
      company: "Climate Action Network",
      content: "Working with SEEF Consult has been an incredible experience. Their research capabilities and commitment to sustainability are outstanding.",
      rating: 5
    }
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-16 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEEF</span> Consultancy
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The acronym “SEE” encapsulates our commitment to Sustainability across Social, Environmental, and Economic spheres. SEEF is a pioneering consulting firm comprising a team of experts proficient in diverse domains within the natural and social sciences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Innovative research and development solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Expert consulting for environmental projects</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Comprehensive training and capacity building</p>
                </div>
              </div>
              <Link 
                to="/about"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Learn More About Us
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative flex items-center justify-center">
              <video 
                src={logoIntro}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain bg-white"
                style={{ background: 'white' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for sustainable development, environmental conservation, and social progress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View All Services
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why organizations worldwide trust SEEF Consult for their sustainable development needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <LatestNews />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default Home