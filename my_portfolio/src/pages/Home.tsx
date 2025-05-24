import Header from "../components/Header";
import Footer from "../components/Footer";
import img2 from "../images/img2.jpg";
// import img1 from "../images/IMG-20240317-WA0007.jpg"
import img3 from "../images/r2Ny0vrS96s-SD.jpg"

export default function Home() {
  return (
    <div className="overflow-hidden min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            // src="https://i.pinimg.com/736x/e7/7f/3b/e77f3ba1341742a221fa92c804e0ff51.jpg" 
            src={img2}
            alt="Stage Performance" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Feel the Music
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the soulful journey through melodies that transcend time
          </p>
          <a 
  href="https://www.youtube.com/@shubhampanditsk" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30 inline-block"
>
  Listen Now
</a>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Latest Release</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src = {img3} 
              alt="New Album Cover" 
              className="rounded-2xl shadow-xl hover:rotate-[-1deg] transition-transform duration-300"
            />
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">Naa Bhulun Maa Ehsaan Tera</h3>
              <p className="text-gray-300 mb-6 text-lg">
              "Naa Bhulun Maa Ehsaan Tera" is a devotional song published on the T-Series Bhakti Sagar YouTube channel. It is dedicated to Maa Durga, expressing gratitude and unwavering faith in her divine blessings.
              </p>
              <div className="flex gap-4">
  <button
    onClick={() => window.open("https://www.youtube.com/watch?v=lSxndWHV8Rs", "_blank")}
    className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
  >
    Watch Now
  </button>
  <button className="px-6 py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500/10 transition-colors">
    Lyrics Book
  </button>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Past Performances */}
<section className="py-20 px-4 bg-gray-800">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">Past Performances</h2>
    <div className="space-y-6">
      {[
        {
          title: "Performed Live at IG Farmhouse",
          venue: "Lucknow",
          date: "December 15, 2023",
          highlight: "Featured Performance"
        },
        {
          title: "Live at the T-Series Fashion Show",
          venue: "Noida, New Delhi",
          date: "October 28, 2023",
          highlight: "Featured Performance"
        },
        {
          title: "Live at Radisson Blu Ranchi",
          venue: "Ranchi, Jharkhand",
          date: "June 10, 2022",
          highlight: "Featured Performance"
        }
      ].map((event, index) => (
        <div key={index} className="p-6 bg-gray-700 rounded-xl border-l-4 border-purple-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">{event.title}</h3>
              <p className="text-gray-300">{event.venue}</p>
              <span className="inline-block mt-2 px-3 py-1 text-xs bg-purple-900 text-purple-300 rounded-full">
                {event.highlight}
              </span>
            </div>
            <div className="text-right">
              <p className="text-gray-400 line-through">{event.date}</p>
              <p className="text-sm text-purple-400 mt-1">Completed</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Optional Archive Link */}
    <div className="text-center mt-12">
      <button className="px-6 py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors">
        View Full Performance Archive
      </button>
    </div>
  </div>
</section>

      {/* Tour Dates */}
      {/* <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Upcoming Shows</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">World Tour 2024</h3>
                    <p className="text-gray-400">Madison Square Garden, New York</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-500 font-semibold">March {15 + item}, 2024</p>
                    <button className="mt-2 px-4 py-1.5 text-sm bg-purple-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join the Journey</h2>
          <p className="text-gray-200 mb-8">Get exclusive updates, early access to tickets, and behind-the-scenes content</p>
          <div className="flex gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-full bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}