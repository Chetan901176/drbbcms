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

// "use client";
// import React, { useState } from "react";
// import { 
//   Play, 
//   Eye, 
//   Clock, 
//   X, 
//   Sparkles, 
//   ShieldCheck, 
//   Award, 
//   Compass, 
//   CheckCircle2 
// } from "lucide-react";

// const VideoGallery = () => {
//   const categories = ["All", "Campus & Drone", "National Festivals", "Student Life"];

//   const videos = [
//     { 
//       id: 1,
//       src: "/School_Promo_Updated_Name_To_Swarajya_compressed.mp4", 
//       caption: "Our School & Who We Are", 
//       category: "Campus & Drone",
//       views: "8.2K", 
//       date: "Featured",
//       description: "Take a comprehensive virtual tour through our grounds, discipline, training infrastructure, and academic wings."
//     },
//     { 
//       id: 2,
//       // src: "/Video/6.mp4", 
//       src: "https://drive.google.com/file/d/12Qj9-F1etgXfVbD4N5acJA5kfo9pV38K/view?usp=sharing", 
//       caption: "Drone View of Campus & Grounds", 
//       category: "Campus & Drone",
//       views: "4.7K", 
//       date: "1 month ago",
//       description: "Aerial footage capturing the expansive sports fields, obstacle courses, and parade grounds."
//     },
//     { 
//       id: 3,
//       // src: "/Video/1.mp4", 
//       src: "https://drive.google.com/file/d/1sSo07UuU4Hv9vD6koJQoXToQ4Pbc9uBB/view?usp=sharing", 
//       caption: "75th Republic Day Grand Parade", 
//       category: "National Festivals",
//       views: "2.3K", 
//       date: "2 weeks ago",
//       description: "Cadet parade drill, national anthem honor guard, and ceremonial flag hoisting."
//     },
//     { 
//       id: 4,
//       // src: "/Video/2.mp4", 
//       src: "https://drive.google.com/file/d/1a9_M975c70qkoj64CdB8s12FVGpICdKi/view?usp=sharing", 
//       caption: "Independence Day Celebrations - March Past", 
//       category: "National Festivals",
//       views: "1.8K", 
//       date: "3 weeks ago",
//       description: "Precision marching squad showing synchronization, valor, and patriotic spirit."
//     },
//     { 
//       id: 5,
//       // src: "/Video/3.mp4", 
//       src: "https://drive.google.com/file/d/1UsT2__r_NdvRkP4cEJR_0JVCF9OfHix8/view?usp=sharing", 
//       caption: "Independence Day Cultural Performance", 
//       category: "National Festivals",
//       views: "1.5K", 
//       date: "3 weeks ago",
//       description: "Music and drama presentations commemorating India's freedom fighters."
//     },
//     { 
//       id: 6,
//       // src: "/Video/4.mp4", 
//       src: "https://drive.google.com/file/d/1kBQPyEFwMDaG2cnieJJXvagPCjSLfNL3/view?usp=sharing", 
//       caption: "Independence Day Guard of Honour", 
//       category: "National Festivals",
//       views: "1.2K", 
//       date: "1 month ago",
//       description: "Salute drill presentation by our senior student division."
//     },
//     { 
//       id: 7,
//       // src: "/Video/5.mp4", 
//       src: "https://drive.google.com/file/d/1chS3OJ-VYGP_YVZR36IA0oxpt-pgbPve/view?usp=sharing", 
//       caption: "Cadet Drills & Physical Training", 
//       category: "Student Life",
//       views: "3.1K", 
//       date: "2 weeks ago",
//       description: "Morning stamina building, endurance hurdles, teamwork, and daily discipline routine."
//     }
//   ];

//   const [activeCategory, setActiveCategory] = useState("All");
//   const [activeVideoModal, setActiveVideoModal] = useState(null);
//   const featuredVideo = videos[0];

//   const filteredVideos = activeCategory === "All" 
//     ? videos 
//     : videos.filter((v) => v.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-emerald-500 selection:text-white">
      
//       {/* Dynamic Top Banner */}
//       <div className="relative overflow-hidden bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-900 pt-12 pb-16 border-b border-slate-800">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_40%)]" />
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
//             <div>
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-3">
//                 <Sparkles className="w-3.5 h-3.5" />
//                 Campus Media & Archives
//               </div>
//               <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
//                 Life at Swarajya Campus
//               </h1>
//               <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
//                 Experience the discipline, leadership training, academic excellence, and physical rigor that shapes future defenders and leaders.
//               </p>
//             </div>

//             {/* Trust Metrics */}
//             <div className="flex items-center gap-6 bg-slate-800/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-slate-700/60 shadow-xl">
//               <div className="text-center">
//                 <p className="text-2xl font-black text-emerald-400">100%</p>
//                 <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Discipline</p>
//               </div>
//               <div className="h-8 w-px bg-slate-700" />
//               <div className="text-center">
//                 <p className="text-2xl font-black text-emerald-400">Green</p>
//                 <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Sprawling Campus</p>
//               </div>
//               <div className="h-8 w-px bg-slate-700" />
//               <div className="text-center">
//                 <p className="text-2xl font-black text-emerald-400">Holistic</p>
//                 <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Development</p>
//               </div>
//             </div>
//           </div>

//           {/* Featured Spotlight Card */}
//           <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800 to-slate-800/80 border border-slate-700/80 shadow-2xl p-4 sm:p-6 lg:p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
//               <div className="lg:col-span-7 relative group rounded-xl overflow-hidden shadow-2xl aspect-video bg-black">
//                 <video
//                   className="w-full h-full object-cover"
//                   poster="/hero2.jpeg"
//                   controls
//                   controlsList="nodownload"
//                   preload="metadata"
//                 >
//                   <source src={featuredVideo.src} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>

//               <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
//                 <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
//                   <Award className="w-4 h-4" /> Official Promo Video
//                 </div>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
//                   {featuredVideo.caption}
//                 </h2>
//                 <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
//                   {featuredVideo.description}
//                 </p>
                
//                 <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
//                   <span className="flex items-center gap-1">
//                     <Eye className="w-4 h-4 text-emerald-400" /> {featuredVideo.views} Views
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified Campus Tour
//                   </span>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Main Video Directory Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
//         {/* Navigation & Filter Tabs */}
//         <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
//           <div className="flex items-center gap-2 overflow-x-auto py-1">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
//                   activeCategory === category
//                     ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 font-bold"
//                     : "bg-slate-800 text-slate-300 hover:bg-slate-700/70 hover:text-white border border-slate-700/40"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//           <span className="text-xs sm:text-sm text-slate-400">
//             Showing <strong className="text-white">{filteredVideos.length}</strong> highlights
//           </span>
//         </div>

//         {/* Video Card Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredVideos.map((video) => (
//             <div
//               key={video.id}
//               onClick={() => setActiveVideoModal(video)}
//               className="group relative bg-slate-800/70 border border-slate-700/50 hover:border-emerald-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
//             >
//               {/* Thumbnail Container */}
//               <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
//                 <video
//                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
//                   preload="metadata"
//                 >
//                   <source src={video.src} type="video/mp4" />
//                 </video>

//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

//                 {/* Play Badge */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-14 h-14 rounded-full bg-emerald-500/90 group-hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
//                     <Play className="w-7 h-7 fill-slate-950 ml-1" />
//                   </div>
//                 </div>

//                 {/* Category Badge */}
//                 <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md border border-emerald-500/20">
//                   {video.category}
//                 </div>
//               </div>

//               {/* Metadata Details */}
//               <div className="p-5 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-emerald-300 transition-colors line-clamp-1 mb-2">
//                     {video.caption}
//                   </h3>
//                   <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
//                     {video.description}
//                   </p>
//                 </div>

//                 <div className="mt-4 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400 font-medium">
//                   <div className="flex items-center gap-1.5">
//                     <Eye className="w-3.5 h-3.5 text-slate-500" />
//                     <span>{video.views}</span>
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <Clock className="w-3.5 h-3.5 text-slate-500" />
//                     <span>{video.date}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* Full-Screen Modal Theater View */}
//       {activeVideoModal && (
//         <div 
//           className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
//           onClick={() => setActiveVideoModal(null)}
//         >
//           <div 
//             className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800 bg-slate-900">
//               <div className="pr-4">
//                 <span className="text-emerald-400 text-xs uppercase tracking-widest font-bold">
//                   {activeVideoModal.category}
//                 </span>
//                 <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-1">
//                   {activeVideoModal.caption}
//                 </h3>
//               </div>
//               <button 
//                 onClick={() => setActiveVideoModal(null)}
//                 className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Video Frame */}
//             <div className="relative aspect-video bg-black">
//               <video
//                 key={activeVideoModal.src}
//                 className="w-full h-full"
//                 controls
//                 autoPlay
//                 controlsList="nodownload"
//               >
//                 <source src={activeVideoModal.src} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>

//             {/* Modal Description */}
//             <div className="p-4 sm:p-6 bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//               <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
//                 {activeVideoModal.description}
//               </p>
//               <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
//                 <span>{activeVideoModal.views} Views</span>
//                 <span>•</span>
//                 <span>{activeVideoModal.date}</span>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* Ethos Banner */}
//       <div className="border-t border-slate-800 bg-slate-950 py-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
//           <div className="flex items-start gap-4">
//             <div className="p-3 bg-slate-800 rounded-xl text-emerald-400 shrink-0 mx-auto md:mx-0">
//               <ShieldCheck className="w-6 h-6" />
//             </div>
//             <div>
//               <h4 className="font-bold text-white text-base">Character & Valor</h4>
//               <p className="text-slate-400 text-xs mt-1">Imparting core leadership ethics, personal integrity, and national values.</p>
//             </div>
//           </div>
//           <div className="flex items-start gap-4">
//             <div className="p-3 bg-slate-800 rounded-xl text-emerald-400 shrink-0 mx-auto md:mx-0">
//               <Compass className="w-6 h-6" />
//             </div>
//             <div>
//               <h4 className="font-bold text-white text-base">Modern Military Cadence</h4>
//               <p className="text-slate-400 text-xs mt-1">Balanced drill schedules, physical obstacle circuits, and parade training.</p>
//             </div>
//           </div>
//           <div className="flex items-start gap-4">
//             <div className="p-3 bg-slate-800 rounded-xl text-emerald-400 shrink-0 mx-auto md:mx-0">
//               <Award className="w-6 h-6" />
//             </div>
//             <div>
//               <h4 className="font-bold text-white text-base">Academic Excellence</h4>
//               <p className="text-slate-400 text-xs mt-1">Structured study halls, focused mentorship, and competitive exam preparation.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default VideoGallery;
"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Eye, 
  Clock, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Compass, 
  CheckCircle2 
} from "lucide-react";

const CATEGORIES = ["All", "Campus & Drone", "National Festivals", "Student Life"];

const VIDEOS = [
  { 
    id: 1,
    type: "drive",
    driveId: "1Fh4jobECGaDmwaeH8IHJ4pLcrxmmiW4r",
    // If you prefer the local mp4 file, set type: "local" and provide src:
    // src: "/School_Promo_Updated_Name_To_Swarajya_compressed.mp4",
    poster: "/hero2.jpeg",
    caption: "Our School & Who We Are", 
    category: "Campus & Drone",
    views: "8.2K", 
    date: "Featured",
    description: "Take a comprehensive virtual tour through our grounds, discipline, training infrastructure, and academic wings."
  },
  { 
    id: 2,
    type: "drive",
    driveId: "12Qj9-F1etgXfVbD4N5acJA5kfo9pV38K",
    poster: "https://drive.google.com/thumbnail?id=12Qj9-F1etgXfVbD4N5acJA5kfo9pV38K&sz=w800",
    caption: "Drone View of Campus & Grounds", 
    category: "Campus & Drone",
    views: "4.7K", 
    date: "1 month ago",
    description: "Aerial footage capturing the expansive sports fields, obstacle courses, and parade grounds."
  },
  { 
    id: 3,
    type: "drive",
    driveId: "1sSo07UuU4Hv9vD6koJQoXToQ4Pbc9uBB",
    poster: "https://drive.google.com/thumbnail?id=1sSo07UuU4Hv9vD6koJQoXToQ4Pbc9uBB&sz=w800",
    caption: "75th Republic Day Grand Parade", 
    category: "National Festivals",
    views: "2.3K", 
    date: "2 weeks ago",
    description: "Cadet parade drill, national anthem honor guard, and ceremonial flag hoisting."
  },
  { 
    id: 4,
    type: "drive",
    driveId: "1a9_M975c70qkoj64CdB8s12FVGpICdKi",
    poster: "https://drive.google.com/thumbnail?id=1a9_M975c70qkoj64CdB8s12FVGpICdKi&sz=w800",
    caption: "Independence Day Celebrations - March Past", 
    category: "National Festivals",
    views: "1.8K", 
    date: "3 weeks ago",
    description: "Precision marching squad showing synchronization, valor, and patriotic spirit."
  },
  { 
    id: 5,
    type: "drive",
    driveId: "1UsT2__r_NdvRkP4cEJR_0JVCF9OfHix8",
    poster: "https://drive.google.com/thumbnail?id=1UsT2__r_NdvRkP4cEJR_0JVCF9OfHix8&sz=w800",
    caption: "Independence Day Cultural Performance", 
    category: "National Festivals",
    views: "1.5K", 
    date: "3 weeks ago",
    description: "Music and drama presentations commemorating India's freedom fighters."
  },
  { 
    id: 6,
    type: "drive",
    driveId: "1kBQPyEFwMDaG2cnieJJXvagPCjSLfNL3",
    poster: "https://drive.google.com/thumbnail?id=1kBQPyEFwMDaG2cnieJJXvagPCjSLfNL3&sz=w800",
    caption: "Independence Day Guard of Honour", 
    category: "National Festivals",
    views: "1.2K", 
    date: "1 month ago",
    description: "Salute drill presentation by our senior student division."
  },
  { 
    id: 7,
    type: "drive",
    driveId: "1chS3OJ-VYGP_YVZR36IA0oxpt-pgbPve",
    poster: "https://drive.google.com/thumbnail?id=1chS3OJ-VYGP_YVZR36IA0oxpt-pgbPve&sz=w800",
    caption: "Cadet Drills & Physical Training", 
    category: "Student Life",
    views: "3.1K", 
    date: "2 weeks ago",
    description: "Morning stamina building, endurance hurdles, teamwork, and daily discipline routine."
  }
];

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const featuredVideoRef = useRef(null);
  const featuredVideo = VIDEOS[0];

  const filteredVideos = activeCategory === "All" 
    ? VIDEOS 
    : VIDEOS.filter((v) => v.category === activeCategory);

  const pauseAllVideos = () => {
    const allVideos = document.querySelectorAll("video");
    allVideos.forEach((v) => {
      if (!v.paused) v.pause();
    });
  };

  const openModal = (video) => {
    pauseAllVideos();
    if (featuredVideoRef.current && !featuredVideoRef.current.paused) {
      featuredVideoRef.current.pause();
    }
    setActiveVideoModal(video);
  };

  const closeModal = () => {
    setActiveVideoModal(null);
    pauseAllVideos();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (activeVideoModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideoModal]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Top Banner Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-900 pt-8 pb-10 sm:pt-14 sm:pb-16 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_40%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 sm:mb-12">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Campus Media & Archives
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Life at Swarajya Campus
              </h1>
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Experience the discipline, leadership training, academic excellence, and physical rigor that shapes future defenders and leaders.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 w-full md:w-auto items-center gap-2 sm:gap-6 bg-slate-800/70 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-2xl border border-slate-700/60 shadow-xl">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">100%</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-0.5">Discipline</p>
              </div>
              <div className="text-center border-x border-slate-700/80 px-2">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">Green</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-0.5">Campus</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">Holistic</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-0.5">Growth</p>
              </div>
            </div>
          </div>

          {/* Featured Spotlight Card */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/80 shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-7 relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-black">
                {featuredVideo.type === "drive" ? (
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <iframe
                      src={`https://drive.google.com/file/d/${featuredVideo.driveId}/preview`}
                      className="w-full border-0 absolute"
                      style={{
                        top: "-68px",
                        left: "0",
                        width: "100%",
                        height: "calc(100% + 72px)"
                      }}
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                      title={featuredVideo.caption}
                    />
                  </div>
                ) : (
                  <video
                    ref={featuredVideoRef}
                    className="w-full h-full object-cover"
                    poster={featuredVideo.poster}
                    controls
                    playsInline
                    controlsList="nodownload"
                    preload="metadata"
                    onPlay={pauseAllVideos}
                  >
                    <source src={featuredVideo.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" /> Official Spotlight
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  {featuredVideo.caption}
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  {featuredVideo.description}
                </p>
                
                <div className="pt-3 border-t border-slate-700/70 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-emerald-400" /> {featuredVideo.views} Views
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified Tour
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Video Directory */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 ${
                  activeCategory === category
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-400">
            Showing <strong className="text-white">{filteredVideos.length}</strong> videos
          </span>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              onClick={() => openModal(video)}
              className="group relative bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1 active:scale-[0.99]"
            >
              <div className="relative w-full aspect-video bg-slate-950 overflow-hidden">
                <img
                  src={video.poster}
                  alt={video.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-95"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add("bg-gradient-to-br", "from-slate-800", "to-slate-950");
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded border border-emerald-500/20 pointer-events-none">
                  {video.category}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors line-clamp-1 mb-1.5">
                    {video.caption}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-4xl flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3.5 sm:p-4 flex items-center justify-between border-b border-slate-800 bg-slate-900 shrink-0">
              <div className="pr-3">
                <span className="text-emerald-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                  {activeVideoModal.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1 mt-0.5">
                  {activeVideoModal.caption}
                </h3>
              </div>
              <button 
                onClick={closeModal}
                aria-label="Close"
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-video bg-black overflow-hidden">
              {activeVideoModal.type === "drive" ? (
                <div className="relative w-full h-full overflow-hidden bg-black">
                  <iframe
                    key={activeVideoModal.id}
                    src={`https://drive.google.com/file/d/${activeVideoModal.driveId}/preview`}
                    className="w-full border-0 absolute"
                    style={{
                      top: "-68px",
                      left: "0",
                      width: "100%",
                      height: "calc(100% + 72px)"
                    }}
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    title={activeVideoModal.caption}
                  />
                </div>
              ) : (
                <video
                  key={activeVideoModal.id}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                  onPlay={pauseAllVideos}
                >
                  <source src={activeVideoModal.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="p-3.5 sm:p-5 bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {activeVideoModal.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0">
                <span>{activeVideoModal.views} Views</span>
                <span>•</span>
                <span>{activeVideoModal.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ethos Footer */}
      <section className="border-t border-slate-800 bg-slate-950 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-slate-800 rounded-xl text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">Character & Valor</h4>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Imparting core leadership ethics, personal integrity, and national values.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-slate-800 rounded-xl text-emerald-400 shrink-0">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">Modern Military Cadence</h4>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Balanced drill schedules, physical obstacle circuits, and parade training.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-slate-800 rounded-xl text-emerald-400 shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">Academic Excellence</h4>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Structured study halls, focused mentorship, and competitive exam preparation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
