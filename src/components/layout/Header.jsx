import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-primary w-full shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and School Name */}
          <Link href="/" className="flex items-center gap-4">
            <Image 
              src="/logo.png" 
              alt="DR.B B CHAVAN MILITARY SCHOOL Logo" 
              width={96} 
              height={96}
              className="w-20 h-20 sm:w-24 sm:h-24"
            />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-white">
                DR.B B CHAVAN MILITARY SCHOOL
              </h1>
              <h2 className="text-sm sm:text-xl text-gray-200">
                AND ACADEMY
              </h2>
            </div>
          </Link>

          {/* Action Buttons - Column Layout */}
          <div className="hidden md:flex flex-col gap-3">
            <Link 
              href="/admission"
              className="relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 text-center whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              ADMISSION REGISTRATION OPEN
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
              ADMISSION
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