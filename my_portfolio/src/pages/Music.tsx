import Header from "../components/Header";
import Footer from "../components/Footer";
import YouTube from 'react-youtube';
import { useState } from 'react';

const videos = [
  { 
    id: 'mz6C-w-nkl4', 
    title: 'Official Music Video: Eternal Flame', 
    releaseDate: '2024-03-15' 
  },
  { 
    id: 'TUzJ62VAjcI',  
    title: 'Live at T-series Fashion Show', 
    releaseDate: '2024-02-28' 
  },
  {
    id: 'm4mDwL0uWP0',
    title: 'Humnava ~acoustic version ',
    releaseDate: '2024-03-15'
    
  },
  {
    id: 'YOsaL6QnMTQ',
    title: 'Zara Si Dil Mein ',
    releaseDate: '2025-05-25'
    
  }
  
];

export default function Music() {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      enablejsapi: 1
    },
  };

  // Filter out invalid videos
  const validVideos = videos.filter(video => video.id && video.id.trim() !== '');

  // Pagination
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = validVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const VideoPlayer = ({ videoId, title }: { videoId: string, title: string }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError || !videoId) {
      return (
        <div 
          className="aspect-video bg-gray-700 flex items-center justify-center cursor-pointer"
          onClick={() => handleVideoClick(videoId)}
        >
          <div className="text-center p-4">
            <div className="text-gray-400 mb-2">Video unavailable</div>
            <div className="text-white font-medium">{title}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative aspect-video w-full">
        <YouTube
          videoId={videoId}
          opts={opts}
          className="w-full h-full"
          iframeClassName="w-full h-full"
          onError={() => setHasError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Music & Videos
          </h1>

          {validVideos.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              No videos available at the moment. Check back soon!
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentVideos.map((video) => (
                  <div 
                    key={video.id}
                    className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <VideoPlayer videoId={video.id} title={video.title} />
                    
                    <div className="p-4">
                      <h3 className="text-white font-semibold mb-2">{video.title}</h3>
                      <p className="text-gray-400 text-sm">
                        Released: {new Date(video.releaseDate).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
                      <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
                        New Release
                      </span>
                      <button 
                        className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoClick(video.id);
                        }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {validVideos.length > videosPerPage && (
                <div className="mt-12 flex justify-center gap-2">
                  {Array.from({ length: Math.ceil(validVideos.length / videosPerPage) }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === i + 1 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}