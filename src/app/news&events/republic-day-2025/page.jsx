import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const RepublicDayBlog = () => {
  const introText = `
    The Republic Day celebration at Swarajya Military School And Academy was a grand affair,
    marked by a flag-hoisting ceremony and a disciplined parade that showcased the unity of our students.
  `;

  const additionalText = `
    Esteemed guests, local dignitaries, and alumni graced the event with their presence.
    Cultural performances, inspiring speeches, and traditional dances highlighted the celebration,
    reflecting our deep respect for the nation's constitution and values.
  `;

  const galleryImages = [
    "/Republic Day/1.jpeg",
    "/Republic Day/3.jpeg",
    "/Republic Day/4.jpeg",
    "/Republic Day/5.jpeg",
    "/Republic Day/6.jpeg",
    "/Republic Day/7.jpeg",
    "/Republic Day/8.jpeg",
    "/Republic Day/9.jpeg",
    "/Republic Day/10.jpeg",
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
            <span className="text-white">Republic Day Celebration</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#294335] mb-4">
          Republic Day Celebration at Swarajya Military School And Academy
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          January 26, 2024
        </p>

        {/* Featured Section: Image and Intro Text */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
          <div className="md:w-1/2">
            <img
              src="/Republic Day/1.jpeg"
              alt="Featured Republic Day Celebration"
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
            Here are some shots of the event
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Republic Day Celebration ${index + 2}`}
              className="w-full h-80 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepublicDayBlog;