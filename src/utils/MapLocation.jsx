import React, { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, X } from 'lucide-react'

function MapLocation({ isOpen, onClose }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  // Company location details
  const location = {
    address: "Addis Ababa Dembel City Center Street, 12th Floor office no 1237",
    coordinates: [9.0320, 38.7636], // Addis Ababa coordinates [lat, lng]
    phone: "+251-115621777",
    email: "info@seefcounsult.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=Addis+Ababa+Dembel+City+Center"
  }

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = () => {
      // Check if Leaflet is already loaded
      if (window.L) {
        setIsLoaded(true)
        return
      }

      // Load Leaflet CSS
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
      link.crossOrigin = ''
      document.head.appendChild(link)

      // Load Leaflet JS
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
      script.crossOrigin = ''
      script.onload = () => setIsLoaded(true)
      script.onerror = () => {
        console.warn('Leaflet failed to load, showing fallback')
        setIsLoaded(true)
      }
      document.head.appendChild(script)
    }

    if (isOpen) {
      loadLeaflet()
    }
  }, [isOpen])

  useEffect(() => {
    if (isLoaded && isOpen && window.L && mapRef.current && !mapInstanceRef.current) {
      // Initialize map when component is loaded and open
      const initMap = () => {
        try {
          // Create map instance
          const map = window.L.map(mapRef.current).setView(location.coordinates, 15)

          // Add OpenStreetMap tiles
          window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
          }).addTo(map)

          // Add custom marker icon
          const customIcon = window.L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                border: 3px solid white;
              ">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40]
          })

          // Add marker
          const marker = window.L.marker(location.coordinates, { icon: customIcon }).addTo(map)

          // Add popup
          const popup = window.L.popup({
            maxWidth: 300,
            className: 'custom-popup'
          }).setContent(`
            <div style="padding: 10px; text-align: center;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-weight: bold; font-size: 16px;">
                See Future Consult
              </h3>
              <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.4;">
                ${location.address}
              </p>
            </div>
          `)

          marker.bindPopup(popup)

          // Store map instance
          mapInstanceRef.current = map

          // Add custom CSS for popup styling
          const style = document.createElement('style')
          style.textContent = `
            .custom-popup .leaflet-popup-content-wrapper {
              background: white;
              border-radius: 12px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.15);
              border: none;
            }
            .custom-popup .leaflet-popup-content {
              margin: 0;
              padding: 0;
            }
            .custom-popup .leaflet-popup-tip {
              background: white;
              box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            }
            .leaflet-container {
              font-family: inherit;
            }
          `
          document.head.appendChild(style)

        } catch (error) {
          console.error('Error initializing map:', error)
          setIsLoaded(true) // Show fallback
        }
      }

      // Small delay to ensure DOM is ready
      setTimeout(initMap, 100)
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [isLoaded, isOpen])

  const handleDirections = () => {
    const url = `https://www.openstreetmap.org/directions?from=&to=${encodeURIComponent(location.address)}`
    window.open(url, '_blank')
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(location.address)
    // You could add a toast notification here
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Our Location</h2>
                <p className="text-sm text-gray-600">See Future Consult Office</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map Section */}
            <div className="relative">
              {isLoaded ? (
                window.L ? (
                  <div 
                    ref={mapRef}
                    className="w-full h-80 lg:h-full min-h-[320px]"
                  ></div>
                ) : (
                  <div className="w-full h-80 lg:h-full min-h-[320px] bg-gray-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Location Map</h3>
                      <p className="text-gray-600 mb-4">Interactive map not available</p>
                      <a
                        href={location.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                )
              ) : (
                <div className="w-full h-80 lg:h-full min-h-[320px] bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                    <p className="text-gray-600">Loading map...</p>
                  </div>
                </div>
              )}
              
              {/* Map Controls Overlay */}
              <div className="absolute top-4 right-4 space-y-2">
                <button
                  onClick={handleDirections}
                  className="p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                  title="Get Directions"
                >
                  <Navigation className="h-5 w-5 text-blue-600" />
                </button>
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 block"
                  title="Open in Google Maps"
                >
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                </a>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 bg-gray-50">
              <div className="space-y-6">
                {/* Address */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Office Address</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 leading-relaxed">{location.address}</p>
                      <button
                        onClick={handleCopyAddress}
                        className="text-blue-600 text-sm hover:text-blue-700 transition-colors duration-200 mt-1"
                      >
                        Copy address
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <a 
                        href={`mailto:${location.email}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{location.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleDirections}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Navigation className="h-5 w-5" />
                    <span>Get Directions</span>
                  </button>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>

                {/* Additional Info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Getting Here</h4>
                  <p className="text-sm text-blue-800">
                    We are located in the heart of Addis Ababa at Dembel City Center. 
                    The office is easily accessible by public transportation and private vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapLocation