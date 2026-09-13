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
import React, { useRef } from "react";
import { Home } from "lucide-react";
import Link from "next/link";

const VideoGallery = () => {
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

  // Treat all videos except the last 2 as portrait
  const isPortraitForIndex = (index) => index < videos.length - 2;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Inline page animations + utility styles for aspect-ratio handling */}
      <style>{`
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0);} }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0);} }
        .animate-fade-in-down { animation: fadeInDown 0.55s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }

        /* Aspect-ratio boxes:
           - landscape (16:9) => padding-top: 56.25%
           - portrait (9:16)  => padding-top: 177.78% (keeps tall box)
        */
        .video-box { position: relative; width: 100%; overflow: hidden; background: #000; }
        .video-box.landscape { padding-top: 56.25%; }
        .video-box.portrait { padding-top: 177.78%; max-height: 680px; }
        .video-box video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }

        /* Card hover effect */
        .card-hover { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12); }

        /* Caption overlay */
        .caption-overlay { position: absolute; left: 12px; bottom: 12px; right: 12px; display:flex; justify-content:space-between; align-items:center; gap:8px; pointer-events:none; }
        .caption-bg { background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.45)); padding: 10px 14px; border-radius: 8px; color: #fff; }
      `}</style>

      {/* Hero Section */}
      <div
        className="text-white py-14 sm:py-18 md:py-22 animate-fade-in-down"
        style={{
          backgroundImage:
            'linear-gradient(rgba(92,108,63,0.35), rgba(92,108,63,0.55)), url(/hero2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3">
            Video Gallery
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mt-3 leading-relaxed opacity-95">
            Explore our campus through curated videos — ceremonies, events, drone
            footage and our school story. Click any video to play.
          </p>
        </div>
      </div>

      {/* Videos Grid Section */}
      <div className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive grid: 1-col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => {
              const isPortrait = isPortraitForIndex(index);
              const boxClass = isPortrait ? "video-box portrait" : "video-box landscape";

              return (
                <div key={index} className="card-hover rounded-xl overflow-hidden bg-white shadow-sm">
                  <div className="relative">
                    {/* Aspect-ratio box that holds the video absolutely */}
                    <div className={boxClass}>
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        controls
                        controlsList="nodownload"
                        preload="metadata"
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Caption overlay shown on the video bottom-left */}
                      <div className="caption-overlay">
                        <div className="caption-bg">
                          <div className="text-sm sm:text-base font-medium">{video.caption}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card body with caption + meta */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-md sm:text-lg font-semibold text-gray-800">
                        {video.caption}
                      </h3>
                      <span className="text-xs text-gray-500">{isPortrait ? "Portrait" : "Landscape"}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">High-quality video — click to expand and play.</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-12"></div>
    </div>
  );
};

export default VideoGallery;
