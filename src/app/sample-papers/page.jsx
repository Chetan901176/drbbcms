import React from "react";
import { Download, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sample Papers Data with Preview Images
const samplePapers = [
  {
    id: 1,
    title: "5TH STANDARD ENTRANCE EXAMINATION",
    description: "Sample paper for 2025",
    previewImage: "/SamplePapers/5th STD/preview.png",
    fileLink: "/sample-papers/Dr.BBCMS-V.pdf",
  },
  {
    id: 2,
    title: "6TH STANDARD ENTRANCE EXAMINATION",
    description: "Sample paper for 2025",
    previewImage: "/SamplePapers/6th STD/preview.png",
    fileLink: "/sample-papers/Dr.BBCMS-VI.pdf",
  },
  {
    id: 3,
    title: "7TH STANDARD ENTRANCE EXAMINATION",
    description: "Sample paper for 2025",
    previewImage: "/SamplePapers/7th STD/preview.png",
    fileLink: "/sample-papers/Dr.BBCMS-VII.pdf",
  },
  {
    id: 4,
    title: "8TH STANDARD ENTRANCE EXAMINATION",
    description: "Sample paper for 2025",
    previewImage: "/SamplePapers/8th STD/preview.png",
    fileLink: "/sample-papers/Dr.BBCMS-VIII-ENT-SQP-FINAL.pdf",
  },
  {
    id: 5,
    title: "9TH STANDARD ENTRANCE EXAMINATION",
    description: "Sample paper for 2025",
    previewImage: "/SamplePapers/9th STD/preview.png",
    fileLink: "/sample-papers/Dr.BBCMS-IX-ENT-SQP.pdf",
  },
  {
    id: 6,
    title: "10TH STANDARD ENTRANCE EXAMINATION",
    description: "Sample paper for 2025",
    previewImage: "/SamplePapers/10th STD/preview.png",
    fileLink: "/sample-papers/Dr.BBCMS-X-ENT-SQP.pdf",
  },
  
  
  {
    id: 7,
    title: "11th STANDARD ENTRANCE EXAMINATION",
    description: "Sample paper for 2025",
    previewImage: "/SamplePapers/11th STD/preview.png",
    fileLink: "/sample-papers/Dr.BBCMS-XI-ENT EXAM.pdf",
  },
];

const SamplePapers = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sample Papers</h1>
        <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
          <Home className="text-gray-300 w-4 h-4" />
          <span className="text-gray-300">/</span>
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-white">Sample Papers</span>
        </div>
        <p className="text-xl max-w-3xl mx-auto mt-4">
          Download sample papers to prepare for the entrance exams.
        </p>
      </div>

      <div className="bg-white text-gray-900 p-4 md:p-6 mx-2 md:mx-10 mt-5">
        <section className="mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#294335] text-center mb-6">
            Sample Papers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {samplePapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={paper.previewImage}
                  alt={paper.title}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{paper.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {paper.description}
                  </p>
                  <a
                    href={paper.fileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-white bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SamplePapers;