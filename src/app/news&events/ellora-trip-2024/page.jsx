import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const ElloraTripBlog = () => {
  const introText = `
    The Ellora Trip on July 17, 2024, was a mesmerizing journey into history and art.
    Our students and faculty embarked on an inspiring expedition to explore the ancient
    cave temples of Ellora, where the blend of rock-cut architecture and intricate carvings
    brought the past to life.
  `;

  const additionalText = `
    The trip was not just an educational experience but also a celebration of cultural heritage.
    Guided tours, interactive sessions with historians, and time for reflection allowed everyone
    to appreciate the rich legacy of India's architectural marvels. The memories created during
    this trip will inspire our community for years to come.
  `;

  const galleryImages = [
    "/ElloraTrip/2.jpeg",
    "/ElloraTrip/3.jpeg",
    "/ElloraTrip/4.jpeg",
    "/ElloraTrip/5.jpeg",
    "/ElloraTrip/6.jpeg",
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
            <span className="text-white">Ellora Trip</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#294335] mb-4">
          Ellora Trip – A Journey Through Time
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">July 17, 2024</p>

        {/* Featured Section: Image and Intro Text */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
          <div className="md:w-1/2">
            <img
              src="/ElloraTrip/1.jpeg"
              alt="Featured Ellora Trip"
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
            Gallery of the Ellora Trip
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Ellora Trip ${index + 2}`}
              className="w-full h-80 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElloraTripBlog;