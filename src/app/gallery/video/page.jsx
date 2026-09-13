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
import React, { useState } from "react";
import { Home, Play, Loader, AlertCircle } from "lucide-react";
import Link from "next/link";

const VideoGallery = () => {
  const [loadingStates, setLoadingStates] = useState({});
  const [errorStates, setErrorStates] = useState({});

  const videos = [
    { src: "/Video/1.mp4", caption: "Republic Day", poster: "/Video/Thumbnail.jpg" },
    { src: "/Video/2.mp4", caption: "Independence Day-I", poster: "/Video/Thumbnail.jpg" },
    { src: "/Video/3.mp4", caption: "Independence Day-II", poster: "/Video/Thumbnail.jpg" },
    { src: "/Video/4.mp4", caption: "Independence Day-III", poster: "/Video/Thumbnail.jpg" },
    { src: "/Video/5.mp4", caption: "Student Participation", poster: "/Video/Thumbnail.jpg" },
    { src: "/Video/6.mp4", caption: "Drone view of Campus", poster: "/Video/Thumbnail.jpg" },
    { src: "/School_Promo_Updated_Name_To_Swarajya_compressed.mp4", caption: "Our School & Who we are", poster: "/Video/Thumbnail.jpg" }
  ];

  const handleVideoLoad = (index) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  const handleVideoLoadStart = (index) => {
    setLoadingStates(prev => ({ ...prev, [index]: true }));
  };

  const handleVideoError = (index, error) => {
    console.error(`Video ${index} failed to load:`, error);
    setErrorStates(prev => ({ ...prev, [index]: true }));
    setLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-50 to-gray-100">
      {/* Hero Section */}
      <div 
        className="relative text-white py-24 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(92,108,63,0.7) 0%, rgba(92,108,63,0.5) 100%), url(/hero2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Video Gallery
            </h1>
            <div className="w-20 h-1 bg-green-400 mx-auto rounded-full mb-8"></div>
          </div>

          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Explore our military school campus through this gallery. From
            state-of-the-art facilities to sprawling green grounds, our
            infrastructure is designed to provide a perfect balance of education
            and extracurricular activities.
          </p>
        </div>
      </div>

      {/* Videos Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white"
              >
                {/* Error State */}
                {errorStates[index] && (
                  <div className="absolute inset-0 bg-red-50 flex items-center justify-center z-20 rounded-xl">
                    <div className="flex flex-col items-center gap-3 text-center p-4">
                      <AlertCircle className="w-8 h-8 text-red-500" />
                      <span className="text-red-700 text-sm font-semibold">
                        Failed to load video
                      </span>
                      <span className="text-red-600 text-xs">
                        {video.src}
                      </span>
                    </div>
                  </div>
                )}

                {/* Loading Indicator */}
                {loadingStates[index] && !errorStates[index] && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-20 rounded-xl">
                    <div className="flex flex-col items-center gap-3">
                      <Loader className="w-8 h-8 text-green-400 animate-spin" />
                      <span className="text-white text-sm">Loading video...</span>
                    </div>
                  </div>
                )}

                {/* Video Container */}
                <div className="relative bg-black">
                  <video
                    className="w-full h-64 md:h-72 lg:h-80 object-cover"
                    controls
                    controlsList="nodownload"
                    onLoadStart={() => handleVideoLoadStart(index)}
                    onCanPlay={() => handleVideoLoad(index)}
                    onError={(e) => handleVideoError(index, e)}
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay on hover */}
                  {!errorStates[index] && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                    </div>
                  )}
                </div>

                {/* Caption Section */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {video.caption}
                  </h3>
                  <div className="w-8 h-1 bg-green-400 mt-2 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience Our Campus</h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Discover the vibrant campus life, modern facilities, and the dedicated community that makes our military school unique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
