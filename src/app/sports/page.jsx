'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

const Sports = () => {
  const sportsData = [
    {
      img: "/sports/football.jpg",
      title: "Football",
      description: "Football is a popular team sport that promotes teamwork, agility, and physical fitness. It is a great way for cadets to build camaraderie and sportsmanship."
    },
    {
      img: "/sports/basketball.jpeg",
      title: "Basketball",
      description: "Basketball is a fast-paced sport that improves coordination, endurance, and strategic thinking. Cadets learn valuable skills such as communication and decision-making."
    },
    {
      img: "/sports/volleyboll.jpg",
      title: "Volleyball",
      description: "Volleyball is a dynamic sport that enhances agility, reflexes, and teamwork. Cadets develop communication skills and learn to work together towards a common goal."
    },
    {
      img: "/sports/boxing1.jpg",
      title: "Boxing",
      description: "Boxing is a combat sport that requires discipline, strength, and agility. It helps cadets develop self-defense skills, confidence, and mental toughness."
    },
    {
      img: "/sports/wrestling.jpeg",
      title: "Wrestling",
      description: "Wrestling is a physically demanding sport that teaches cadets grappling techniques, endurance, and mental resilience. It fosters discipline and sportsmanship."
    },
    {
      img: "/sports/swimming.jpg",
      title: "Swimming",
      description: "A facility provided by us that sets us apart is SWIMMING. We promise to provide a well-maintained pool along with all the swimming facilities and coaches to engage our cadets in regular muscular activities along with strengthening their lungs and heart with improved flexibility. Join us to stay active and make a splash!"
    },
    {
      img: "/sports/Taekwondo.jpeg",
      title: "Taekwondo",
      description: "Taekwondo is a martial art that emphasizes self-discipline, respect, and physical fitness. Cadets learn kicking and striking techniques while developing mental focus and confidence."
    },
    {
      img: "/sports/Athletics (Track and Field).jpeg",
      title: "Athletics (Track and Field)",
      description: "Athletics includes various track and field events such as running, jumping, and throwing. Cadets participate in competitions to test their speed, strength, and agility."
    },
    {
      img: "/sports/shoot1.jpg",
      title: "Rifle Shooting",
      description: "Where precision meets focus, our cadets learn the art of accuracy. Every shot is a mark of discipline, and every practice session shapes their confidence. Building skills of patience and concentration, they aim for perfection in every target."
    }
  ];

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
            Sports Facilities
          </h1>
          {/* Breadcrumb */}
          <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Home className="text-gray-300 w-4 h-4" />
            <span className="text-gray-300">/</span>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-white">Sports</span>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto mt-4">
            At our military school, we emphasize physical fitness, discipline,
            and teamwork through an array of outdoor and indoor sports
            facilities. These activities are designed to build character,
            resilience, and leadership among students.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sportsData.map((sport, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={sport.img}
                alt={sport.title}
                width={400}
                height={300}
                className="mb-4 rounded-lg shadow-md w-full h-64 object-cover"
              />
              <h2 className="text-xl font-bold text-green-700 mb-4">
                {sport.title}
              </h2>
              <p className="text-gray-600">
                {sport.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 text-green-700 p-12 mb-3 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Legacy</h3>
          <p className="text-lg mb-8">
            Be part of an institution that shapes future leaders
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
};

export default Sports;