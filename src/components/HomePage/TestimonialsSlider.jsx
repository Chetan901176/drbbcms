'use client';

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    name: "Samruddhi Kishor Jadhav",
    grade: "Grade 8",
    text: "This academy inspires and encourages every child to progress. I am proud to be part of a school set in a natural, serene environment where excellent teaching and enriching activities bring joy."
  },
  {
    name: "Krishna More",
    grade: "Grade 7",
    text: "Dr. B.B. Chavan Military School offers exceptional education with modern facilities like horse riding, swimming, and paragliding. Nestled in the mountains, its inspiring motto motivates us to learn and serve."
  },
  {
    name: "Khushi Sachin Pawar",
    grade: "Grade 9",
    text: "Our school fosters learning, leadership, and teamwork, enabling every student to reach their full potential. I am proud to be part of an institution that offers daily opportunities to grow and create memories."
  },
  {
    name: "Bhakti Chavan",
    grade: "Grade 9",
    text: "I am grateful for my school's positive atmosphere that nurtures learning and growth. With dedicated teachers and a supportive environment, I develop both academically and in life skills."
  },
  {
    name: "Aarya Sonawane",
    grade: "Grade 9",
    text: "I am proud to be a student at Dr. B.B. Chavan Military School. With talented teachers, excellent facilities like swimming, yoga, and a well-stocked library, my learning experience is enriching and inspiring."
  },
  {
    name: "Hasita Fullare",
    grade: "Grade 5",
    text: "Located in the mountains, our school offers excellent academics and diverse sports facilities. With friendly teachers and modern amenities, I am proud to be a cadet here."
  },
  {
    name: "Pooja Tawade",
    grade: "Grade 7",
    text: "Dr. B.B. Chavan Military School provides outstanding facilities—ranging from pottery and horse riding to innovative digital teaching. I am grateful for an environment that connects us with nature."
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-5 relative px-5 shadow-md bg-gray-100 rounded-3xl">
      <div className="relative overflow-hidden">
        {/* Testimonials Container */}
        <div className="relative h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="p-10 bg-gray-100 text-black rounded-lg flex items-center justify-center h-full">
                <div className="text-center max-w-lg">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gray-300 flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-gray-600" />
                  </div>
                  <p className="text-sm md:text-lg italic">"{testimonial.text}"</p>
                  <h3 className="mt-4 text-sm md:text-base font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    {testimonial.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-[#294335]" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-[#294335]" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#294335] w-6' : 'bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;