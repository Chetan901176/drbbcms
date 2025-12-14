'use client';

import React, { useState } from "react";
import { MessageSquare, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbymb6i1pTYLBD28V3d-qwVFPDLACrNBmeuF42nG83lQFNe2ggNvCSywhAlOjVj9Y_j6aw/exec';
    
    try {
      const formBody = new URLSearchParams({
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        Message: formData.message,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setResult("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setResult("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="my-20 mx-auto max-w-[90%] flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="w-full md:w-[48%] text-black">
          <h3 className="text-black font-medium text-2xl flex items-center mb-5">
            Send us a message 
            <MessageSquare className="w-9 h-9 ml-2.5" />
          </h3>
          <p className="max-w-[450px] leading-relaxed">
            For any questions or queries, contact us on
          </p>
          <ul className="list-none">
            <li className="flex items-center my-5">
              <Mail className="w-6 h-6 mr-2.5" />
              drbbcms@gmail.com
            </li>
            <li className="flex items-center my-5">
              <Phone className="w-6 h-6 mr-2.5" />
              +91-7770004697 , +91-8968212121
            </li>
            <li className="flex items-start my-5">
              <MapPin className="w-6 h-6 mr-2.5 flex-shrink-0 mt-1" />
              <span>
                Gat No. 235, Khandi Pimpalgaon, Tq. Khultabad, <br />
                Dist. Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. <br />
                (22 km away from Chhatrapati Sambhajinagar city)
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[48%] text-black">
          <div>
            <label className="block mb-1.5">Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full bg-[#EBECFE] p-4 border-0 outline-none mb-4 mt-1 rounded"
            />
            <label className="block mb-1.5">Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="block w-full bg-[#EBECFE] p-4 border-0 outline-none mb-4 mt-1 rounded"
            />
            <label className="block mb-1.5">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full bg-[#EBECFE] p-4 border-0 outline-none mb-4 mt-1 rounded"
            />
            <label className="block mb-1.5">Write your message here</label>
            <textarea
              name="message"
              rows="3"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full bg-[#EBECFE] p-4 border-0 outline-none mb-4 mt-1 resize-none rounded"
            ></textarea>
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit Now"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <span className="block my-5 text-sm">{result}</span>
        </div>
      </div>
      
      {/* Google Map Embed */}
      <div className="w-full md:w-[48%] mx-auto my-10 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50436.70753555064!2d75.28723837311304!3d20.019813531616737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb95b7eb55de35%3A0x64be63e1a36661f8!2sDR.%20B.%20B.%20CHAVAN%20MILITARY%20SCHOOL%20AND%20ACADEMY!5e0!3m2!1sen!2sin!4v1741656431194!5m2!1sen!2sin"
          className="w-full h-[400px] md:h-[450px] rounded-lg"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;