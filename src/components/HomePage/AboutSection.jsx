'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className='my-24 px-5 flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12' id='about'>
      <motion.div
        className="w-full md:w-[40%] relative order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image 
          src="/students.jpeg" 
          alt="About our school" 
          width={600}
          height={420}
          className='w-full rounded-lg object-cover h-[420px]'
        />
      </motion.div>
      <motion.div
        className="w-full md:w-[56%] order-1 md:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className='font-semibold text-base text-green-700 uppercase'>ABOUT OUR SCHOOL</h3>
        <h2 className='text-3xl md:text-4xl text-green-800 my-2.5 max-w-md font-bold'>Nurturing tomorrow's leaders today</h2>
        <p className='text-black mb-4'>
          At Dr.B B Chavan Military School And Academy, we are committed to molding the leaders of tomorrow through discipline, honor, and excellence. Our mission is to cultivate a culture of integrity, resilience, and service among our cadets, preparing them for the challenges they will face in both military and civilian life.
        </p>
        <p className='text-black mb-4'>
          We provide a challenging academic curriculum that prepares our cadets for success in higher education and beyond. Our dedicated faculty members are committed to academic excellence and provide individualized support to ensure that each cadet reaches their academic potential.
        </p>
        <p className='text-black mb-4'>
          Character development is at the heart of our mission. Through mentorship, community service, and experiential learning opportunities, we nurture the personal growth of our cadets, fostering qualities such as resilience, empathy, and perseverance.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSection;