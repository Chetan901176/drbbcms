'use client';

import React, { useState } from 'react';

const notices = [
  "Registration is available now",
  "Contact Us on mobile 777-000-4697 / 777-000-4698",
  "Admissions for 2024-25 are now open",
  "Visit our campus for a guided tour",
];

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="w-full bg-gray-100 text-gray-800 border-y border-gray-200 overflow-hidden">
      <div
        className="overflow-hidden whitespace-nowrap py-2 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="inline-block animate-marquee"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {notices.map((notice, index) => (
            <span key={index} className="mx-10 text-sm font-medium">
              <span className="text-primary">📢</span> {notice}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {notices.map((notice, index) => (
            <span key={`dup-${index}`} className="mx-10 text-sm font-medium">
              <span className="text-primary">📢</span> {notice}
            </span>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;