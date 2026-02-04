'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, X, ChevronLeft, ChevronRight } from "lucide-react";

function Gallery() {
  const images = [
    { src: "/PhotoGallery/1.jpg", caption: "Kargil Vijay Divas" },
    { src: "/PhotoGallery/2.jpg", caption: "Dedicated Horse Riding Session" },
    { src: "/PhotoGallery/3.jpg", caption: "Our School Campus" },
    { src: "/PhotoGallery/4.jpg", caption: "Football Sessions" },
    { src: "/PhotoGallery/5.jpg", caption: "Assembly Ground" },
    { src: "/PhotoGallery/6.jpg", caption: "Parasailing" },
    { src: "/PhotoGallery/7.jpg", caption: "Chemistry Lab" },
    { src: "/PhotoGallery/8.jpg", caption: "Canteen" },
    { src: "/PhotoGallery/9.jpg", caption: "Cricket Practice" },
    { src: "/PhotoGallery/10.jpg", caption: "Republic Day 2025" },
    { src: "/PhotoGallery/11.jpg", caption: "Kabaddi Practice" },
    { src: "/PhotoGallery/12.jpg", caption: "Computer Labs" },
    { src: "/PhotoGallery/13.jpg", caption: "Republic Day 2025" },
    { src: "/PhotoGallery/14.jpg", caption: "Rope Climbing" },
    { src: "/PhotoGallery/15.jpg", caption: "Cultural Celebration" },
    { src: "/PhotoGallery/16.jpg", caption: "Republic Day 2024" },
    { src: "/PhotoGallery/17.jpg", caption: "School Premises" },
    { src: "/PhotoGallery/18.jpg", caption: "School Assemby" },
    // { src: "/PhotoGallery/19.jpg", caption: "School Event" },
    { src: "/PhotoGallery/21.jpg", caption: "Campus View" },
    { src: "/PhotoGallery/22.jpg", caption: "Students Activity" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gray-50 mt-0 sm:mt-0">
      {/* Hero Section */}
      <div 
        className="text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(92,108,63,0.35), rgba(92,108,63,0.55)), url(/hero2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
          <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Home className="text-gray-300 w-4 h-4" />
            <span className="text-gray-300">/</span>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-white">Photo Gallery</span>
          </div>
          <p className="text-xl max-w-3xl mx-auto mt-4">
            Explore our military school campus through this gallery.
          </p>
        </div>
      </div>

      {/* Masonry-style Grid */}
      <div className="my-12 mx-5">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer mb-4 break-inside-avoid"
              onClick={() => openModal(index)}
            >
              <img
                className="w-full rounded-lg"
                src={image.src}
                alt={image.caption}
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 text-center">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Slider */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 text-white hover:text-red-500 transition-colors duration-200 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-opacity-80 transition-all bg-black bg-opacity-50 rounded-full p-3"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-opacity-80 transition-all bg-black bg-opacity-50 rounded-full p-3"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <div className="flex flex-col items-center justify-center h-full">
              <img
                className="max-h-[75vh] w-auto object-contain rounded"
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].caption}
              />
              <p className="text-center text-white mt-4 text-lg font-medium px-4">
                {images[currentImageIndex].caption}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-white text-sm mt-2">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;