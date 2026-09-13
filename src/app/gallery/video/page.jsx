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

import React, { useState, useRef, useEffect } from "react";
import { Home } from "lucide-react";
import Link from "next/link";

const VideoGallery = () => {
  const [videoAspectRatios, setVideoAspectRatios] = useState({});
  const videoRefs = useRef({});

  const videos = [
    { src: "/Video/1.mp4", caption: "Republic Day" },
    { src: "/Video/2.mp4", caption: "Independence Day" },
    { src: "/Video/3.mp4", caption: "Independence Day" },
    { src: "/Video/4.mp4", caption: "Independence Day" },
    { src: "/Video/5.mp4", caption: "Student Participation" },
    { src: "/Video/6.mp4", caption: "Drone view of Campus" },
    { src: "/School_Promo_Updated_Name_To_Swarajya_compressed.mp4", caption: "Our School & Who we are" }
  ];

  // Detect video aspect ratio on load
  const handleVideoMetadata = (index) => (e) => {
    const video = e.target;
    const aspectRatio = video.videoWidth / video.videoHeight;
    setVideoAspectRatios(prev => ({
      ...prev,
      [index]: aspectRatio
    }));
  };

  // Determine if video is vertical (portrait)
  const isVerticalVideo = (index) => {
    const ratio = videoAspectRatios[index];
    return ratio ? ratio < 1 : false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleInGently {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scaleInGently 0.6s ease-out;
        }

        .video-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vertical-video {
          max-width: 100%;
          max-height: 600px;
        }

        .horizontal-video {
          width: 100%;
          height: auto;
        }
      `}</style>

      {/* Hero Section */}
      <div 
        className="text-white py-16 sm:py-20 md:py-24 animate-fade-in-down"
        style={{
          backgroundImage: 'linear-gradient(rgba(92,108,63,0.35), rgba(92,108,63,0.55)), url(/hero2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center">
            Video Gallery
          </h1>
          {/* Breadcrumb */}
          {/* <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Home className="text-gray-300 w-4 h-4" />
            <span className="text-gray-300">/</span>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-white">Video Gallery</span>
          </div> */}
          <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mt-4 leading-relaxed opacity-95">
            Explore our military school campus through this gallery. From
            state-of-the-art facilities to sprawling green grounds, our
            infrastructure is designed to provide a perfect balance of education
            and extracurricular activities.
          </p>
        </div>
      </div>

      {/* Videos Grid Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {videos.map((video, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                  {/* Video Container with Responsive Aspect Ratio */}
                  <div className="video-container bg-black relative w-full">
                    <video
                      ref={(el) => videoRefs.current[index] = el}
                      className={`${
                        isVerticalVideo(index)
                          ? "vertical-video"
                          : "horizontal-video"
                      } object-contain`}
                      controls
                      controlsList="nodownload"
                      onLoadedMetadata={handleVideoMetadata(index)}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Caption Section */}
                  <div className="p-4 sm:p-6 bg-white">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200">
                      {video.caption}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-8 sm:h-12"></div>
    </div>
  );
};

export default VideoGallery;
