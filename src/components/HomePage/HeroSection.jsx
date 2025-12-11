import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div 
      className="w-full min-h-[77vh] bg-cover bg-center text-white flex items-center justify-center px-10"
      style={{
        backgroundImage: 'linear-gradient(rgba(92,108,63,0.35), rgba(92,108,63,0.55)), url(/hero2.jpeg)'
      }}
    >
      <div className="text-center max-w-[800px]">
        <h1 className="text-5xl md:text-6xl lg:text-[80px] font-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mb-4">
          COME TO LEARN, <br /> GO TO SERVE
        </h1>
        
        <Link 
          href='/about' 
          className="inline-flex items-center gap-2 mt-5 px-6 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium"
        >
          Explore More 
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;