import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react'
import heroVideo from '../../assets/hero.mp4'

function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = React.useRef(null)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const toggleVideo = () => {
    if (videoRef.current && !videoError) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current && !videoError) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about') || document.querySelector('main')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleVideoError = () => {
    setVideoError(true)
    console.log('Video failed to load, using fallback background')
  }

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Video Background with Fallback */}
      {!videoError && (
        <video 
          ref={videoRef}
          src={heroVideo}
          autoPlay 
          muted 
          loop 
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
          onError={handleVideoError}
        />
      )}
      
      {/* Fallback Gradient Background */}
      <div className='absolute inset-0'></div>
      
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40 backdrop-blur-[1px]'></div>
      
      {/* Video Controls - Only show if video is working */}
      {!videoError && (
        <div className='absolute top-6 right-6 z-20 flex space-x-2'>
          <button
            onClick={toggleVideo}
            className='p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110'
            aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
          >
            {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className='p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110'
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-4xl mx-auto'>
          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Working together
            </span>
            <br />
            <span className='text-white'>for sustainable future</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            At SEEF Consult, we're dedicated to fostering the sustainable use of our precious environmental and natural resources for the benefit of both current and future generations.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link 
              to='/about' 
              className='group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center space-x-2'
            >
              <span>Learn More</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
            
            <Link 
              to='/contact' 
              className='group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 flex items-center space-x-2'
            >
              <span>Contact Us</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
            
            <Link 
              to='/services' 
              className='group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center space-x-2'
            >
              <span>Our Services</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
            <Link 
              to='/latest-news'
              className='group bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center space-x-2'
            >
              <span>Latest News</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>10+</div>
              <div className='text-gray-300 text-sm'>Years Experience</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>500+</div>
              <div className='text-gray-300 text-sm'>Projects Completed</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-2'>50+</div>
              <div className='text-gray-300 text-sm'>Expert Team</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <button
          onClick={scrollToNext}
          className='flex flex-col items-center text-white hover:text-blue-300 transition-colors duration-300 group'
          aria-label='Scroll to next section'
        >
          <span className='text-sm mb-2 opacity-70 group-hover:opacity-100'>Scroll</span>
          <ChevronDown className='w-6 h-6 animate-bounce group-hover:animate-none' />
        </button>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60'></div>
        <div className='absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40 delay-1000'></div>
        <div className='absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-50 delay-500'></div>
      </div>
    </div>
  )
}

export default Hero