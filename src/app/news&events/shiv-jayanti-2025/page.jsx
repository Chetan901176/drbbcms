import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const ShivJayantiBlog = () => {
  const introText = `
    On February 19, 2025, Swarajya Military School And Academy celebrated Shiv Jayanti 
    with grandeur and devotion. The event began with a ceremonial tribute and a heartfelt address 
    by our esteemed principal.
  `;

  const additionalText = `
    As the day progressed, students, faculty, and guests experienced a blend of tradition and modernity. 
    The festivities captured the spirit of valor, unity, and patriotism, setting the tone for another year of excellence.
  `;

  const galleryImages = [
    "/ShivJayanti/2.jpeg",
    "/ShivJayanti/3.jpeg",
    "/ShivJayanti/4.jpeg",
    "/ShivJayanti/5.jpeg",
    "/ShivJayanti/6.jpeg",
    "/ShivJayanti/7.jpeg",
    "/ShivJayanti/8.jpeg",
    "/ShivJayanti/9.jpeg",
    "/ShivJayanti/10.jpeg",
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
            <span className="text-white">Shiv Jayanti Celebration</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#294335] mb-4">
          Shiv Jayanti Celebration at Swarajya Military School And Academy
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          February 19, 2025
        </p>

        {/* Featured Section: Image and Intro Text */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
          <div className="md:w-1/2">
            <img
              src="/ShivJayanti/1.jpeg"
              alt="Featured Shiv Jayanti"
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
              alt={`Shiv Jayanti ${index + 2}`}
              className="w-full h-80 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShivJayantiBlog;