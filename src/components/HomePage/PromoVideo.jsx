'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PromoVideo = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 my-10">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-green-800">प्रवेश नोंदणी सुरू</h2>
          
          <p className="text-gray-700">
            खुलताबाद तालुक्यातील एकमेव सैनिक प्रशिक्षण देणारी व आर्मी, नेव्ही, एअरफोर्स आणि पॅरा मिलिटरी सर्व्हिसेस मध्ये विविध पदावर अधिकारी पदविणारी एकमेव शैक्षणिक संस्था. प्रवेश नोंदणी सुरू १ ते १२ (science ) निवासी व डे केअर शाळा... टायगर व्हॅली मिलिटरी स्कूल कॅम्पस खोडी पिंपळगाव.
          </p>
          
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="text-green-600 mr-2 w-5 h-5" />
              <span>Residential Facility</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-600 mr-2 w-5 h-5" />
              <span>Enhancing Performance and Wellness.</span>
            </li>
            <li className="flex items-center">
              <Check className="text-green-600 mr-2 w-5 h-5" />
              <span>Athletics and Extracurricular Activities</span>
            </li>
          </ul>
          
          <Link href="/about">
            <button className="bg-green-700 text-white px-6 py-2 uppercase font-semibold rounded hover:bg-green-800 transition">
              See More
            </button>
          </Link>
        </motion.div>
        
        {/* Right Content - Embedded Video */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <video 
              className="w-full h-auto object-cover"
              controls
              poster="/campus.jpeg"
            >
              <source src="/Video/PromoVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PromoVideo;