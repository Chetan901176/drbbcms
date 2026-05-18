'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const slides = [
  //   {
  //     image: '/hero2.jpeg',
  //     showContent: true
  //   },
  //   {
  //     image: '/second_image.jpeg',
  //     showContent: false
  //   },
  // ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full min-h-[77vh] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-[77vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(92,108,63,0.35), rgba(92,108,63,0.55)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Content - Only on first slide */}
            {slide.showContent && index === currentSlide && (
              <div className="absolute inset-0 flex items-center justify-center px-10">
                <div 
                  className="text-center max-w-[800px] text-white"
                  style={{
                    animation: 'fadeInUp 1s ease-out'
                  }}
                >
                  <h1 
                    className="text-5xl md:text-6xl lg:text-[80px] font-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mb-4"
                    style={{
                      animation: 'fadeInUp 1s ease-out 0.2s both'
                    }}
                  >
                    COME TO LEARN, <br /> GO TO SERVE
                  </h1>
                  
                  <a 
                    href='/about'
                    className="inline-flex items-center gap-2 mt-5 px-6 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium"
                    style={{
                      animation: 'fadeInUp 1s ease-out 0.4s both'
                    }}
                  >
                    Explore More 
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;