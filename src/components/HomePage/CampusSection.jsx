'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const images = [
  { src: "/science-lab.jpg", caption: "Science Lab" },
  { src: "/horse-race.jpg", caption: "Horse Race" },
  { src: "/yoga.jpg", caption: "Yoga" },
  { src: "/dance.jpg", caption: "Dance" },
];

const CampusSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-20 mx-auto w-[90%] text-center">
      <div className="flex items-center justify-between mb-10 gap-5 flex-wrap">
        {images.map((image, index) => (
          <div
            className="relative w-full sm:w-[48%] lg:w-[23%] rounded-lg overflow-hidden cursor-pointer group"
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <Image 
              src={image.src} 
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div
              className={`absolute top-0 left-0 w-full h-full bg-[rgba(41,67,53,0.7)] text-white flex items-center justify-center text-center transition-opacity duration-400 ${
                activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <p className="m-0 text-xl font-bold">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/gallery/photo">
        <button className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300 font-medium">
          See More 
          <ArrowRight className="w-5 h-5" />
        </button>
      </Link>
    </div>
  );
};

export default CampusSection;