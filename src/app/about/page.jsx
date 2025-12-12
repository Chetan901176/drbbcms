'use client';

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const About = () => {
  const milestones = [
    { year: "1995", event: "Foundation of the School" },
    { year: "2000", event: "First Batch of Military Aspirants" },
    {
      year: "2005",
      event: "Introduction of Advanced Military Training Program",
    },
    { year: "2010", event: "Expansion of Campus Infrastructure" },
    { year: "2015", event: "Achievement of Academic Excellence Award" },
    { year: "2020", event: "Introduction of Modern Technology Integration" },
  ];

  const stats = [
    { number: 250, label: "Students", suffix: "+" },
    { number: 17, label: "Expert Faculty", suffix: "+" },
    { number: 1, label: "Years Of Excellence", suffix: "" },
    { number: 25, label: "Land Area", suffix: "Acres" },
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
            About Our Institution
          </h1>
          {/* Breadcrumb */}
          <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
            <Home className="text-gray-300 w-4 h-4" />
            <span className="text-gray-300">/</span>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-white">About Us</span>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto mt-4">
            Shaping the future of India through excellence in education and
            military training
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Legacy</h2>
          <p className="text-black text-lg mb-6">
            DR.B.B.CHAVAN MILITARY SCHOOL AND ACADEMY, is a prestigious
            institution that provides comprehensive training and education to
            prepare individuals for a career in the military. Our dedicated
            faculty and state-of-the-art facilities ensure that students receive
            the highest quality education and training.
          </p>
          <p className="text-black text-lg mb-6">
            We offer a wide range of programs tailored to meet the needs of
            aspiring military professionals. From basic training to specialized
            courses, our programs cover various aspects of military training,
            leadership development, and strategic planning.
          </p>
          <p className="text-black text-lg">
            At Military School, we believe in fostering discipline, integrity,
            and leadership skills in our students. Our rigorous training
            programs, experienced instructors, and emphasis on character
            development set us apart from other institutions.
          </p>
        </motion.div>

        {/* Mission and Other Sections */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Our Purpose and Values
          </h2>

          {/* Mission */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Mission
            </h3>
            <p className="text-black text-lg">
              At Dr.B B Chavan Military School And Academy, we are committed to
              molding the leaders of tomorrow through discipline, honor, and
              excellence. Our mission is to cultivate a culture of integrity,
              resilience, and service among our cadets, preparing them for the
              challenges they will face in both military and civilian life.
            </p>
          </div>

          {/* Our Values */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Our Values
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
              <li>
                <span className="font-bold text-green-700">Integrity:</span> We
                uphold the highest standards of honesty, trustworthiness, and
                moral courage in all that we do. Integrity is the foundation
                upon which our institution stands.
              </li>
              <li>
                <span className="font-bold text-green-700">Discipline:</span>{" "}
                Through rigorous training and self-control, we instill
                discipline in our cadets, enabling them to excel in any
                situation they encounter.
              </li>
              <li>
                <span className="font-bold text-green-700">Leadership:</span> We
                foster the development of strong, ethical leaders who lead by
                example and inspire others to reach their full potential.
              </li>
              <li>
                <span className="font-bold text-green-700">Service:</span> Service
                to others and to our nation is at the core of our mission. We
                teach our cadets the importance of selflessness and sacrifice in
                the service of a greater cause.
              </li>
            </ul>
          </div>

          {/* Competitive Exams */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Competitive Exams
            </h3>
            <p className="text-gray-600 text-lg">
              Besides regular academics, we prepare our cadets for various
              competitive exams like SPI, NDA, NA, AISSEE, RIMC, RMS, MTSE,
              NTSE, OLYMPIAD, HOMI BHABA, Elementary and intermediate drawing
              exams, Scholarship exams, etc. Our educators are well qualified to
              train cadets for such exams. Besides this, we invite guest
              lecturers to train our cadets at weekends.
            </p>
          </div>

          {/* Academic Excellence */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Academic Excellence
            </h3>
            <p className="text-gray-600 text-lg">
              Delivering a robust and comprehensive curriculum designed to
              promote critical thinking, creativity, and lifelong learning. At
              Dr.B B Chavan Military School And Academy, we provide a
              challenging academic curriculum that prepares our cadets for
              success in higher education and beyond. Our dedicated faculty
              members are committed to academic excellence and provide
              individualized support to ensure that each cadet reaches their
              academic potential.
            </p>
          </div>

          {/* Military Training */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Military Training
            </h3>
            <p className="text-gray-600 text-lg">
              Our school's commitment to the physical development of cadets is
              evident in the provision of military training facilities under the
              supervision of defence retired officers. The structured programs
              offer rifle shooting training, rope ladder climbing, double beam,
              balance beam, and obstacle training that provides cadets with an
              opportunity to cultivate qualities like leadership, teamwork, a
              sense of responsibility, discipline, and a strong work ethic.
            </p>
          </div>

          {/* Character Development */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Character Development
            </h3>
            <p className="text-gray-600 text-lg">
              Character development is at the heart of our mission. Through
              mentorship, community service, and experiential learning
              opportunities, we nurture the personal growth of our cadets,
              fostering qualities such as resilience, empathy, and perseverance.
            </p>
          </div>

          {/* Athletics and Extracurricular Activities */}
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Athletics and Extracurricular Activities
            </h3>
            <p className="text-gray-600 text-lg">
              We believe in the importance of a well-rounded education. Our
              cadets have access to a wide range of athletic programs and
              extracurricular activities, allowing them to pursue their passions
              and develop essential life skills outside of the classroom.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Our Philosophy
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                Excellence in every endeavor
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                Character development through discipline
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                Leadership through example
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                Service to nation
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Our Commitment
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                Quality education for all students
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                Holistic development approach
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                Safe and nurturing environment
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-700 rounded-full mr-3"></span>
                Innovation in teaching methods
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 text-green-700 p-12 rounded-lg text-center">
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

export default About;