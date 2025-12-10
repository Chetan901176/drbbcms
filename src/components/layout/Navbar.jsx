'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    about: false,
    academics: false,
    administration: false,
    schoolLevelCommittee: false,
    activities: false,
    gallery: false,
    downloads: false
  });
  
  const aboutRef = useRef(null);
  const academicsRef = useRef(null);
  const administrationRef = useRef(null);
  const schoolLevelRef = useRef(null);
  const activitiesRef = useRef(null);
  const galleryRef = useRef(null);
  const downloadsRef = useRef(null);

  const isActive = (path) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const allRefs = [aboutRef, academicsRef, administrationRef, schoolLevelRef, activitiesRef, galleryRef, downloadsRef];
      const isInsideAnyDropdown = allRefs.some(ref => ref.current && ref.current.contains(event.target));
      
      if (!isInsideAnyDropdown) {
        setDropdowns({
          about: false,
          academics: false,
          administration: false,
          schoolLevelCommittee: false,
          activities: false,
          gallery: false,
          downloads: false
        });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setDropdowns({
        about: false,
        academics: false,
        administration: false,
        schoolLevelCommittee: false,
        activities: false,
        gallery: false,
        downloads: false
      });
    }
  };

  const toggleDropdown = (dropdownName, event) => {
    if (event) {
      event.stopPropagation();
    }
    
    setDropdowns(prev => {
      const newDropdowns = { ...prev };
      
      if (dropdownName === 'schoolLevelCommittee') {
        newDropdowns[dropdownName] = !prev[dropdownName];
        return newDropdowns;
      }
      
      Object.keys(newDropdowns).forEach(key => {
        if (key !== dropdownName) {
          newDropdowns[key] = false;
        }
      });
      newDropdowns[dropdownName] = !prev[dropdownName];
      return newDropdowns;
    });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdowns({
      about: false,
      academics: false,
      administration: false,
      schoolLevelCommittee: false,
      activities: false,
      gallery: false,
      downloads: false
    });
  };

  const DropdownArrow = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <nav className="bg-primary text-white shadow-md w-full sticky top-0 z-30">
      {/* Desktop Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-evenly space-x-4 w-full py-3">
            <Link href="/" className={`${isActive('/') && !isActive('/about') && !isActive('/contact') ? 'text-yellow-300' : 'hover:text-yellow-300'} hover:underline transition-all duration-200`}>
              Home
            </Link>
            
            {/* About Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button 
                className={`flex items-center px-2 py-1 rounded ${isActive('/about') || isActive('/contact') ? 'text-yellow-300' : 'hover:text-yellow-300'} hover:underline transition-all duration-200`}
                onClick={(e) => toggleDropdown('about', e)}
              >
                About
                <DropdownArrow isOpen={dropdowns.about} />
              </button>
              <div 
                className={`absolute bg-white mt-1 py-2 w-56 rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top ${
                  dropdowns.about 
                    ? 'opacity-100 scale-y-100' 
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              >
                <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  About DRBBCMS
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Academics Dropdown */}
            <div className="relative" ref={academicsRef}>
              <button 
                className={`flex items-center px-2 py-1 rounded ${isActive('/admission') || isActive('/fee-structure') || isActive('/sample-papers') || isActive('/facilities') ? 'text-yellow-300' : 'hover:text-yellow-300'} hover:underline transition-all duration-200`}
                onClick={(e) => toggleDropdown('academics', e)}
              >
                Academics
                <DropdownArrow isOpen={dropdowns.academics} />
              </button>
              <div 
                className={`absolute bg-white mt-1 py-2 w-64 rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top ${
                  dropdowns.academics 
                    ? 'opacity-100 scale-y-100' 
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              >
                <Link href="/admission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  Classwise Admission Details
                </Link>
                <Link href="/fee-structure" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  Fees Structure
                </Link>
                <Link href="/sample-papers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  Sample Papers
                </Link>
                <Link href="/facilities" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  Our Facilities
                </Link>
              </div>
            </div>

            {/* Administration Dropdown */}
            <div className="relative" ref={administrationRef}>
              <button 
                className={`flex items-center px-2 py-1 rounded ${isActive('/class-wise-student') ? 'text-yellow-300' : 'hover:text-yellow-300'} hover:underline transition-all duration-200`}
                onClick={(e) => toggleDropdown('administration', e)}
              >
                Administration
                <DropdownArrow isOpen={dropdowns.administration} />
              </button>
              <div 
                className={`absolute bg-white mt-1 py-2 w-72 rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top ${
                  dropdowns.administration 
                    ? 'opacity-100 scale-y-100' 
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              >
                <Link href="/class-wise-student" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  Class Wise Students
                </Link>
                
                {/* Nested School Level Committee Dropdown */}
                <div className="relative" ref={schoolLevelRef}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                    onClick={(e) => toggleDropdown('schoolLevelCommittee', e)}
                  >
                    School Level Committee
                    <DropdownArrow isOpen={dropdowns.schoolLevelCommittee} />
                  </button>
                  <div 
                    className={`absolute left-full top-0 bg-white py-2 w-48 rounded-md shadow-lg z-20 transition-all duration-300 transform origin-top-left ${
                      dropdowns.schoolLevelCommittee 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <Link href="/school-committee/examination" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                      Examination
                    </Link>
                    <Link href="/school-committee/library" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                      Library
                    </Link>
                    <Link href="/school-committee/discipline" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                      Discipline
                    </Link>
                    <Link href="/school-committee/girls-safety" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                      Girls Safety
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities Dropdown */}
            <div className="relative" ref={activitiesRef}>
              <button 
                className={`flex items-center px-2 py-1 rounded ${isActive('/news-events') ? 'text-yellow-300' : 'hover:text-yellow-300'} hover:underline transition-all duration-200`}
                onClick={(e) => toggleDropdown('activities', e)}
              >
                Activities
                <DropdownArrow isOpen={dropdowns.activities} />
              </button>
              <div 
                className={`absolute bg-white mt-1 py-2 w-48 rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top ${
                  dropdowns.activities 
                    ? 'opacity-100 scale-y-100' 
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              >
                <Link href="/news-events" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  News & Events
                </Link>
              </div>
            </div>
            
            {/* Gallery Dropdown */}
            <div className="relative" ref={galleryRef}>
              <button 
                className={`flex items-center px-2 py-1 rounded ${isActive('/gallery') ? 'text-yellow-300' : 'hover:text-yellow-300'} hover:underline transition-all duration-200`}
                onClick={(e) => toggleDropdown('gallery', e)}
              >
                Gallery
                <DropdownArrow isOpen={dropdowns.gallery} />
              </button>
              <div 
                className={`absolute bg-white mt-1 py-2 w-48 rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top ${
                  dropdowns.gallery 
                    ? 'opacity-100 scale-y-100' 
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              >
                <Link href="/gallery/photo" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  Photos
                </Link>
                <Link href="/gallery/video" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  Videos
                </Link>
              </div>
            </div>

            {/* Downloads Dropdown */}
            <div className="relative" ref={downloadsRef}>
              <button 
                className={`flex items-center px-2 py-1 rounded ${isActive('/downloads') ? 'text-yellow-300' : 'hover:text-yellow-300'} hover:underline transition-all duration-200`}
                onClick={(e) => toggleDropdown('downloads', e)}
              >
                Downloads
                <DropdownArrow isOpen={dropdowns.downloads} />
              </button>
              <div 
                className={`absolute bg-white mt-1 py-2 w-48 rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top ${
                  dropdowns.downloads 
                    ? 'opacity-100 scale-y-100' 
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              >
                <Link href="/downloads/books" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLinkClick}>
                  Class Wise Books
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center ml-auto">
            <button onClick={toggleMenu} className="focus:outline-none p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          
          {/* Sidebar Menu */}
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">Menu</h2>
              <button 
                onClick={toggleMenu}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="py-2">
              <Link href="/" onClick={handleLinkClick} className={`block px-6 py-3 border-b border-gray-200 ${isActive('/') ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                Home
              </Link>
              
              {/* About Dropdown */}
              <div className="border-b border-gray-200">
                <button
                  onClick={(e) => toggleDropdown('about', e)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-left ${isActive('/about') || isActive('/contact') ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span>About</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${dropdowns.about ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${dropdowns.about ? 'max-h-96' : 'max-h-0'}`}>
                  <Link href="/about" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/about') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    About DRBBCMS
                  </Link>
                  <Link href="/contact" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/contact') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Academics Dropdown */}
              <div className="border-b border-gray-200">
                <button
                  onClick={(e) => toggleDropdown('academics', e)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-left ${isActive('/admission') || isActive('/fee-structure') || isActive('/sample-papers') || isActive('/facilities') ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span>Academics</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${dropdowns.academics ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${dropdowns.academics ? 'max-h-96' : 'max-h-0'}`}>
                  <Link href="/admission" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/admission') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    Classwise Admission Details
                  </Link>
                  <Link href="/fee-structure" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/fee-structure') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    Fees Structure
                  </Link>
                  <Link href="/sample-papers" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/sample-papers') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    Sample Papers
                  </Link>
                  <Link href="/facilities" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/facilities') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    Our Facilities
                  </Link>
                </div>
              </div>

              {/* Administration Dropdown */}
              <div className="border-b border-gray-200">
                <button
                  onClick={(e) => toggleDropdown('administration', e)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-left ${isActive('/class-wise-student') ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span>Administration</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${dropdowns.administration ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${dropdowns.administration ? 'max-h-96' : 'max-h-0'}`}>
                  <Link href="/class-wise-student" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/class-wise-student') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    Class Wise Students
                  </Link>
                  
                  {/* School Level Committee Nested */}
                  <div>
                    <button
                      onClick={(e) => toggleDropdown('schoolLevelCommittee', e)}
                      className="w-full flex items-center justify-between px-10 py-2.5 text-sm text-gray-600 hover:bg-gray-50 text-left"
                    >
                      <span>School Level Committee</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${dropdowns.schoolLevelCommittee ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${dropdowns.schoolLevelCommittee ? 'max-h-96' : 'max-h-0'}`}>
                      <Link href="/school-committee/examination" onClick={handleLinkClick} className="block px-14 py-2 text-xs text-gray-600 hover:bg-gray-50">
                        Examination
                      </Link>
                      <Link href="/school-committee/library" onClick={handleLinkClick} className="block px-14 py-2 text-xs text-gray-600 hover:bg-gray-50">
                        Library
                      </Link>
                      <Link href="/school-committee/discipline" onClick={handleLinkClick} className="block px-14 py-2 text-xs text-gray-600 hover:bg-gray-50">
                        Discipline
                      </Link>
                      <Link href="/school-committee/girls-safety" onClick={handleLinkClick} className="block px-14 py-2 text-xs text-gray-600 hover:bg-gray-50">
                        Girls Safety
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activities Dropdown */}
              <div className="border-b border-gray-200">
                <button
                  onClick={(e) => toggleDropdown('activities', e)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-left ${isActive('/news-events') ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span>Activities</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${dropdowns.activities ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${dropdowns.activities ? 'max-h-96' : 'max-h-0'}`}>
                  <Link href="/news-events" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/news-events') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    News & Events
                  </Link>
                </div>
              </div>
              
              {/* Gallery Dropdown */}
              <div className="border-b border-gray-200">
                <button
                  onClick={(e) => toggleDropdown('gallery', e)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-left ${isActive('/gallery') ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span>Gallery</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${dropdowns.gallery ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${dropdowns.gallery ? 'max-h-96' : 'max-h-0'}`}>
                  <Link href="/gallery/photo" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/gallery/photo') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    Photos
                  </Link>
                  <Link href="/gallery/video" onClick={handleLinkClick} className={`block px-10 py-2.5 text-sm ${isActive('/gallery/video') ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    Videos
                  </Link>
                </div>
              </div>

              {/* Downloads Dropdown */}
              <div className="border-b border-gray-200">
                <button
                  onClick={(e) => toggleDropdown('downloads', e)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-left ${isActive('/downloads') ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span>Downloads</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${dropdowns.downloads ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${dropdowns.downloads ? 'max-h-96' : 'max-h-0'}`}>
                  <Link href="/downloads/books" onClick={handleLinkClick} className="block px-10 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                    Class Wise Books
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;