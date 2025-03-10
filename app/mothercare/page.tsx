"use client";

import React from "react";
import Image from "next/image";

const MotherCarePage = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-400 leading-tight tracking-wide mb-10">
        ABCare Mother and & Baby Care
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-300 text-center leading-relaxed tracking-wide mb-12 max-w-4xl mx-auto">
        Compassionate and personalized home-based care for mothers and newborns, ensuring their health and well-being in the early stages of life.
      </p>

      {/* Services Section */}
      <section className="mt-12 lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-green-300 mb-6 tracking-wide">Our Mother & Baby Care Services</h2>
          <ul className="list-disc pl-8 space-y-4 text-gray-300 text-lg leading-relaxed">
            <li><span className="font-semibold text-green-400">Postpartum Care:</span> Comprehensive support for new mothers.</li>
            <li><span className="font-semibold text-green-400">Newborn Health Monitoring:</span> Regular check-ups and assessments.</li>
            <li><span className="font-semibold text-green-400">Baby Feeding Assistance:</span> Expert guidance on breastfeeding and nutrition.</li>
            <li><span className="font-semibold text-green-400">Developmental Support:</span> Baby massage and early stimulation exercises.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <Image
            src="/bb.webp"
            alt="Mother and Baby Care"
            width={700}
            height={400}
            className="rounded-lg shadow-2xl lg:max-h-[350px] transform hover:scale-105 transition duration-300 hover:shadow-green-500"
          />
        </div>
      </section>

      {/* Additional Details */}
      <section className="mt-16 space-y-12 lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-green-300 mb-4 tracking-wide">Personalized Home-Based Care</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Tailored healthcare solutions designed to meet the unique needs of each mother and baby.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-300 mb-4 tracking-wide">Expert Support & Guidance</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our team of professionals ensures the best medical care and advice for mothers and newborns.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-300 mb-4 tracking-wide">Convenient Appointment Booking</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Easily schedule home visits and online consultations with our experts.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg py-4 px-12 rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transform hover:scale-110 transition duration-300">
          Call Now: 03154195240
        </button>
      </div>
    </div>
  );
};

export default MotherCarePage;

