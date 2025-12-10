import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-white w-full shadow-sm">
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
              <h1 className="text-lg sm:text-2xl font-bold text-primary">
                DR.B B CHAVAN MILITARY SCHOOL
              </h1>
              <h2 className="text-sm sm:text-xl text-gray-700">
                AND ACADEMY
              </h2>
            </div>
          </Link>

          {/* Action Buttons - Column Layout */}
          <div className="hidden md:flex flex-col gap-2">
            <Link 
              href="/admission"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-center whitespace-nowrap"
            >
              ADMISSION REGISTRATION OPEN
            </Link>
            <Link 
              href="/sample-papers"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-center whitespace-nowrap"
            >
              SAMPLE PAPERS
            </Link>
            <Link 
              href="/contact"
              className="bg-primary hover:bg-lightGreen text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-center whitespace-nowrap"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Action Buttons - Column Layout */}
          <div className="flex md:hidden flex-col gap-1.5">
            <Link 
              href="/admission"
              className="bg-red-600 text-white px-3 py-1.5 rounded text-xs font-medium text-center whitespace-nowrap"
            >
              ADMISSION
            </Link>
            <Link 
              href="/sample-papers"
              className="bg-green-600 text-white px-3 py-1.5 rounded text-xs font-medium text-center"
            >
              PAPERS
            </Link>
            <Link 
              href="/contact"
              className="bg-primary text-white px-3 py-1.5 rounded text-xs font-medium text-center"
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