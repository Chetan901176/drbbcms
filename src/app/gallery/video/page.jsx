"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  Eye,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const CATEGORIES = ["All", "Campus & Drone", "National Festivals", "Student Life"];

const VIDEOS = [
  {
    id: 1,
    driveId: "1Fh4jobECGaDmwaeH8IHJ4pLcrxmmiW4r",
    poster: "/hero2.jpeg",
    caption: "Our School & Who We Are",
    category: "Campus & Drone",
    views: "8.2K",
    date: "Featured",
    description: "Take a comprehensive virtual tour through our grounds, discipline, training infrastructure, and academic wings.",
  },
  {
    id: 2,
    driveId: "12Qj9-F1etgXfVbD4N5acJA5kfo9pV38K",
    poster: "https://drive.google.com/thumbnail?id=12Qj9-F1etgXfVbD4N5acJA5kfo9pV38K&sz=w800",
    caption: "Drone View of Campus & Grounds",
    category: "Campus & Drone",
    views: "4.7K",
    date: "1 month ago",
    description: "Aerial footage capturing the expansive sports fields, obstacle courses, and parade grounds.",
  },
  {
    id: 3,
    driveId: "1sSo07UuU4Hv9vD6koJQoXToQ4Pbc9uBB",
    poster: "https://drive.google.com/thumbnail?id=1sSo07UuU4Hv9vD6koJQoXToQ4Pbc9uBB&sz=w800",
    caption: "75th Republic Day Grand Parade",
    category: "National Festivals",
    views: "2.3K",
    date: "2 weeks ago",
    description: "Cadet parade drill, national anthem honor guard, and ceremonial flag hoisting.",
  },
  {
    id: 4,
    driveId: "1a9_M975c70qkoj64CdB8s12FVGpICdKi",
    poster: "https://drive.google.com/thumbnail?id=1a9_M975c70qkoj64CdB8s12FVGpICdKi&sz=w800",
    caption: "Independence Day Celebrations - March Past",
    category: "National Festivals",
    views: "1.8K",
    date: "3 weeks ago",
    description: "Precision marching squad showing synchronization, valor, and patriotic spirit.",
  },
  {
    id: 5,
    driveId: "1UsT2__r_NdvRkP4cEJR_0JVCF9OfHix8",
    poster: "https://drive.google.com/thumbnail?id=1UsT2__r_NdvRkP4cEJR_0JVCF9OfHix8&sz=w800",
    caption: "Independence Day Cultural Performance",
    category: "National Festivals",
    views: "1.5K",
    date: "3 weeks ago",
    description: "Music and drama presentations commemorating India's freedom fighters.",
  },
  {
    id: 6,
    driveId: "1kBQPyEFwMDaG2cnieJJXvagPCjSLfNL3",
    poster: "https://drive.google.com/thumbnail?id=1kBQPyEFwMDaG2cnieJJXvagPCjSLfNL3&sz=w800",
    caption: "Independence Day Guard of Honour",
    category: "National Festivals",
    views: "1.2K",
    date: "1 month ago",
    description: "Salute drill presentation by our senior student division.",
  },
  {
    id: 7,
    driveId: "1chS3OJ-VYGP_YVZR36IA0oxpt-pgbPve",
    poster: "https://drive.google.com/thumbnail?id=1chS3OJ-VYGP_YVZR36IA0oxpt-pgbPve&sz=w800",
    caption: "Cadet Drills & Physical Training",
    category: "Student Life",
    views: "3.1K",
    date: "2 weeks ago",
    description: "Morning stamina building, endurance hurdles, teamwork, and daily discipline routine.",
  },
];

const drivePreviewUrl = (driveId) =>
  `https://drive.google.com/file/d/${driveId}/preview?autoplay=1`;

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const filteredVideos =
    activeCategory === "All"
      ? VIDEOS
      : VIDEOS.filter((video) => video.category === activeCategory);

  const openVideo = (video) => {
    setActiveVideo(video);
    setShowExitConfirm(false);
    window.history.pushState({ videoModal: true }, "");
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setShowExitConfirm(false);
  };

  useEffect(() => {
    const onPopState = () => {
      if (activeVideo) setShowExitConfirm(true);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape" && activeVideo) {
        if (showExitConfirm) setShowExitConfirm(false);
        else setShowExitConfirm(true);
      }
    };

    if (activeVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("popstate", onPopState);
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo, showExitConfirm]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-emerald-500 selection:text-white">
      <section className="border-b border-slate-800 bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-900 px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:mb-12 md:flex-row">
            <div className="text-center md:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                <Sparkles className="h-3.5 w-3.5" /> Campus Media & Archives
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Life at Swarajya Campus
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg">
                Experience the discipline, leadership training, academic excellence, and physical rigor that shapes future defenders and leaders.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 items-center gap-2 rounded-2xl border border-slate-700/60 bg-slate-800/70 px-4 py-3 shadow-xl sm:gap-6 sm:px-6 sm:py-4 md:w-auto">
              <Metric value="100%" label="Discipline" />
              <Metric value="Green" label="Campus" bordered />
              <Metric value="Holistic" label="Growth" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/80 bg-slate-800/50 p-4 shadow-2xl sm:p-6 lg:p-8">
            <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
              <VideoThumbnail video={VIDEOS[0]} featured onClick={() => openVideo(VIDEOS[0])} />
              <div className="space-y-4 lg:col-span-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400"><Award className="h-4 w-4" /> Featured Presentation</div>
                <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">{VIDEOS[0].caption}</h2>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-base">{VIDEOS[0].description}</p>
                <div className="flex items-center justify-between border-t border-slate-700/70 pt-3 text-xs text-slate-400"><span className="flex items-center gap-1.5"><Eye className="h-4 w-4 text-emerald-400" />{VIDEOS[0].views} Views</span><span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" />Verified Tour</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 border-b border-slate-800 pb-5 sm:flex-row sm:items-center">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`shrink-0 rounded-xl px-4 py-2 text-xs font-semibold transition sm:text-sm ${activeCategory === category ? "bg-emerald-500 font-bold text-slate-950" : "border border-slate-700/50 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"}`}>{category}</button>)}
          </div>
          <span className="text-xs text-slate-400">Showing <strong className="text-white">{filteredVideos.length}</strong> videos</span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {filteredVideos.map((video) => <article key={video.id} onClick={() => openVideo(video)} className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/60 shadow-lg transition hover:border-emerald-500/50"><VideoThumbnail video={video} /><div className="p-4 sm:p-5"><h3 className="mb-1.5 line-clamp-1 text-sm font-bold text-white group-hover:text-emerald-300 sm:text-base">{video.caption}</h3><p className="line-clamp-2 text-xs leading-relaxed text-slate-400 sm:text-sm">{video.description}</p><div className="mt-4 flex items-center justify-between border-t border-slate-700/50 pt-3 text-xs text-slate-400"><span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" />{video.views}</span><span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{video.date}</span></div></div></article>)}
        </div>
      </main>

      {activeVideo && <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-black" role="dialog" aria-modal="true">
        <div className="flex shrink-0 items-center justify-end border-b border-slate-800 bg-slate-950/90 p-3 sm:p-4">
          <button onClick={() => setShowExitConfirm(true)} aria-label="Close video" className="rounded-full bg-red-600/90 p-2 text-white hover:bg-red-700"><X className="h-5 w-5" /></button>
        </div>
        <div className="relative min-h-0 flex-1 bg-black">
          <iframe key={activeVideo.id} src={drivePreviewUrl(activeVideo.driveId)} className="block h-full w-full border-0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={activeVideo.caption} />
        </div>
        <div className="hidden shrink-0 border-t border-slate-800 bg-slate-950 p-4 landscape:hidden sm:block"><p className="text-sm text-slate-300">{activeVideo.description}</p></div>
        {showExitConfirm && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={(event) => event.stopPropagation()}><div className="w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center"><AlertTriangle className="mx-auto mb-3 h-8 w-8 text-red-500" /><h3 className="font-bold text-white">Exit Video?</h3><p className="my-4 text-sm text-slate-300">Are you sure you want to stop playback and exit?</p><div className="grid grid-cols-2 gap-3"><button onClick={() => setShowExitConfirm(false)} className="rounded-xl bg-slate-800 px-4 py-2 text-sm text-slate-200">Keep Watching</button><button onClick={closeVideo} className="rounded-xl bg-red-600 px-4 py-2 text-sm text-white">Exit Video</button></div></div></div>}
      </div>}

      <section className="grid grid-cols-1 gap-6 border-t border-slate-800 bg-slate-950 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8"><Value icon={<ShieldCheck />} title="Character & Valor" text="Imparting core leadership ethics, personal integrity, and national values." /><Value icon={<Compass />} title="Modern Military Cadence" text="Balanced drill schedules, physical obstacle circuits, and parade training." /><Value icon={<Award />} title="Academic Excellence" text="Structured study halls, focused mentorship, and competitive exam preparation." /></section>
    </div>
  );
}

function Metric({ value, label, bordered }) { return <div className={`text-center ${bordered ? "border-x border-slate-700/80 px-2" : ""}`}><p className="text-xl font-black text-emerald-400 sm:text-2xl">{value}</p><p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-400 sm:text-xs">{label}</p></div>; }
function VideoThumbnail({ video, featured = false, onClick }) { return <div onClick={onClick} className={`${featured ? "lg:col-span-7" : ""} group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-black`}><img src={video.poster} alt={video.caption} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-black/35" /><div className="absolute inset-0 flex items-center justify-center"><span className={`${featured ? "h-16 w-16 sm:h-20 sm:w-20" : "h-12 w-12 sm:h-14 sm:w-14"} flex items-center justify-center rounded-full bg-emerald-500/90 text-slate-950 shadow-2xl transition group-hover:scale-110`}><Play className={`${featured ? "h-8 w-8 sm:h-10 sm:w-10" : "h-6 w-6"} ml-1 fill-slate-950`} /></span></div><span className="absolute left-3 top-3 rounded border border-emerald-500/30 bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">{featured ? "Official Spotlight" : video.category}</span></div>; }
function Value({ icon, title, text }) { return <div className="flex items-start gap-3 sm:gap-4"><div className="shrink-0 rounded-xl bg-slate-800 p-2.5 text-emerald-400 sm:p-3">{icon}</div><div><h4 className="text-sm font-bold text-white sm:text-base">{title}</h4><p className="mt-0.5 text-xs leading-relaxed text-slate-400">{text}</p></div></div>; }
