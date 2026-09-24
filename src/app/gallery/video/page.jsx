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
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const CATEGORIES = ["All", "Campus & Drone", "National Festivals", "Student Life"];

const getDriveVideoUrl = (driveId) => `https://drive.google.com/uc?export=view&id=${driveId}`;

const VIDEOS = [
  { 
    id: 1,
    type: "drive",
    driveId: "1Fh4jobECGaDmwaeH8IHJ4pLcrxmmiW4r",
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
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const modalContainerRef = useRef(null);
  const featuredVideo = VIDEOS[0];

  const filteredVideos = activeCategory === "All" 
    ? VIDEOS 
    : VIDEOS.filter((v) => v.category === activeCategory);

  const triggerFullscreen = (element) => {
    if (!element) return;
    if (element.requestFullscreen) {
      element.requestFullscreen().catch(() => {});
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  const openModal = (video) => {
    setActiveVideoModal(video);
    setShowExitConfirm(false);
    window.history.pushState({ videoModal: true }, "");

    setTimeout(() => {
      if (modalContainerRef.current) {
        triggerFullscreen(modalContainerRef.current);
      }
    }, 50);
  };

  const forceCloseModal = () => {
    exitFullscreen();
    setActiveVideoModal(null);
    setShowExitConfirm(false);
  };

  const handleRequestClose = () => {
    setShowExitConfirm(true);
  };

  const handleConfirmExit = () => {
    setShowExitConfirm(false);
    forceCloseModal();
  };

  const handleCancelExit = () => {
    setShowExitConfirm(false);
    window.history.pushState({ videoModal: true }, "");
  };

  useEffect(() => {
    const handlePopState = () => {
      if (activeVideoModal) {
        setShowExitConfirm(true);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (showExitConfirm) {
          handleCancelExit();
        } else if (activeVideoModal) {
          setShowExitConfirm(true);
        }
      }
    };

    if (activeVideoModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("popstate", handlePopState);
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideoModal, showExitConfirm]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-emerald-500 selection:text-white">
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

          <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/80 shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-7 w-full">
                <div 
                  onClick={() => openModal(featuredVideo)}
                  className="group relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-slate-700/60 cursor-pointer"
                >
                  <img
                    src={featuredVideo.poster}
                    alt={featuredVideo.caption}
                    className="absolute inset-0 z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 z-10 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />

                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-950 ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 z-20 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] sm:text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded border border-emerald-500/30">
                    Official Spotlight
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" /> Featured Presentation
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              onClick={() => openModal(video)}
              className="group relative bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded border border-emerald-500/30">
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

      {activeVideoModal && (
        <div 
          ref={modalContainerRef}
          className="fixed inset-0 z-50 bg-black flex flex-col justify-between overflow-hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="landscape:absolute landscape:top-3 landscape:right-3 landscape:bg-transparent landscape:border-0 p-3 sm:p-4 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 z-20 shrink-0">
            <div className="pr-3 landscape:hidden">
              <span className="text-emerald-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                {activeVideoModal.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1 mt-0.5">
                {activeVideoModal.caption}
              </h3>
            </div>

            <button 
              onClick={handleRequestClose}
              aria-label="Close video"
              className="p-2 sm:p-2.5 rounded-full bg-red-600/90 hover:bg-red-700 active:bg-red-800 text-white shadow-xl transition-transform active:scale-95 shrink-0 flex items-center justify-center"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>
          </div>

          <div className="relative flex-1 w-full h-full bg-black overflow-hidden flex items-center justify-center">
            <video
              key={activeVideoModal.id}
              src={getDriveVideoUrl(activeVideoModal.driveId)}
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
              playsInline
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="landscape:hidden p-3 sm:p-4 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0 z-20">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {activeVideoModal.description}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0">
              <span>{activeVideoModal.views} Views</span>
              <span>•</span>
              <span>{activeVideoModal.date}</span>
            </div>
          </div>

          {showExitConfirm && (
            <div 
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center animate-in zoom-in-95 duration-150">
                <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 mx-auto flex items-center justify-center mb-3">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Exit Video?</h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">
                  Are you sure you want to stop playback and exit this video?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleCancelExit}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Keep Watching
                  </button>
                  <button
                    onClick={handleConfirmExit}
                    className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-lg shadow-red-600/30"
                  >
                    Exit Video
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

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
