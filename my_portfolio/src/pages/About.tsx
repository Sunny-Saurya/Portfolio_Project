import Header from "../components/Header";
import Footer from "../components/Footer";
// import img2 from "../images/img2.jpg"
import img1 from "../images/img1.jpg"
import img4 from "../images/shubham.jpeg"
import { TrophyIcon, MusicalNoteIcon, MicrophoneIcon, CalendarIcon } from '@heroicons/react/24/outline';
import competitionImg from '../images/shubham.jpeg';
import performanceImg from '../images/IMG-20240616-WA0003.jpg';
import releaseImg from '../images/img2.jpg';


export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={img1} 
            alt="Artist in Studio" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            The Voice of a Generation
          </h1>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img 
                src={img4}
                alt="Artist Portrait" 
                className="rounded-2xl shadow-xl transform group-hover:rotate-[-1deg] transition-all duration-300"
              />
              <div className="absolute inset-0 border-4 border-purple-500/30 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-all duration-300 pointer-events-none" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Chasing the Melody</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
              Learning, recording, and performing at small gigs — every step is a lesson. Not a singer yet, but growing with every note. The journey has just begun.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">✓</span>
                  </div>
                  <span className="text-gray-300">T-series Award Winner</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">♫</span>
                  </div>
                  <span className="text-gray-300">Over 1,00,000 views - Youtube</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">★</span>
                  </div>
                  <span className="text-gray-300">Learning From T-series</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl italic text-white mb-6">
            “Music is the language of the soul. My goal is to create melodies that linger in hearts long 
            after the last note fades.”
          </blockquote>
          <div className="w-24 h-1 bg-white mx-auto mb-6" />
          <p className="text-gray-200 uppercase tracking-wider">Alexa Ray</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Journey Through Time</h2>
          <div className="relative">
            <div className="absolute left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2" />
            {[
              { year: "2015", event: "Discovered a passion for singing and began musical training" },
              { year: "2019", event:  "Self-taught guitar, enhancing musical skills"},
              { year: "2021", event: "Joined T-Series, stepping into the professional music scene." },
              { year: "2023", event: "T-Series Interschool Competition Winner" },
              { year: "2024", event: "First Notes of Devotion: My Song with T-Series Bhakti Sagar" },
              { year: "2024", event: "Live at the T-Series Fashion Show" },
            ].map((item, index) => (
              <div key={index} className="mb-8 flex justify-between items-center w-full">
                <div className={`w-5/12 ${index % 2 === 0 ? "" : "invisible"}`} />
                <div className="w-1/12 flex justify-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white">{item.year}</span>
                  </div>
                </div>
                <div className={`w-5/12 p-6 bg-gray-800 rounded-lg ${index % 2 === 0 ? "text-right" : ""}`}>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">
      <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Achievements & Milestones
      </span>
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Achievement Card 1 - With Image */}
      <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform shadow-lg group">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={competitionImg} 
            alt="Winning T-Series competition" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
          <div className="absolute top-4 left-4 flex items-center">
            <div className="p-2 bg-purple-500/90 rounded-full">
              <TrophyIcon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">1st Prize Winner</h3>
              <p className="text-gray-400">T-Series Interschool Competition</p>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Won first prize among 100+ participants in the interschool singing competition judged by industry experts.
          </p>
          <div className="flex items-center text-sm text-purple-400">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>December 2023</span>
          </div>
        </div>
      </div>

      {/* Achievement Card 2 - With Image */}
      <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform shadow-lg group">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={performanceImg} 
            alt="Live performance at T-Series Fest" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
          <div className="absolute top-4 left-4 flex items-center">
            <div className="p-2 bg-pink-500/90 rounded-full">
              <MicrophoneIcon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Live at T-Series Fest</h3>
              <p className="text-gray-400">Featured Performer</p>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Performed for audience members alongside established artists at the annual music festival.
          </p>
          <div className="flex items-center text-sm text-pink-400">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>October 2023</span>
          </div>
        </div>
      </div>

      {/* Achievement Card 3 - With Image */}
      <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform shadow-lg group">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={releaseImg} 
            alt="T-Series Bhakti Sagar feature" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
          <div className="absolute top-4 left-4 flex items-center">
            <div className="p-2 bg-yellow-500/90 rounded-full">
              <MusicalNoteIcon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Original Composition</h3>
              <p className="text-gray-400">Featured on T-Series Bhakti Sagar</p>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Devotional song "Naa Bhulun Maa Ehsaan Tera" officially published on T-Series' spiritual channel.
          </p>
          <div className="flex items-center text-sm text-yellow-400">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>March 2024</span>
          </div>
        </div>
      </div>
    </div>

    {/* View More Button */}
    <div className="text-center mt-12">
      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:scale-105 transition-transform inline-flex items-center">
        View All Achievements
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
</section>

      {/* Press Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">In The Spotlight</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "A voice that defines a generation", source: "Rolling Stone" },
              { quote: "The most exciting talent in modern soul", source: "Billboard" },
              { quote: "Electrifying stage presence unmatched", source: "The Guardian" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors">
                <p className="text-gray-300 mb-4 italic">"{item.quote}"</p>
                <p className="text-purple-400 font-semibold">— {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}