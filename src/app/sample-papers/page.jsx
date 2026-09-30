// import React from "react";
// import { Download, Home } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// // Sample Papers Data with Preview Images
// const samplePapers = [
//   {
//     id: 1,
//     title: "5TH STANDARD ENTRANCE EXAMINATION",
//     description: "Sample paper for 2025",
//     previewImage: "/sample-papers/Thumbnail.jpg",
//     fileLink: "/sample-papers/5.pdf",
//   },
//   {
//     id: 2,
//     title: "6TH STANDARD ENTRANCE EXAMINATION",
//     description: "Sample paper for 2025",
//     previewImage: "/sample-papers/Thumbnail.jpg",
//     fileLink: "/sample-papers/6.pdf",
//   },
//   {
//     id: 3,
//     title: "7TH STANDARD ENTRANCE EXAMINATION",
//     description: "Sample paper for 2025",
//     previewImage: "/sample-papers/Thumbnail.jpg",
//     fileLink: "/sample-papers/7.pdf",
//   },
//   {
//     id: 4,
//     title: "8TH STANDARD ENTRANCE EXAMINATION",
//     description: "Sample paper for 2025",
//     previewImage: "/sample-papers/Thumbnail.jpg",
//     fileLink: "/sample-papers/8.pdf",
//   },
//   {
//     id: 5,
//     title: "9TH STANDARD ENTRANCE EXAMINATION",
//     description: "Sample paper for 2025",
//     previewImage: "/sample-papers/Thumbnail.jpg",
//     fileLink: "/sample-papers/9.pdf",
//   },
//   {
//     id: 6,
//     title: "10TH STANDARD ENTRANCE EXAMINATION",
//     description: "Sample paper for 2025",
//     previewImage: "/sample-papers/Thumbnail.jpg",
//     fileLink: "/sample-papers/10.pdf",
//   },
//   {
//     id: 7,
//     title: "11th STANDARD ENTRANCE EXAMINATION",
//     description: "Sample paper for 2025",
//     previewImage: "/sample-papers/Thumbnail.jpg",
//     fileLink: "/sample-papers/11.pdf",
//   },
// ];

// const SamplePapers = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 mt-0 sm:mt-0">
//       {/* Hero Section */}
//       <div 
//         className="text-white py-20 text-center"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(92,108,63,0.35), rgba(92,108,63,0.55)), url(/hero2.jpeg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Sample Papers</h1>
//         <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
//           <Home className="text-gray-300 w-4 h-4" />
//           <span className="text-gray-300">/</span>
//           <Link href="/" className="text-gray-300 hover:text-white">
//             Home
//           </Link>
//           <span className="text-gray-300">/</span>
//           <span className="text-white">Sample Papers</span>
//         </div>
//         <p className="text-xl max-w-3xl mx-auto mt-4">
//           Download sample papers to prepare for the entrance exams.
//         </p>
//       </div>

//       <div className="bg-white text-gray-900 p-4 md:p-6 mx-2 md:mx-10 mt-5">
//         <section className="mb-12">
//           <h2 className="text-xl md:text-3xl font-bold text-[#294335] text-center mb-6">
//             Sample Papers
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {samplePapers.map((paper) => (
//               <div
//                 key={paper.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//               >
//                 <Image
//                   src={paper.previewImage}
//                   alt={paper.title}
//                   width={400}
//                   height={300}
//                   className="w-full h-52 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{paper.title}</h3>
//                   <p className="text-gray-600 text-sm mt-2">
//                     {paper.description}
//                   </p>
//                   <a
//                     href={paper.fileLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-4 inline-flex items-center gap-2 text-white bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 transition-all duration-300"
//                   >
//                     <Download className="w-4 h-4" />
//                     Download
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default SamplePapers;

"use client";
import React, { useState } from "react";
import { 
  Download, 
  Home, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Award, 
  ArrowRight, 
  Sparkles, 
  BookOpen 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const samplePapers = [
  {
    id: 1,
    standard: "Class 5th",
    title: "5th Standard Entrance Examination",
    description: "Full-length model paper based on the latest entrance syllabus.",
    previewImage: "/sample-papers/Thumbnail.jpg",
    fileLink: "/sample-papers/5.pdf",
    duration: "2 Hours",
    marks: "100 Marks",
    badge: "Most Popular",
  },
  {
    id: 2,
    standard: "Class 6th",
    title: "6th Standard Entrance Examination",
    description: "Includes Mathematics, General Knowledge, and Reasoning sections.",
    previewImage: "/sample-papers/Thumbnail.jpg",
    fileLink: "/sample-papers/6.pdf",
    duration: "2 Hours",
    marks: "100 Marks",
    badge: "Updated Pattern",
  },
  {
    id: 3,
    standard: "Class 7th",
    title: "7th Standard Entrance Examination",
    description: "Curated model paper covering key science and language concepts.",
    previewImage: "/sample-papers/Thumbnail.jpg",
    fileLink: "/sample-papers/7.pdf",
    duration: "2 Hours",
    marks: "100 Marks",
  },
  {
    id: 4,
    standard: "Class 8th",
    title: "8th Standard Entrance Examination",
    description: "Comprehensive test covering standard 7 revision & entrance logic.",
    previewImage: "/sample-papers/Thumbnail.jpg",
    fileLink: "/sample-papers/8.pdf",
    duration: "2.5 Hours",
    marks: "150 Marks",
  },
  {
    id: 5,
    standard: "Class 9th",
    title: "9th Standard Entrance Examination",
    description: "Targeted paper with higher-order thinking & analytical questions.",
    previewImage: "/sample-papers/Thumbnail.jpg",
    fileLink: "/sample-papers/9.pdf",
    duration: "2.5 Hours",
    marks: "150 Marks",
    badge: "Recommended",
  },
  {
    id: 6,
    standard: "Class 10th",
    title: "10th Standard Entrance Examination",
    description: "Focused practice assessment designed by veteran educators.",
    previewImage: "/sample-papers/Thumbnail.jpg",
    fileLink: "/sample-papers/10.pdf",
    duration: "3 Hours",
    marks: "200 Marks",
  },
  {
    id: 7,
    standard: "Class 11th",
    title: "11th Standard Entrance Examination",
    description: "Specialized streams evaluation test for Science & Commerce.",
    previewImage: "/sample-papers/Thumbnail.jpg",
    fileLink: "/sample-papers/11.pdf",
    duration: "3 Hours",
    marks: "200 Marks",
    badge: "Career Stream",
  },
];

const SamplePapers = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPapers = samplePapers.filter((paper) => {
    if (activeFilter === "primary") return paper.id <= 2;
    if (activeFilter === "middle") return paper.id >= 3 && paper.id <= 5;
    if (activeFilter === "secondary") return paper.id >= 6;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Hero Section */}
      <section 
        className="relative text-white py-24 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(20, 36, 26, 0.85), rgba(30, 58, 42, 0.9)), url(/hero2.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs sm:text-sm text-emerald-200 border border-white/10">
            <Home className="w-3.5 h-3.5" />
            <span>/</span>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Entrance Resources</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Master the Entrance Exam with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-200">
              Official Model Papers
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Gain an edge in your preparation. Download standard-wise question papers crafted to reflect the real exam structure, timing, and weightage.
          </p>

          {/* Social Proof / Trust Counters */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-left">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-300">Question Format</p>
                <p className="text-sm font-bold text-white">Latest 2025–26</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <Sparkles className="w-6 h-6 text-amber-300 shrink-0" />
              <div>
                <p className="text-xs text-slate-300">Format</p>
                <p className="text-sm font-bold text-white">Instant PDF</p>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <Award className="w-6 h-6 text-emerald-300 shrink-0" />
              <div>
                <p className="text-xs text-slate-300">Access</p>
                <p className="text-sm font-bold text-white">100% Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-6">
        {/* Quick Filter Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Classes" },
            { id: "primary", label: "Class 5 - 6" },
            { id: "middle", label: "Class 7 - 9" },
            { id: "secondary", label: "Class 10 - 11" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#1e3a2a] text-white shadow-md shadow-emerald-900/20 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Card Image Header with Floating Badge */}
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image
                  src={paper.previewImage}
                  alt={paper.title}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                <span className="absolute top-3 left-3 bg-[#1e3a2a]/90 backdrop-blur-md text-emerald-200 text-xs font-semibold px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {paper.standard}
                </span>

                {paper.badge && (
                  <span className="absolute top-3 right-3 bg-amber-500 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
                    {paper.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span>{paper.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{paper.marks}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-800 leading-snug group-hover:text-emerald-700 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 line-clamp-2">
                    {paper.description}
                  </p>
                </div>

                {/* Download CTA */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <FileText className="w-3.5 h-3.5" />
                    <span>PDF Paper</span>
                  </div>

                  <a
                    href={paper.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1e3a2a] hover:bg-[#152a1e] active:scale-95 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Free
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing Banner / Next Action Section */}
        <section className="mt-16 bg-gradient-to-r from-[#173022] to-[#254d37] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-800/40">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
              <BookOpen className="w-3.5 h-3.5" /> Admissions Open
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to take the next step towards admission?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Register your child online for the upcoming entrance round. Instant slot booking and syllabus guide provided.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Apply Online Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3.5 rounded-xl text-sm font-medium transition"
            >
              Contact Desk
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SamplePapers;
