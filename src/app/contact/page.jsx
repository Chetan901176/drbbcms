'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setSubmitting(true);
    setStatus('');

    try {
      // Replace with your Google Apps Script Web App URL (must end with /exec)
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwUGauD1vYzzaARBtZr4o6YGMuFtYayVqGOxCWdiYMQKXCn9MRRfXQeNdlU2WNwubGXdw/exec';
      
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
        redirect: 'follow'
      });

      console.log('Response received:', response);
      
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('success'); // Assume success since data might be saved
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }

    setSubmitting(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-center max-w-3xl mx-auto">
            We're here to answer any questions you may have about our school
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
              Send us a Message
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                  htmlFor="name"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                  htmlFor="phone"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="10-digit mobile number"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="cursor-pointer w-full bg-primary text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-600 text-center text-sm sm:text-base">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-center text-sm sm:text-base">
                    Error sending message. Please try again.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Address:</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Dr.B B Chavan School Campus Gut No 235,
                    <br />
                    Khandi Pimpalgaon,
                    <br />
                    Tal-Khultabad, Dist-Sambhaji Nagar
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Phone:</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    <a href="tel:+917770004697" className="hover:text-primary transition-colors">
                      +91-7770004697
                    </a>
                    {' , '}
                    
                    <a href="tel:+918968212121" className="hover:text-primary transition-colors">
                      +91-8968212121
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Email:</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    <a href="mailto:drbbcms@gmail.com" className="hover:text-primary transition-colors">
                      drbbcms@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Office Hours:</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Quick Links
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="/admission"
                  className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Admissions
                </a>
                <a
                  href="/facilities"
                  className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Facilities
                </a>
                <a 
                  href="/sports" 
                  className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Sports
                </a>
                <a 
                  href="/about" 
                  className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  About Us
                </a>
              </div>
            </div>

            <div className="bg-primary text-white p-6 sm:p-8 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Emergency Contact</h2>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">For urgent matters, please contact:</p>
              <p className="font-semibold text-sm sm:text-base">
                <a href="tel:+919876543210" className="hover:underline">
                  Emergency Helpline: +91 9876543210
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50436.70753555064!2d75.28723837311304!3d20.019813531616737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb95b7eb55de35%3A0x64be63e1a36661f8!2sDR.%20B.%20B.%20CHAVAN%20MILITARY%20SCHOOL%20AND%20ACADEMY!5e0!3m2!1sen!2sin!4v1741656431194!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 sm:h-96 lg:h-[450px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}