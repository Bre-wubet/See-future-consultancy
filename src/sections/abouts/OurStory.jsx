import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Leaf, 
  Users, 
  Target, 
  Globe, 
  Heart, 
  TrendingUp, 
  Award, 
  CheckCircle,
  Calendar,
  MapPin,
  Lightbulb,
  Shield,
  Star,
  ArrowRight
} from 'lucide-react'

function OurStory() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTimeline, setActiveTimeline] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    
    // Auto-rotate timeline
    const timelineInterval = setInterval(() => {
      setActiveTimeline(prev => (prev + 1) % 3)
    }, 3000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(timelineInterval)
    }
  }, [])

  const storyData = {
    title: "Our Story",
    subtitle: "Building a Sustainable Future",
    description: "SEEF Future Consult PLC (SEEF) is a leading consulting firm dedicated to promoting sustainable environmental and natural resource management for the well-being of present and future generations.",
    established: "February 2023",
    mission: "We specialize in social, environmental, and economic sustainability, aligning with our name's core pillars.",
    vision: "To be the global leader in sustainable development consulting, creating lasting positive impact for generations to come.",
    pillars: [
      {
        icon: Users,
        title: "Social Sustainability",
        description: "Empowering communities through inclusive development and social progress initiatives.",
        color: "from-blue-500 to-blue-600",
        features: ["Community Development", "Social Impact Assessment", "Capacity Building"]
      },
      {
        icon: Leaf,
        title: "Environmental Sustainability",
        description: "Protecting and preserving natural resources for future generations.",
        color: "from-green-500 to-green-600",
        features: ["Resource Management", "Climate Action", "Biodiversity Protection"]
      },
      {
        icon: TrendingUp,
        title: "Economic Sustainability",
        description: "Creating sustainable economic models that benefit all stakeholders.",
        color: "from-purple-500 to-purple-600",
        features: ["Green Economy", "Circular Economy", "Sustainable Finance"]
      }
    ],
    achievements: [
      {
        number: "50+",
        label: "Projects Completed",
        icon: Target,
        description: "Successfully delivered sustainable solutions"
      },
      {
        number: "25+",
        label: "Countries Served",
        icon: Globe,
        description: "Global reach and impact"
      },
      {
        number: "100%",
        label: "Client Satisfaction",
        icon: Heart,
        description: "Exceeding expectations consistently"
      },
      {
        number: "2+",
        label: "Years Experience",
        icon: Award,
        description: "Proven track record of excellence"
      }
    ],
    timeline: [
      {
        year: "2023",
        title: "Foundation",
        description: "SEEF was established with a vision for sustainable development and environmental stewardship",
        icon: Calendar,
        achievements: ["Company Founded", "First Projects Launched", "Team Established"]
      },
      {
        year: "2024",
        title: "Expansion",
        description: "Expanded services across multiple countries and sectors, building strong partnerships",
        icon: TrendingUp,
        achievements: ["International Expansion", "Service Diversification", "Partnership Growth"]
      },
      {
        year: "2025",
        title: "Innovation",
        description: "Leading the way in sustainable consulting solutions and cutting-edge methodologies",
        icon: Lightbulb,
        achievements: ["Innovation Hub", "Technology Integration", "Future Planning"]
      }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-xs font-medium text-blue-700 mb-4">
            <Leaf className="w-3 h-3 mr-1" />
            Our Journey
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              {storyData.title}
            </span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6"
          >
            {storyData.subtitle}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6"
          >
            {storyData.description}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-green-700 font-semibold shadow-md text-sm"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Established: {storyData.established}
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div 
              variants={cardVariants}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {storyData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {storyData.vision}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8"
          >
            Our Core Pillars
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storyData.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 hover:scale-105 relative overflow-hidden"
              >
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`w-12 h-12 bg-gradient-to-r ${pillar.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {pillar.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {pillar.description}
                </p>
                
                {/* Features list */}
                <div className="space-y-1">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8"
          >
            Our Achievements
          </motion.h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {storyData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center group bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {achievement.number}
                </div>
                <div className="text-xs text-gray-600 font-medium mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-gray-500">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8"
          >
            Our Journey
          </motion.h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full hidden lg:block"></div>
            
            <div className="space-y-8">
              {storyData.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-8`}
                >
                  <div className="lg:w-1/2 mb-4 lg:mb-0">
                    <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${
                      activeTimeline === index ? 'border-blue-500 shadow-xl' : 'border-transparent'
                    }`}>
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-blue-600">{item.year}</div>
                          <div className="text-base font-semibold text-gray-900">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                        {item.description}
                      </p>
                      
                      {/* Achievements list */}
                      <div className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center text-xs text-gray-600">
                            <ArrowRight className="w-2 h-2 text-blue-500 mr-1 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative lg:w-0 lg:flex lg:justify-center">
                    <div className={`w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-3 border-white shadow-lg transition-all duration-300 ${
                      activeTimeline === index ? 'scale-125 ring-2 ring-blue-200' : ''
                    }`}></div>
                  </div>
                  
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Join Us in Building a Sustainable Future
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Together, we can create lasting positive impact for present and future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="group inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-base hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Learn More About Our Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group inline-flex items-center bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-full font-semibold text-base hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-lg">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory