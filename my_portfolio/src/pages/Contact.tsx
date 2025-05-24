import Header from "../components/Header";
import Footer from "../components/Footer";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Have a question, collaboration idea, or just want to say hello?<br className="hidden sm:block" />
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-4 md:space-y-8">
              <div className="p-4 md:p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-purple-500/10 rounded-lg">
                    <MapPinIcon className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">Shubham Pandit</h3>
                    <p className="text-sm md:text-base text-gray-300">
                      Noida, New Delhi<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-purple-500/10 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">Email Us</h3>
                    <p className="text-sm md:text-base text-gray-300">
                      General: Shubhampanditofficial9379@gmail.com<br />
                      Booking: Shubhampanditofficial9379@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-purple-500/10 rounded-lg">
                    <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">Call Us</h3>
                    <p className="text-sm md:text-base text-gray-300">
                      Mobile: +91 98019 19928
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-8">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a href="https://www.instagram.com/shubhamkmusicc?igsh=enEwaTFmajhyN3J3" 
                     className="p-2 md:p-3 bg-gray-600 rounded-lg hover:bg-purple-500 transition-colors"
                     target="_blank" 
                     rel="noopener noreferrer">
                    <FaInstagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </a>
                  <a href="https://www.youtube.com/@shubhampanditsk/videos" 
                     className="p-2 md:p-3 bg-gray-600 rounded-lg hover:bg-purple-500 transition-colors"
                     target="_blank" 
                     rel="noopener noreferrer">
                    <FaYoutube className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </a>
                  <a href="#" 
                     className="p-2 md:p-3 bg-gray-600 rounded-lg hover:bg-purple-500 transition-colors"
                     target="_blank" 
                     rel="noopener noreferrer">
                    <FaSpotify className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </a>
                  <a href="#" 
                     className="p-2 md:p-3 bg-gray-600 rounded-lg hover:bg-purple-500 transition-colors"
                     target="_blank" 
                     rel="noopener noreferrer">
                    <FaFacebook className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-4 md:p-8 bg-gray-900 rounded-xl md:rounded-2xl shadow-xl">
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-sm md:text-base text-gray-300 mb-1 md:mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base text-gray-300 mb-1 md:mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base text-gray-300 mb-1 md:mb-2">Subject</label>
                  <select className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base">
                    <option>Select inquiry type</option>
                    <option>Booking</option>
                    <option>Collaboration</option>
                    <option>Press</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm md:text-base text-gray-300 mb-1 md:mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:scale-[1.02] transition-transform text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}