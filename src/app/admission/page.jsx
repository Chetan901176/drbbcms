"use client";

import { useState } from "react";
import Image from "next/image";

export default function AdmissionPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsappPhone: "",
    state: "",
    district: "",
    grade: "",
    gender: "male",
    utrNumber: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Indian states and union territories
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ];

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.whatsappPhone ||
      !formData.state ||
      !formData.district ||
      !formData.grade ||
      !formData.utrNumber
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setSubmitting(true);

    try {
      // Replace with your Google Apps Script Web App URL (must end with /exec)
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbz8oHwNypP6LddhWEvg5wiMDe5IcXTtIMG1jCfnDD7QS379nYXG7wtbxEWfCLs5twH9/exec";

      const formBody = new URLSearchParams({
        Student_Name: formData.name,
        Phone: formData.phone,
        WhatsApp_No: formData.whatsappPhone,
        Email: formData.email,
        State: formData.state,
        District: formData.district,
        Applying_For_Class: formData.grade,
        Gender: formData.gender,
        UTR_Transaction_ID: formData.utrNumber,
        timestamp: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formBody,
        redirect: "follow",
      });

      console.log("Response received:", response);

      // Assume success since Google Scripts return redirects
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        whatsappPhone: "",
        state: "",
        district: "",
        grade: "",
        gender: "male",
        utrNumber: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Still show success since the data might have been saved
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        whatsappPhone: "",
        state: "",
        district: "",
        grade: "",
        gender: "male",
        utrNumber: "",
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

  const validateStep1 = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.whatsappPhone &&
      formData.state &&
      formData.district &&
      formData.grade
    );
  };

  const nextStep = () => {
    if (currentStep === 1 && !validateStep1()) {
      alert("Please fill in all required fields before proceeding");
      return;
    }
    if (currentStep === 3 && !formData.utrNumber) {
      alert("Please enter the UTR/Transaction ID");
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Admission Form */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">
            Admission Registration Form
          </h2>
          {submitted ? (
            <div className="text-center py-8 sm:py-12 px-4">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-primary text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Thank You for Your Interest!
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Our team will contact you soon to discuss the admission process.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                className="mt-4 sm:mt-6 text-primary hover:underline text-sm sm:text-base"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <>
              {/* Progress Steps */}
              <div className="mb-6 sm:mb-8 overflow-x-auto">
                <div className="flex items-center justify-center min-w-max px-4">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                        currentStep >= 1
                          ? "bg-primary text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      1
                    </div>
                    <div className="text-xs sm:text-sm ml-2 mr-2 sm:mr-4 whitespace-nowrap">Student Details</div>
                  </div>
                  <div
                    className={`h-1 w-8 sm:w-12 md:w-20 ${
                      currentStep >= 2 ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ml-2 sm:ml-4 ${
                        currentStep >= 2
                          ? "bg-primary text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      2
                    </div>
                    <div className="text-xs sm:text-sm ml-2 mr-2 sm:mr-4 whitespace-nowrap">Payment</div>
                  </div>
                  <div
                    className={`h-1 w-8 sm:w-12 md:w-20 ${
                      currentStep >= 3 ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ml-2 sm:ml-4 ${
                        currentStep >= 3
                          ? "bg-primary text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      3
                    </div>
                    <div className="text-xs sm:text-sm ml-2 whitespace-nowrap">Confirmation</div>
                  </div>
                </div>
              </div>

              {/* Step 1: Student Details */}
              {currentStep === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="md:col-span-2">
                      <label
                        className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                        htmlFor="name"
                      >
                        Student's Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Enter student's full name"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label
                        className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                        htmlFor="phone"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                        placeholder="10-digit mobile number"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label
                        className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                        htmlFor="whatsappPhone"
                      >
                        Alternate Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="whatsappPhone"
                        name="whatsappPhone"
                        value={formData.whatsappPhone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                        placeholder="10-digit alternate number"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                        htmlFor="email"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label
                        className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                        htmlFor="state"
                      >
                        State *
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select State</option>
                        {indianStates.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-1">
                      <label
                        className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                        htmlFor="district"
                      >
                        District *
                      </label>
                      <input
                        type="text"
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your district"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label
                        className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                        htmlFor="grade"
                      >
                        Applying for Class *
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select Class</option>
                        <option value="4">Class 4th (CBSE/State Board)</option>
                        <option value="5">Class 5th (CBSE/State Board)</option>
                        <option value="6">Class 6th (CBSE/State Board)</option>
                        <option value="7">Class 7th (CBSE/State Board)</option>
                        <option value="8">Class 8th (CBSE/State Board)</option>
                        <option value="9">Class 9th (State Board)</option>
                        <option value="10">Class 10th (State Board)</option>
                        <option value="11">Class 11th (State Board)</option>
                        <option value="12">Class 12th (State Board)</option>
                      </select>
                    </div>

                    <div className="md:col-span-1">
                      <label
                        className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                        htmlFor="gender"
                      >
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all bg-gray-50"
                        disabled
                      >
                        <option value="male">Male</option>
                      </select>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Currently accepting only male students
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6 sm:mt-8">
                    <button
                      onClick={nextStep}
                      className="w-full sm:w-auto cursor-pointer bg-primary text-white py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:opacity-90 transition-all font-semibold text-base sm:text-lg"
                    >
                      Next: Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment QR Code */}
              {currentStep === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-primary/5 p-4 sm:p-6 rounded-lg border-2 border-primary/20">
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 text-center">
                      Payment QR Code
                    </h3>
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                        <Image
                          src="/QR.jpeg"
                          alt="Payment QR Code"
                          width={200}
                          height={200}
                          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
                          priority
                        />
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4">
                      <p className="text-xs sm:text-sm md:text-base text-yellow-800 font-medium text-center">
                        <span className="block sm:inline">
                          ⚠️ Pay ₹250/- on the QR provided as the confirmation of
                        </span>
                        <span className="block sm:inline"> Registration/Entrance Exam</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 sm:mt-8">
                    <button
                      onClick={prevStep}
                      className="w-full sm:w-auto cursor-pointer bg-gray-300 text-gray-700 py-3 sm:py-4 px-6 sm:px-10 rounded-lg hover:bg-gray-400 transition-colors font-semibold text-base sm:text-lg order-2 sm:order-1"
                    >
                      Previous
                    </button>
                    <button
                      onClick={nextStep}
                      className="w-full sm:w-auto cursor-pointer bg-primary text-white py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:opacity-90 transition-all font-semibold text-base sm:text-lg order-1 sm:order-2"
                    >
                      Next: Enter UTR
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: UTR Submission */}
              {currentStep === 3 && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 mb-2 font-medium text-sm sm:text-base"
                      htmlFor="utrNumber"
                    >
                      UTR/Transaction ID *
                    </label>
                    <input
                      type="text"
                      id="utrNumber"
                      name="utrNumber"
                      value={formData.utrNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Enter your UTR/Transaction ID"
                    />
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Enter the 12-digit UTR number or Transaction ID from your payment receipt
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 sm:mt-8">
                    <button
                      onClick={prevStep}
                      className="w-full sm:w-auto cursor-pointer bg-gray-300 text-gray-700 py-3 sm:py-4 px-6 sm:px-10 rounded-lg hover:bg-gray-400 transition-colors font-semibold text-base sm:text-lg order-2 sm:order-1"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="w-full sm:w-auto cursor-pointer bg-primary text-white py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-base sm:text-lg order-1 sm:order-2"
                    >
                      {submitting ? "Submitting..." : "Register Now"}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Contact Information */}
        <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
            Contact for Admission
          </h2>
          <div className="space-y-2 text-gray-600 text-xs sm:text-sm lg:text-base">
            <p>For any queries regarding admission, please contact:</p>
            <p>
              <span className="font-semibold">Phone:</span> +91-7770004697, +91-8968212121
            </p>
            <p>
              <span className="font-semibold">Email:</span> drbbcms@gmail.com
            </p>
            <p>
              <span className="font-semibold">Timing:</span> Monday to Saturday
              (9:00 AM - 4:00 PM)
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}