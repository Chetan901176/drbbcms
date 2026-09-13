// import React from "react";
// import { Home } from "lucide-react";
// import Link from "next/link";

// const VideoGallery = () => {
//   const videos = [
//     { src: "/Video/1.mp4", caption: "Republic Day" },
//     { src: "/Video/2.mp4", caption: "Independence Day" },
//     { src: "/Video/3.mp4", caption: "Independence Day" },
//     { src: "/Video/4.mp4", caption: "Independence Day" },
//     { src: "/Video/5.mp4", caption: "Student Participation" },
//     { src: "/Video/6.mp4", caption: "Drone view of Campus" },
//     { src: "/School_Promo_Updated_Name_To_Swarajya_compressed.mp4", caption: "Our School & Who we are" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 mt-0 sm:mt-0">
//       {/* Hero Section */}
//       <div 
//         className="text-white py-20"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(92,108,63,0.35), rgba(92,108,63,0.55)), url(/hero2.jpeg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
//             Video Gallery
//           </h1>
//           {/* Breadcrumb */}
//           {/* <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
//             <Home className="text-gray-300 w-4 h-4" />
//             <span className="text-gray-300">/</span>
//             <Link href="/" className="text-gray-300 hover:text-white">
//               Home
//             </Link>
//             <span className="text-gray-300">/</span>
//             <span className="text-white">Video Gallery</span>
//           </div> */}
//           <p className="text-xl text-center max-w-3xl mx-auto mt-4">
//             Explore our military school campus through this gallery. From
//             state-of-the-art facilities to sprawling green grounds, our
//             infrastructure is designed to provide a perfect balance of education
//             and extracurricular activities.
//           </p>
//         </div>
//       </div>
//       <div className="bg-gray-100 py-8">
//         <div className="space-y-11 max-w-5xl mx-auto px-4">
//           {/*{videos.map((video, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <iframe
//                 className="w-full h-64 md:h-80 lg:h-96"
//                 src={video.url}
//                 title={video.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//               <div className="p-4 bg-white">
//                 <h3 className="text-lg font-semibold text-gray-700">
//                   {video.title}
//                 </h3>
//               </div>
//             </div>
//           ))}*/}

//           {videos.map((video, index) => (
//   <div
//     key={index}
//     className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//   >
//     <video
//       className="w-full h-64 md:h-80 lg:h-96"
//       controls
//       controlsList="nodownload"
//     >
//       <source src={video.src} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     <div className="p-4 bg-white">
//       <h3 className="text-lg font-semibold text-gray-700">
//         {video.caption}
//       </h3>
//     </div>
//   </div>
// ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;

"use client";
import React, { useState, useRef } from "react";
import { Play, Eye, Clock } from "lucide-react";

const VideoGallery = () => {
  const videos = [
    { src: "/Video/1.mp4", caption: "Republic Day", views: "2.3K", date: "2 weeks ago" },
    { src: "/Video/2.mp4", caption: "Independence Day", views: "1.8K", date: "3 weeks ago" },
    { src: "/Video/3.mp4", caption: "Independence Day", views: "1.5K", date: "3 weeks ago" },
    { src: "/Video/4.mp4", caption: "Independence Day", views: "1.2K", date: "1 month ago" },
    { src: "/Video/5.mp4", caption: "Student Participation", views: "3.1K", date: "2 weeks ago" },
    { src: "/Video/6.mp4", caption: "Drone view of Campus", views: "4.7K", date: "1 month ago" },
    { src: "/School_Promo_Updated_Name_To_Swarajya_compressed.mp4", caption: "Our School & Who we are", views: "8.2K", date: "2 months ago" }
  ];

  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef({});

  const handleTogglePlay = (index) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if (currentVideo.paused) {
      // Pause all other videos
      Object.keys(videoRefs.current).forEach((key) => {
        const otherVideo = videoRefs.current[key];
        if (otherVideo && parseInt(key) !== index) {
          otherVideo.pause();
        }
      });

      currentVideo.play();
      setPlayingIndex(index);
    } else {
      currentVideo.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 text-white" fill="white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">School Videos</h1>
              <p className="text-sm text-gray-500">Explore our campus & events</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Videos</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video, index) => {
              const isPlaying = playingIndex === index;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform cursor-pointer"
                  onClick={() => {
                    if (!isPlaying) handleTogglePlay(index);
                  }}
                >
                  {/* Video Container with 16:9 Aspect Ratio */}
                  <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[index] = el;
                      }}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      controls={isPlaying}
                      controlsList="nodownload"
                      preload="metadata"
                      onPlay={() => {
                        Object.keys(videoRefs.current).forEach((key) => {
                          const other = videoRefs.current[key];
                          if (other && parseInt(key) !== index) other.pause();
                        });
                        setPlayingIndex(index);
                      }}
                      onPause={() => {
                        if (playingIndex === index) setPlayingIndex(null);
                      }}
                      onEnded={() => setPlayingIndex(null)}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play Button Overlay (shown when paused) */}
                    {!isPlaying && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTogglePlay(index);
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-10"
                      >
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded pointer-events-none z-20">
                      Video
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-gray-700 text-sm mb-2">
                      {video.caption}
                    </h4>

                    <div className="flex items-center justify-between text-xs text-gray-500 gap-2">
                      <div className="flex items-center gap-1 min-w-0">
                        <Eye className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{video.views}</span>
                      </div>
                      <div className="flex items-center gap-1 min-w-0">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{video.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
