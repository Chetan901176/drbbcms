"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-gray-100 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            {/* Left Side - Social Media Icons */}
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-4 mb-8">
                <a
                  href="https://www.facebook.com/share/14xpPZ2fDf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none hover:shadow-xl transition-shadow"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/drbbchavanmilitaryschool?utm_source=qr&igsh=Y3RtbzcycmxyYXlv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none hover:shadow-xl transition-shadow"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/7770004697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none hover:shadow-xl transition-shadow"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=drbbcms@gmail.com&su=Contact%20Regarding%20School%20Inquiry"
                  className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none hover:shadow-xl transition-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@drbbcmsa?si=4c2LLNJ4XZAdu03q"
                  className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none hover:shadow-xl transition-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Links */}
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4">
                  <span className="block uppercase text-black text-sm font-semibold mb-3">
                    Quick Links
                  </span>
                  <ul className="list-none">
                    <li>
                      <Link
                        className="text-gray-600 hover:text-black font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-600 hover:text-black font-semibold block pb-2 text-sm"
                        href="/facilities"
                      >
                        What we Provide
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-600 hover:text-black font-semibold block pb-2 text-sm"
                        href="/news&events"
                      >
                        News & Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-600 hover:text-black font-semibold block pb-2 text-sm"
                        href="/gallery/photo"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-600 hover:text-black font-semibold block pb-2 text-sm"
                        href="/admission"
                      >
                        Admission
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <span className="block uppercase text-black text-sm font-semibold mb-3">
                    Other Resources
                  </span>
                  <ul className="list-none">
                    <li>
                      <Link
                        className="text-gray-600 hover:text-black font-semibold block pb-2 text-sm"
                        href="/terms-and-conditions"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-600 hover:text-black font-semibold block pb-2 text-sm"
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-600 hover:text-black font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />
          
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500 font-semibold py-1">
                Copyright © 2024{" "}
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  SMSA
                </a>{" "}
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-500 hover:text-gray-800"
                >
                  All rights Reserved.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;