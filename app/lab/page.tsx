"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LabPage = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gray-950 text-gray-200">
      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-teal-400 leading-tight tracking-wide mb-10"
      >
        ABCare Lab Services
      </motion.h1>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="text-lg sm:text-xl text-gray-300 text-center leading-relaxed tracking-wide mb-12 max-w-4xl mx-auto"
      >
        Get accurate and reliable lab tests with ABCare Lab. Our cutting-edge technology ensures fast and precise diagnostics for your health needs.
      </motion.p>

      {/* Services Section */}
      <section className="mt-12 lg:flex lg:items-center lg:space-x-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl font-semibold text-teal-300 mb-6 tracking-wide">Our Lab Services</h2>
          <ul className="list-disc pl-8 space-y-4 text-gray-300 text-lg leading-relaxed">
            <li><span className="font-semibold text-teal-400">Complete Blood Count (CBC):</span> Detects various health conditions.</li>
            <li><span className="font-semibold text-teal-400">Lipid Profile:</span> Evaluates cholesterol and triglycerides.</li>
            <li><span className="font-semibold text-teal-400">Liver Function Test:</span> Checks liver health and function.</li>
            <li><span className="font-semibold text-teal-400">Thyroid Function Test:</span> Assesses thyroid hormone levels.</li>
            <li><span className="font-semibold text-teal-400">Diabetes Test (HbA1c):</span> Measures long-term blood sugar levels.</li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0"
        >
          <Image
            src="/lb.webp"
            alt="Lab Services"
            width={700}
            height={400}
            className="rounded-lg shadow-2xl lg:max-h-[350px] transform hover:scale-105 transition duration-300 hover:shadow-teal-500"
          />
        </motion.div>
      </section>

      {/* Additional Services Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[ 
          { title: "Blood Tests", desc: "Comprehensive tests for early detection of health issues." },
          { title: "Urine Tests", desc: "Diagnostic tests to assess kidney and urinary health." },
          { title: "X-rays", desc: "Precise imaging to detect fractures and other abnormalities." }
        ].map((service, index) => (
          <div key={index} className="p-6 bg-white/10 rounded-lg shadow-md hover:scale-105 transition-all duration-300 backdrop-blur-lg">
            <h3 className="text-2xl font-semibold text-teal-300 mb-3">{service.title}</h3>
            <p className="text-gray-300 text-md">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Call To Action */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <button className="bg-gradient-to-r from-teal-500 to-teal-700 text-white text-lg py-4 px-12 rounded-lg shadow-lg hover:from-teal-600 hover:to-teal-800 transform hover:scale-110 transition duration-300">
          Call Now: 03154195240
        </button>
      </motion.div>
    </div>
  );
};

export default LabPage;

