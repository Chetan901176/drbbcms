import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const RepublicDayBlog2026 = () => {
  const introText = `
    Republic Day 2026 was celebrated with great pride and patriotic fervor at Dr. B. B. Chavan Military School and Academy. The occasion was marked by the ceremonial hoisting of the national flag, followed by an impeccably synchronized parade that reflected the discipline, unity, and dedication of our cadets.

The celebration was honored by the gracious presence of our esteemed Chief Guest, Brigadier A. G. Barbare, whose inspiring words motivated students to uphold the ideals of service, integrity, and leadership. Distinguished dignitaries, respected faculty members, parents, and alumni also graced the event.
  `;

  const additionalText = `
    A vibrant array of cultural performances, patriotic songs, traditional dances, and thought-provoking speeches added color and meaning to the celebration, paying tribute to the spirit of the Constitution and the values that bind our nation together. The program concluded with a renewed pledge by all to contribute responsibly towards building a strong and united India. 
  `;

  const galleryImages = [
    "/Republic Day 2026/1.jpg",
    "/Republic Day 2026/2.jpg",
    "/Republic Day 2026/3.jpg",
    "/Republic Day 2026/4.jpg",
    "/Republic Day 2026/5.jpg",
    "/Republic Day 2026/6.jpg",
    "/Republic Day 2026/7.jpg",
    "/Republic Day 2026/8.jpg",
    "/Republic Day 2026/9.jpg",
    "/Republic Day 2026/10.jpg",
    "/Republic Day 2026/11.jpg",
    "/Republic Day 2026/12.jpg",
    "/Republic Day 2026/13.jpg",
    "/Republic Day 2026/14.jpg",
    "/Republic Day 2026/15.jpg",
    "/Republic Day 2026/16.jpg",
    "/Republic Day 2026/17.jpg",
    "/Republic Day 2026/18.jpg",
    "/Republic Day 2026/19.jpg",
    "/Republic Day 2026/20.jpg",
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
            <Link
              href="/news&events"
              className="text-gray-300 hover:text-white"
            >
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
          Republic Day Celebration at DRBB Chavan Military School and Academy
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          January 26, 2026
        </p>

        {/* Featured Section: Image and Intro Text */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
          <div className="md:w-1/2">
            <img
              src="/Republic Day 2026/8.jpg"
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

export default RepublicDayBlog2026;
