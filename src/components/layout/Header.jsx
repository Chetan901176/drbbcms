import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-primary w-full shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo, School Name, and YouTube Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <Image 
                src="/logo.png" 
                alt="SWARAJYA MILITARY SCHOOL AND ACADEMY Logo" 
                width={96} 
                height={96}
                className="w-20 h-20 sm:w-24 sm:h-24"
              />
              <div>
                <h1 className="text-lg sm:text-3xl font-bold text-white">
                  SWARAJYA MILITARY SCHOOL
                </h1>
                <h2 className="text-sm sm:text-2xl text-gray-200">
                  AND ACADEMY
                </h2>
              </div>
            </Link>

            {/* Visit Us on YouTube Button */}
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg transition-all duration-300 shadow-md sm:ml-2 mt-2 sm:mt-0"
            >
              <svg className="w-5 h-5 fill-current text-white flex-shrink-0" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-xs font-semibold whitespace-nowrap">Visit us on YouTube</span>
            </a>
          </div>

          {/* Action Buttons - Column Layout */}
          <div className="hidden md:flex flex-col gap-3">
            <Link 
              href="/admission"
              className="relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 text-center whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              REGISTRATION
            </Link>
            <Link 
              href="/sample-papers"
              className="relative bg-white hover:bg-gray-100 text-primary px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 text-center whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              SAMPLE PAPERS
            </Link>
            <Link 
              href="/contact"
              className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 text-center whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Action Buttons - Column Layout */}
          <div className="flex md:hidden flex-col gap-2">
            <Link 
              href="/admission"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg text-xs font-semibold text-center whitespace-nowrap shadow-md"
            >
              REGISTRATION
            </Link>
            <Link 
              href="/sample-papers"
              className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-semibold text-center shadow-md"
            >
              PAPERS
            </Link>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-xs font-semibold text-center shadow-md"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
