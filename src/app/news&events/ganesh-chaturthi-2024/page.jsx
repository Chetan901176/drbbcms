import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const GaneshChaturthiBlog = () => {
  const introText = `
    On September 7, 2024, DR. B. B. Chavan Military School and Academy celebrated Ganesh Chaturthi
    with vibrant enthusiasm and heartfelt devotion. The event kicked off with traditional prayers
    and a beautifully decorated idol of Lord Ganesha, setting a festive tone for the day.
  `;

  const additionalText = `
    The celebration was a blend of cultural rituals and lively performances. Students, faculty,
    and the community gathered to enjoy devotional songs, traditional dances, and a sumptuous feast.
    This event not only honored our cultural heritage but also brought everyone together in a spirit
    of unity and joy.
  `;

  const galleryImages = [
    "/GaneshChaturthi/2.jpeg",
    "/GaneshChaturthi/3.jpeg"
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-0 sm:mt-0">
      {/* Breadcrumb */}
      <div className="bg-green-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <Home className="text-gray-300 w-4 h-4" />
            <span className="text-gray-300">/</span>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/news&events" className="text-gray-300 hover:text-white">
              Events & News
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-white">Ganesh Chaturthi Celebration</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#294335] mb-4">
          Ganesh Chaturthi Celebration at DR. B. B. Chavan Military School and
          Academy
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          September 7, 2024
        </p>

        {/* Featured Section: Image and Intro Text */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
          <div className="md:w-1/2">
            <img
              src="/GaneshChaturthi/1.jpeg"
              alt="Featured Ganesh Chaturthi Celebration"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <div className="prose max-w-none">
              <p className="text-gray-700 text-base md:text-lg whitespace-pre-line">
                {introText}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Text Section */}
        <div className="mb-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 text-base md:text-lg whitespace-pre-line">
              {additionalText}
            </p>
          </div>
        </div>

        {/* Gallery Section Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#294335]">
            Gallery Highlights
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Ganesh Chaturthi Celebration ${index + 2}`}
              className="w-full h-80 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaneshChaturthiBlog;