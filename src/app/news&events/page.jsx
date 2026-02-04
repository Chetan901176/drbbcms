'use client';

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

const newsEventsData = [

  {
    id: "ellora-trip-2024",
    title: "Trip to Ellora",
    date: "July 17, 2024",
    image: "/ElloraTrip/5.jpeg",
    details:
      "The Ellora Trip on July 17, 2024, was a mesmerizing journey into history and art.",
  },
  {
    id: "ashadi-ekadashi-2024",
    title: "Ashadi Ekadashi Celebration",
    date: "July 17, 2024",
    image: "/AshadiEkadashi/1.jpeg",
    details:
      "Ashadi Ekadashi Celebrated in Dr. B. B. Chavan Military School on 19th Feb, 2025 .",
  },
  {
    id: "ganesh-chaturthi-2024",
    title: "Ganesh Chaturthi Celebration",
    date: "Sept 7, 2024",
    image: "/GaneshChaturthi/2.jpeg",
    details:
      "Ganesh Chaturthi Celebrated in Dr. B. B. Chavan Military School on 19th Feb, 2025 .",
  },
  {
    id: "marathwada-mukti-sangram-2024",
    title: "Marathwada Mukti Sangram Din Celebration",
    date: "Sept 17, 2024",
    image: "/MarathwadaMuktiSangramDin/1.jpeg",
    details:
      "Marathwada Mukti Sangram Din Celebrated in Dr. B. B. Chavan Military School on 19th Feb, 2025 .",
  },
  {
    id: "diwali-mela-2024",
    title: "Diwali Mela Celebration",
    date: "Oct 29, 2024",
    image: "/DiwaliMela/3.jpeg",
    details:
      "Diwali Mela Celebrated in Dr. B. B. Chavan Military School on 19th Feb, 2025 .",
  },
  {
    id: "republic-day-2025",
    title: "Republic Day 2025",
    date: "Jan 26, 2025",
    image: "/Republic Day/5.jpeg",
    details:
      "Republic Day Celebrated in Dr. B. B. Chavan Military School on 26th Jan, 2025 .",
  },
  {
    id: "shiv-jayanti-2025",
    title: "Shiv Jayanti Celebration",
    date: "Feb 19, 2025",
    image: "/ShivJayanti/5.jpeg",
    details:
      "Shiv Jayanti Celebrated in Dr. B. B. Chavan Military School on 19th Feb, 2025 .",
  },

  {
    id: "republic-day-2026",
    title: "Republic Day 2026",
    date: "Jan 26, 2026",
    image: "/Republic Day 2026/8.jpg",
    details:
      "Republic Day Celebrated in Dr. B. B. Chavan Military School on 26th Jan, 2026 .",
  },
];

const NewsEvents = () => {
  // Get the first 4 events as "Recent Events"
  const reversedNewsEventsData = [...newsEventsData].reverse();
  const recentEvents = reversedNewsEventsData.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 mt-0 sm:mt-0">
      {/* Hero Section */}
      <div 
        className="text-white py-20 text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(92,108,63,0.35), rgba(92,108,63,0.55)), url(/hero2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & News</h1>
        <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
          <Home className="text-gray-300 w-4 h-4" />
          <span className="text-gray-300">/</span>
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-white">Events & News</span>
        </div>
        <p className="text-xl max-w-3xl mx-auto mt-4">
          Know more about our Past Events and Latest News.
        </p>
      </div>

      <div className="bg-white text-gray-900 p-4 md:p-6 mx-2 md:mx-10 mt-5">
        {/* Recent Events Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#294335] text-center mb-6">
            Recent Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recentEvents.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.date}</p>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {item.details}
                </p>
                <Link
                  href={`/news&events/${item.id}`}
                  className="mt-2 text-sm border border-green-700 bg-green-700 text-white py-2 sm:p-3 sm:w-1/3 w-1/2 p-2 text-center rounded-xl hover:underline block"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Events Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#294335] text-center mb-6">
            All Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {newsEventsData.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.date}</p>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {item.details}
                </p>
                <Link
                  href={`/news&events/${item.id}`}
                  className="mt-2 text-sm border border-green-700 bg-green-700 text-white py-2 sm:p-3 sm:w-1/3 w-1/2 p-2 text-center rounded-xl hover:underline block"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsEvents;