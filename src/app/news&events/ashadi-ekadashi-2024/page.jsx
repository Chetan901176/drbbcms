import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const AshadiEkadashi = () => {
  const introText = `
On the auspicious occasion of Ashadi Ekadashi, our military school embraced the vibrant spirit of Maharashtra with heartfelt devotion and cultural pride. Dressed in traditional Maharashtrian attire, our beloved students came together to celebrate this sacred day — marking the beginning of Lord Vishnu's cosmic sleep and the start of the Chaturmasya period, a time for deep meditation and spiritual reflection.
  `;

  const additionalText = `
The event resonated with the soulful echoes of Marathi geets and the rhythmic beats of traditional instruments like the lezim, taal, and dholki. The students' performances not only reflected their musical talents but also showcased their unwavering respect for our rich cultural heritage.

As the divine chants and melodies filled the air, the essence of faith, devotion, and unity was beautifully captured.

Join us in reliving these moments through the captivating glimpses of our celebration!
  `;

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
            <span className="text-white">Ashadi Ekadashi Celebration</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#294335] mb-4">
          Ashadi Ekadashi Celebration at DR. B. B. Chavan Military School and
          Academy
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">July 17, 2024</p>

        {/* Featured Section: Image and Intro Text */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
          <div className="md:w-1/2">
            <img
              src="/AshadiEkadashi/1.jpeg"
              alt="Featured Ashadi Ekadashi Celebration"
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
            Event Highlights
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src="/AshadiEkadashi/2.jpeg"
            alt="Ashadi Ekadashi Celebration"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AshadiEkadashi;