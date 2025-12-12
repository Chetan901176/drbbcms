'use client';

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

const facilities = [
  {
    image: "/facilities/classroom.jpg",
    title: "Smart Classrooms",
    description: "Interactive digital boards and modern teaching aids for enhanced learning experience."
  },
  {
    image: "/facilities/science-lab2.jpg",
    title: "Science Laboratory",
    description: "A space for exploration and discovery, the science lab ignites young minds."
  },
  {
    image: "/facilities/computer-lab.jpg",
    title: "Computer Lab",
    description: "Modern computer lab with latest hardware and software for digital literacy."
  },
  {
    image: "/facilities/Mess.jpeg",
    title: "Cadets' Canteen",
    description: "We ensure nutritional meals to our cadets thrice a day along with evening snacks and milk from our reputed 'JAI BHADRA DAIRY FARM'."
  },
  {
    image: "/facilities/hostel.jpg",
    title: "Hostel Facility",
    description: "Hostel rooms offer a stress-free, well-supervised environment with highly ventilated and limitedly accommodated rooms."
  },
  {
    image: "/facilities/pottery.jpg",
    title: "Pottery",
    description: "Crafting creativity with their own hands, cadets shape raw clay into beautiful forms."
  },
  {
    image: "/facilities/dance.jpg",
    title: "Dance Department",
    description: "Expressing stories through movement, cadets combine discipline with creativity."
  },
  {
    image: "/facilities/music.jpg",
    title: "Music Department",
    description: "Harmonizing tradition with talent, our music department nurtures creativity."
  },
  {
    image: "/facilities/transport.jpg",
    title: "Transportation",
    description: "Our school bridges the gap between home and school with reliable transportation."
  },
  {
    image: "/facilities/training.jpg",
    title: "Military Training",
    description: "Our military training facilities, supervised by defence retired officers, emphasize physical development and discipline."
  },
  {
    image: "/facilities/library.jpg",
    title: "Library Facility",
    description: "A quiet haven for study and research, our library offers a vast collection of books and digital resources to enrich academic life."
  }
];

function Facilities() {
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
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Facilities
          </h1>
          {/* Breadcrumb */}
          <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Home className="text-gray-300 w-4 h-4" />
            <span className="text-gray-300">/</span>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-white">Facilities</span>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto mt-4">
            With best Education our Schools also provides best kind of
            Facilities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="mb-3 rounded-lg shadow-md h-[200px] w-full object-cover"
              />
              <h2 className="text-xl font-bold text-green-700 mb-3">
                {facility.title}
              </h2>
              <p className="text-black">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Section: Facility Highlights */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Why Choose Our Facilities?
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              Modern infrastructure designed for a seamless learning experience.
            </li>
            <li>Focus on both academic and extracurricular development.</li>
            <li>Commitment to safety, hygiene, and student well-being.</li>
            <li>Accessible and inclusive facilities for all students.</li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <div className="bg-gray-100 text-green-700 p-12 mb-3 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Legacy</h3>
          <p className="text-lg mb-8">
            Be part of an institution that shapes future leaders.
          </p>
          <Link
            href="/admission"
            className="bg-green-700 text-white hover:bg-green-800 px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Facilities;