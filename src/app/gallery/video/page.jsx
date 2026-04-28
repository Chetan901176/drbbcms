import React from "react";
import { Home } from "lucide-react";
import Link from "next/link";

const VideoGallery = () => {
  const videos = [
    {
      title: "Republic Day Celebration | SMSA | Patriotism in Action",
      url: "https://www.youtube.com/embed/J41HtMk_G0E?si=_kHciowS2F1V8e5X",
    },
    {
      title:
        "Republic Day Special | Epic Talwarbaji & Lathi Kathi Performance | Indian Martial Arts Showcase",
      url: "https://www.youtube.com/embed/BM9JD0a3vJI?si=DsDpDgI7jgIpZjzq",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-0 sm:mt-0">
      {/* Hero Section */}
      <div 
        className="text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(92,108,63,0.35), rgba(92,108,63,0.55)), url(/hero2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Video Gallery
          </h1>
          {/* Breadcrumb */}
          <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Home className="text-gray-300 w-4 h-4" />
            <span className="text-gray-300">/</span>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-white">Video Gallery</span>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto mt-4">
            Explore our military school campus through this gallery. From
            state-of-the-art facilities to sprawling green grounds, our
            infrastructure is designed to provide a perfect balance of education
            and extracurricular activities.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 py-8">
        <div className="space-y-11 max-w-5xl mx-auto px-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <iframe
                className="w-full h-64 md:h-80 lg:h-96"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-700">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;