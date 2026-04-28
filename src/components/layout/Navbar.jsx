'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Navigation configuration array
const navigationConfig = [
  {
    label: 'Home',
    route: '/',
    type: 'link'
  },
  {
    label: 'About',
    type: 'dropdown',
    key: 'about',
    sublinks: [
      { label: 'About SMSA', route: '/about' },
      { label: 'Contact Us', route: '/contact' }
    ]
  },
  {
    label: 'Academics',
    type: 'dropdown',
    key: 'academics',
    sublinks: [
      { label: 'Classwise Admission Details', route: '/admission' },
      {
        label: 'Fees Structure',
        type: 'nested',
        key: 'feesStructure',
        sublinks: [
          { label: 'Std 5th & 7th', route: '/fee-structure/std-5-7' },
          { label: 'Std 8th & 9th', route: '/fee-structure/std-8-9' },
          { label: 'Std 10th', route: '/fee-structure/std-10' },
          { label: 'Std 11th & 12th', route: '/fee-structure/std-11-12' }
        ]
      },
      { label: 'Sample Papers', route: '/sample-papers' },
      { label: 'Our Facilities', route: '/facilities' }
    ]
  },
  {
    label: 'Administration',
    type: 'dropdown',
    key: 'administration',
    sublinks: [
      { label: 'Class Wise Students', route: '/class-wise-student' },
      {
        label: 'School Level Committee',
        type: 'nested',
        key: 'schoolLevelCommittee',
        sublinks: [
          { label: 'Examination', route: '/school-committee/examination' },
          { label: 'Library', route: '/school-committee/library' },
          { label: 'Discipline', route: '/school-committee/discipline' },
          { label: 'Girls Safety', route: '/school-committee/girls-safety' }
        ]
      }
    ]
  },
  {
    label: 'Activities',
    type: 'dropdown',
    key: 'activities',
    sublinks: [
      { label: 'News & Events', route: '/news&events' }
    ]
  },
  {
    label: 'Gallery',
    type: 'dropdown',
    key: 'gallery',
    sublinks: [
      { label: 'Photos', route: '/gallery/photo' },
      { label: 'Videos', route: '/gallery/video' }
    ]
  },
  {
    label: 'Downloads',
    type: 'dropdown',
    key: 'downloads',
    sublinks: [
      { label: 'Class Wise Books', route: '/downloads/books' }
    ]
  },
  {
    label: 'Careers',
    route: '/contact',
    type: 'link'
  }
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const dropdownRefs = useRef({});

  // Initialize dropdown states
  useEffect(() => {
    const initialDropdowns = {};
    navigationConfig.forEach(item => {
      if (item.type === 'dropdown') {
        initialDropdowns[item.key] = false;
        // Initialize nested dropdowns
        item.sublinks?.forEach(subitem => {
          if (subitem.type === 'nested') {
            initialDropdowns[subitem.key] = false;
          }
        });
      }
    });
    setDropdowns(initialDropdowns);
  }, []);

  const isActive = (path) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const isInsideAnyDropdown = Object.values(dropdownRefs.current).some(
        ref => ref && ref.contains(event.target)
      );
      
      if (!isInsideAnyDropdown) {
        setDropdowns(prev => {
          const newDropdowns = { ...prev };
          Object.keys(newDropdowns).forEach(key => {
            newDropdowns[key] = false;
          });
          return newDropdowns;
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
      setDropdowns(prev => {
        const newDropdowns = { ...prev };
        Object.keys(newDropdowns).forEach(key => {
          newDropdowns[key] = false;
        });
        return newDropdowns;
      });
    }
  };

  const handleMouseEnter = (dropdownName) => {
    setDropdowns(prev => {
      const newDropdowns = { ...prev };
      
      const nestedKeys = ['schoolLevelCommittee', 'feesStructure'];
      
      if (nestedKeys.includes(dropdownName)) {
        newDropdowns[dropdownName] = true;
        return newDropdowns;
      }
      
      Object.keys(newDropdowns).forEach(key => {
        if (key !== dropdownName && !nestedKeys.includes(key)) {
          newDropdowns[key] = false;
        }
      });
      newDropdowns[dropdownName] = true;
      return newDropdowns;
    });
  };

  const handleMouseLeave = (dropdownName) => {
    const nestedKeys = ['schoolLevelCommittee', 'feesStructure'];
    
    if (!nestedKeys.includes(dropdownName)) {
      setDropdowns(prev => {
        const next = { ...prev, [dropdownName]: false };
        nestedKeys.forEach(key => {
          next[key] = false;
        });
        return next;
      });
    } else {
      setDropdowns(prev => ({
        ...prev,
        [dropdownName]: false
      }));
    }
  };

  const toggleDropdown = (dropdownName, event) => {
    if (event) {
      event.stopPropagation();
    }
    
    setDropdowns(prev => {
      const newDropdowns = { ...prev };
      const nestedKeys = ['schoolLevelCommittee', 'feesStructure'];
      
      if (nestedKeys.includes(dropdownName)) {
        newDropdowns[dropdownName] = !prev[dropdownName];
        return newDropdowns;
      }
      
      Object.keys(newDropdowns).forEach(key => {
        if (key !== dropdownName && !nestedKeys.includes(key)) {
          newDropdowns[key] = false;
        }
      });
      newDropdowns[dropdownName] = !prev[dropdownName];
      return newDropdowns;
    });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdowns(prev => {
      const newDropdowns = { ...prev };
      Object.keys(newDropdowns).forEach(key => {
        newDropdowns[key] = false;
      });
      return newDropdowns;
    });
  };

  const DropdownArrow = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  // Check if any route in the dropdown is active
  const isDropdownActive = (item) => {
    if (item.type === 'link') return isActive(item.route);
    return item.sublinks?.some(sublink => 
      sublink.route ? isActive(sublink.route) : 
      sublink.sublinks?.some(nested => isActive(nested.route))
    );
  };

  return (
    <nav className="bg-primary text-white shadow-md w-full sticky top-0 z-30">
      {/* Desktop Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-evenly space-x-4 w-full py-3">
            {navigationConfig.map((item, index) => {
              if (item.type === 'link') {
                return (
                  <Link 
                    key={index}
                    href={item.route} 
                    className={`${isActive(item.route) ? 'text-yellow-300' : 'hover:text-yellow-300'} hover:underline transition-all duration-200`}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.type === 'dropdown') {
                return (
                  <div 
                    key={index}
                    className="relative" 
                    ref={el => dropdownRefs.current[item.key] = el}
                    onMouseEnter={() => handleMouseEnter(item.key)}
                    onMouseLeave={() => handleMouseLeave(item.key)}
                  >
                    <button 
                      className={`flex items-center px-2 py-1 rounded ${isDropdownActive(item) ? 'text-yellow-300' : 'hover:text-yellow-300'} hover:underline transition-all duration-200`}
                    >
                      {item.label}
                      <DropdownArrow isOpen={dropdowns[item.key]} />
                    </button>
                    <div 
                      className={`absolute bg-white mt-1 py-2 w-64 rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top ${
                        dropdowns[item.key] 
                          ? 'opacity-100 scale-y-100' 
                          : 'opacity-0 scale-y-0 pointer-events-none'
                      }`}
                    >
                      {item.sublinks.map((sublink, subIndex) => {
                        if (sublink.type === 'nested') {
                          return (
                            <div 
                              key={subIndex}
                              className="relative" 
                              ref={el => dropdownRefs.current[sublink.key] = el}
                              onMouseEnter={() => handleMouseEnter(sublink.key)}
                              onMouseLeave={() => handleMouseLeave(sublink.key)}
                            >
                              <button
                                className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                              >
                                {sublink.label}
                                <DropdownArrow isOpen={dropdowns[sublink.key]} />
                              </button>
                              <div 
                                className={`absolute left-full top-0 bg-white py-2 w-48 rounded-md shadow-lg z-20 transition-all duration-300 transform origin-top-left ${
                                  dropdowns[sublink.key] 
                                    ? 'opacity-100 scale-100' 
                                    : 'opacity-0 scale-95 pointer-events-none'
                                }`}
                              >
                                {sublink.sublinks.map((nested, nestedIndex) => (
                                  <Link 
                                    key={nestedIndex}
                                    href={nested.route} 
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100" 
                                    onClick={handleLinkClick}
                                  >
                                    {nested.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return (
                          <Link 
                            key={subIndex}
                            href={sublink.route} 
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100" 
                            onClick={handleLinkClick}
                          >
                            {sublink.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return null;
            })}
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
          <div className="absolute inset-0 bg-black/50" onClick={toggleMenu}></div>
          
          {/* Sidebar Menu */}
          <div 
            ref={el => dropdownRefs.current.mobileMenu = el}
            className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
          >
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
              {navigationConfig.map((item, index) => {
                if (item.type === 'link') {
                  return (
                    <Link 
                      key={index}
                      href={item.route} 
                      onClick={handleLinkClick} 
                      className={`block px-6 py-3 border-b border-gray-200 ${isActive(item.route) ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                if (item.type === 'dropdown') {
                  return (
                    <div key={index} className="border-b border-gray-200">
                      <button
                        onClick={(e) => toggleDropdown(item.key, e)}
                        className={`w-full flex items-center justify-between px-6 py-3 text-left ${isDropdownActive(item) ? 'text-primary bg-secondary font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <span>{item.label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${dropdowns[item.key] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${dropdowns[item.key] ? 'max-h-96' : 'max-h-0'}`}>
                        {item.sublinks.map((sublink, subIndex) => {
                          if (sublink.type === 'nested') {
                            return (
                              <div key={subIndex}>
                                <button
                                  onClick={(e) => toggleDropdown(sublink.key, e)}
                                  className="w-full flex items-center justify-between px-10 py-2.5 text-sm text-gray-600 hover:bg-gray-50 text-left"
                                >
                                  <span>{sublink.label}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${dropdowns[sublink.key] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${dropdowns[sublink.key] ? 'max-h-96' : 'max-h-0'}`}>
                                  {sublink.sublinks.map((nested, nestedIndex) => (
                                    <Link 
                                      key={nestedIndex}
                                      href={nested.route} 
                                      onClick={handleLinkClick} 
                                      className="block px-14 py-2 text-xs text-gray-600 hover:bg-gray-50"
                                    >
                                      {nested.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          }
                          return (
                            <Link 
                              key={subIndex}
                              href={sublink.route} 
                              onClick={handleLinkClick} 
                              className={`block px-10 py-2.5 text-sm ${isActive(sublink.route) ? 'text-primary font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                              {sublink.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;