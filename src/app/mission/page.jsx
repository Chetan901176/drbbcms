'use client';

import React from "react";
import { Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Mission values array
const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, trustworthiness, and moral courage in all that we do. Integrity is the foundation upon which our institution stands.",
    image: "/Mission/Integrity.jpg",
  },
  {
    title: "Discipline",
    description:
      "Through rigorous training and self-control, we instill discipline in our cadets, enabling them to excel in any situation they encounter.",
    image: "/Mission/Discipline.jpg",
  },
  {
    title: "Service",
    description:
      "Service to others and to our nation is at the core of our mission. We teach our cadets the importance of selflessness and sacrifice in the service of a greater cause.",
    image: "/Mission/Service.jpg",
  },
  {
    title: "Leadership",
    description:
      "We foster the development of strong, ethical leaders who lead by example and inspire others to reach their full potential.",
    image: "/Mission/Leadership.jpg",
  },
];

const Mission = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
            Our Mission
          </h1>
          {/* Breadcrumb */}
          <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Home className="text-gray-300 w-4 h-4" />
            <span className="text-gray-300">/</span>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-white">Mission</span>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto mt-4">
            Our mission is to mold tomorrow's leaders through discipline, honor,
            and excellence.
          </p>
        </div>
      </div>

      {/* Two Card Layout */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row gap-8 h-auto sm:h-[550px]">
          {/* Card 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Colored Banner with Text */}
            <div className="bg-yellow-200 p-6 hover:bg-yellow-300 transition-colors">
              <p className="text-black text-base md:text-lg leading-relaxed h-48">
                At Swarajya Military School And Academy, we are committed
                to molding the leaders of tomorrow through discipline, honor,
                and excellence. Our mission is to cultivate a culture of
                integrity, resilience, and service among our cadets, preparing
                them for the challenges they will face in both military and
                civilian life.
              </p>
            </div>
            {/* Image */}
            <img
              src="/Mission/img1.jpg"
              alt="Cadets in training"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Colored Banner with Text */}
            <div className="bg-yellow-200 p-6 hover:bg-yellow-300 transition-colors">
              <p className="text-black text-base md:text-lg leading-relaxed h-48">
                Our school's commitment to the physical development of cadets is
                evident in the provision of military training facilities under
                the supervision of defence retired officers. The structured
                programs offer rifle shooting training, rope ladder climbing,
                double beam, balance beam, and obstacle training that provides
                cadets with an opportunity to cultivate qualities like
                leadership, teamwork, a sense of responsibility, discipline, and
                a strong work ethic.
              </p>
            </div>
            {/* Image */}
            <img
              src="/Mission/img2.jpg"
              alt="Cadets practicing drills"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Mission Values Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                className="w-full h-48 object-cover"
                src={value.image}
                alt={`${value.title} cover`}
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <div className="bg-gray-100 text-green-700 p-12 mb-3 rounded-lg text-center max-w-7xl mx-auto">
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
  );
};

export default Mission;