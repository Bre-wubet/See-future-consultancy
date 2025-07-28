import React, { useEffect, useState } from 'react'
import Hero from '../sections/homes/Hero'
import LatestNews from '../sections/homes/LatestNews'
import { ArrowUp, ChevronRight, Star, Users, Target, Award, Globe, Leaf, Droplets, Heart, Map, TrendingUp, CheckCircle, Lightbulb, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoIntro from '../assets/logo.mp4'

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    team: 0,
    countries: 0
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    const timer = setTimeout(() => setIsVisible(true), 100)

    // Auto-rotate features
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3)
    }, 4000)

    // Animate stats when in view
    const animateStats = () => {
      const aboutSection = document.getElementById('about-section')
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimatedStats({
            experience: 10,
            projects: 500,
            team: 50,
            countries: 25
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', animateStats)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', animateStats)
      clearTimeout(timer)
      clearInterval(featureInterval)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge research and development solutions",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Sustainability",
      description: "Expert consulting for environmental projects",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Comprehensive training and capacity building",
      color: "from-blue-400 to-purple-500"
    }
  ]

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
      <section id="about-section" className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-8">
              {/* Header with animated gradient */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-4">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Leading Sustainability Consultancy
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">SEEF</span> Consultancy
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  The acronym "SEE" encapsulates our commitment to <span className="font-semibold text-blue-600">Sustainability</span> across <span className="font-semibold text-green-600">Social</span>, <span className="font-semibold text-emerald-600">Environmental</span>, and <span className="font-semibold text-purple-600">Economic</span> spheres.
                </p>
              </div>

              {/* Interactive Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Why Choose SEEF?</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`group cursor-pointer transition-all duration-500 p-6 rounded-xl border-2 ${
                        activeFeature === index 
                          ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {index === 0 && `${animatedStats.experience}+`}
                      {index === 1 && `${animatedStats.projects}+`}
                      {index === 2 && `${animatedStats.team}+`}
                      {index === 3 && `${animatedStats.countries}+`}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link 
                  to="/about"
                  className="group inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Discover Our Story
                  <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Enhanced Video Section */}
            <div className="relative">
              <div className="relative z-10">
                <video 
                  src={logoIntro}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain bg-white/90 backdrop-blur-sm border border-white/20"
                  style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                />
              </div>
              {/* Floating elements around video */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6 animate-fade-in">
              <Target className="w-4 h-4 mr-2" />
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200">
              Comprehensive solutions for sustainable development, environmental conservation, and social progress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Icon with minimized size and enhanced animations */}
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <service.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Service Title with hover animation */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1">
                  {service.title}
                </h3>
                
                {/* Service Description with subtle animation */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-blue-500/20 transition-all duration-300 pointer-events-none"></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 animate-ping delay-500 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in delay-500">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/services"
                className="group inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Services
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Free Consultation
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
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