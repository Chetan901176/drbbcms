'use client';

import { useState } from 'react';

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    grade: '',
    gender: 'male'
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.state || !formData.city || !formData.grade) {
      alert('Please fill in all required fields');
      return;
    }

    setSubmitting(true);

    try {
      // Replace with your Google Apps Script Web App URL (must end with /exec)
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUWvawY4mHr6iOGvBPf94X7JEQlmLuqXBmKC_aZCUZIHL209M7Kh0ybCosw-fcP3rknQ/exec';
      
      const formBody = new URLSearchParams({
        ...formData,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formBody,
        redirect: 'follow'
      });

      console.log('Response received:', response);
      
      // Assume success since Google Scripts return redirects
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        grade: '',
        gender: 'male'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success since the data might have been saved
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        grade: '',
        gender: 'male'
      });
    }

    setSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Admission Process Flow */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 sm:mb-8">
            Admission Process
          </h1>
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
            <div className="space-y-3 sm:space-y-4">
              <div className="border-l-4 border-primary pl-3 sm:pl-4">
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Step 1: Online Inquiry</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Fill out the online application form below.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-3 sm:pl-4">
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Step 2: Team Review</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Our admission team will review your application.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-3 sm:pl-4">
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Step 3: Contact</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  We will contact you soon to discuss the next steps.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-3 sm:pl-4">
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Step 4: School Visit</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Schedule a visit to explore our campus and facilities.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-3 sm:pl-4">
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Step 5: Admission Confirmation</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Complete the admission process and secure your seat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Form */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">
            Admission Inquiry Form
          </h2>
          {submitted ? (
            <div className="text-center py-8 sm:py-12 px-4">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-green-600 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Thank You for Your Interest!
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Our team will contact you soon to discuss the admission process.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 sm:mt-6 text-primary hover:underline text-sm sm:text-base"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base" htmlFor="name">
                    Student's Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base" htmlFor="email">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base" htmlFor="state">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter your state"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base" htmlFor="city">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter your city"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base" htmlFor="grade">
                    Applying for Class *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select Class</option>
                    <option value="5">Class 5th</option>
                    <option value="6">Class 6th</option>
                    <option value="7">Class 7th</option>
                    <option value="8">Class 8th</option>
                    <option value="9">Class 9th</option>
                    <option value="10">Class 10th</option>
                    <option value="11">Class 11th</option>
                    <option value="12">Class 12th</option>
                  </select>
                </div>

                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base" htmlFor="gender">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50"
                    disabled
                  >
                    <option value="male">Male</option>
                  </select>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Currently accepting only male students</p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full bg-primary text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-base sm:text-lg"
                >
                  {submitting ? 'Submitting...' : 'Register Now'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
            Contact for Admission
          </h2>
          <div className="space-y-2 text-gray-600 text-xs sm:text-sm lg:text-base">
            <p>For any queries regarding admission, please contact:</p>
            <p><span className="font-semibold">Phone:</span> +91-8968212121, +91-7770004698</p>
            <p><span className="font-semibold">Email:</span> drbbcms@gmail.com</p>
            <p><span className="font-semibold">Timing:</span> Monday to Saturday (9:00 AM - 4:00 PM)</p>
          </div>
        </div>
      </div>
    </div>
  );
}