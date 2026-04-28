import React from "react";
import Image from "next/image";

const DirectorsMessageSection = () => {
  return (
    <div className="bg-gray-100 py-6 sm:py-12 px-1 sm:px-4 lg:px-20">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-4 sm:p-6 lg:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-l-4 border-green-600 pl-4 mb-4 sm:mb-6">
          Director's Message
        </h2>

        {/* First Section: Image + Some Text */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Director's Photo */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <Image
              className="w-full h-auto rounded-xl shadow-md"
              src="/director.jpeg"
              alt="Dr. Adinath Wakle, Director"
              width={400}
              height={500}
            />
          </div>

          {/* First Part of Text */}
          <div className="lg:w-2/3 text-sm sm:text-lg sm:pt-4 text-gray-700 leading-relaxed">
            <p>Dear Parents and Students,</p>
            <p className="mt-2 sm:mt-3">
              I extend a warm welcome to you all at Swarajya Military School And Academy. Nestled amidst rolling hills and majestic mountains, our serene campus provides an ideal environment for learning and growth.
            </p>
            <p className="mt-2 sm:mt-3">
              As a premier institution, we strive for excellence in education and character development. Our unique location inspires a sense of wonder, discipline, and national pride. We aim to shape leaders who embody principled leadership, excellence, and holistic health.
            </p>
          </div>
        </div>

        {/* Second Section: Continuing Text Below */}
        <div className="text-sm sm:text-lg text-gray-700 leading-relaxed mt-2 sm:mt-3">
          <p>
            Our mission is to foster a community of leaders, imbued with the values of discipline, integrity, and patriotism. We empower our cadets to lead with loyalty and national pride in the armed forces and paramilitary services.
          </p>
          <p className="mt-2 sm:mt-3">
            At Swarajya Military School And Academy, we provide a well-rounded education that combines academic excellence with character development and physical fitness. Our experienced faculty, state-of-the-art facilities, and rigorous training programs equip our cadets to face the challenges of an ever-evolving world.
          </p>
          <p className="mt-2 sm:mt-3">
            We prepare our cadets for various competitive exams, including SPI, NDA, CDS, ACEE, JEE, and NEET. As we empower our cadets' potential, we remain committed to our mission and vision.
          </p>
          <p className="mt-2 sm:mt-3">
            I invite you to join our community of scholars, athletes, and leaders. Together, let us empower minds, enrich lives, and shape the future.
          </p>

          {/* Director's Name & Signature */}
          <div className="mt-3 sm:mt-4">
            <p className="font-semibold text-gray-900">Sincerely,</p>
            <p className="font-semibold text-green-700 mt-1">
              Dr. Adinath Wakle
            </p>
            <p className="text-gray-600">
              Director, Swarajya Military School And Academy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessageSection;