import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, ArrowRight, ExternalLink, BookOpen, TrendingUp, Globe, Leaf } from 'lucide-react'

function LatestNews() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const categories = [
    { id: 'all', name: 'All News', icon: BookOpen },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf },
    { id: 'innovation', name: 'Innovation', icon: TrendingUp },
    { id: 'global', name: 'Global Impact', icon: Globe }
  ]

  const newsData = [
    {
      id: 1,
      title: "SEEF Consult Launches New Sustainable Development Initiative",
      excerpt: "We're excited to announce our latest initiative focused on sustainable development practices that will transform how organizations approach environmental responsibility.",
      category: 'sustainability',
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      featured: true,
      tags: ['Sustainability', 'Development', 'Innovation']
    },
    {
      id: 2,
      title: "Revolutionary Water Management Solutions for Arid Regions",
      excerpt: "Our team has developed cutting-edge water management technologies that are helping communities in arid regions access clean water more efficiently.",
      category: 'innovation',
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      featured: false,
      tags: ['Water Management', 'Technology', 'Community']
    },
    {
      id: 4,
      title: "New Agricultural Technology Reduces Carbon Footprint",
      excerpt: "Our latest agricultural innovations are helping farmers reduce their carbon footprint while increasing crop yields and sustainability.",
      category: 'sustainability',
      author: "Prof. David Kim",
      date: "2024-01-08",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
      featured: false,
      tags: ['Agriculture', 'Technology', 'Carbon Reduction']
    },
    {
      id: 5,
      title: "Innovative Waste Management Solutions Show Promising Results",
      excerpt: "Our waste management innovations are demonstrating significant improvements in recycling efficiency and environmental impact reduction.",
      category: 'innovation',
      author: "Dr. Lisa Wang",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      featured: false,
      tags: ['Waste Management', 'Recycling', 'Innovation']
    },
    {
      id: 6,
      title: "SEEF Consult Expands Global Reach with New Regional Offices",
      excerpt: "We're expanding our global presence with new regional offices to better serve our international clients and partners.",
      category: 'global',
      author: "James Thompson",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      featured: false,
      tags: ['Global Expansion', 'Partnership', 'Growth']
    }
  ]

  const filteredNews = activeCategory === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === activeCategory)

  const featuredNews = newsData.filter(news => news.featured)
  const regularNews = filteredNews.filter(news => !news.featured).slice(0, 5)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">News</span> & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about our latest projects, innovations, and contributions to sustainable development worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && activeCategory === 'all' && (
          <div className={`mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-blue-500" />
              Featured Story
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <div key={news.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(news.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {news.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {news.author}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {news.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {news.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/news/${news.id}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {regularNews.map((news) => (
            <article key={news.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(news.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {news.readTime}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {news.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {news.author}
                  </div>
                  <Link 
                    to={`/news/${news.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All News Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link 
            to="/news"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All News
            <ExternalLink className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews