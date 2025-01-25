"use client";

import React from "react";
import Image from "next/image";

const RehabilitationServices = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center text-green-800 leading-tight tracking-wide mb-10">
        Abcare Home Rehabilitation Services
      </h1>

      {/* Content about rehabilitation */}
      <p className="text-lg text-gray-700 text-center leading-relaxed tracking-wide mb-12 max-w-3xl mx-auto">
        At Abcare, we provide exceptional home rehabilitation services tailored to meet diverse needs. Our dedicated
        professionals ensure a faster, more comfortable recovery process, all from the comfort of your home.
      </p>

      {/* Services Section */}
      <section className="mt-16 lg:flex lg:space-x-12">
        {/* Bullet Points */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-6 tracking-wide">
            Our Specialized Services
          </h2>
          <ul className="list-disc pl-6 space-y-6 text-gray-800 text-lg leading-loose">
            <li>
              <span className="font-semibold">Home Physiotherapy:</span> Comprehensive care to restore movement and
              functionality.
            </li>
            <li>
              <span className="font-semibold">Home Autism Services:</span> Individualized support for developmental
              needs.
            </li>
            <li>
              <span className="font-semibold">Home Occupational Therapy:</span> Assistance with daily living skills
              tailored to your needs.
            </li>
            <li>
              <span className="font-semibold">Home Speech Therapy:</span> Effective communication support from experts.
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <Image
            src="/ph.webp"
            alt="Rehabilitation Services"
            width={800}
            height={400}
            className="rounded-lg shadow-xl lg:max-h-[400px] transform hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="mt-20 space-y-16 lg:grid lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="text-3xl font-bold text-green-700 mb-4 tracking-wide">
            Musculoskeletal Rehabilitation
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
            Our tailored approach targets musculoskeletal issues, focusing on mobility, pain relief, and overall
            strength enhancement.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-green-700 mb-4 tracking-wide">
            Parkinson&apos;s Disease Care
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
            Specialized therapies to manage symptoms, improve motor skills, and promote a better quality of life.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-green-700 mb-4 tracking-wide">
            Cardiac Rehab Post Heart Attack
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
            Expert-guided recovery programs designed for a safe and effective rehabilitation journey after a heart
            attack.
          </p>
        </div>
      </section>

      {/* Why Choose Abcare */}
      <section className="mt-20">
        <h2 className="text-4xl font-semibold text-green-700 mb-8 tracking-wide">
          Why Choose Abcare?
        </h2>
        <ul className="list-disc pl-6 space-y-6 text-gray-800 text-lg leading-loose">
          <li>
            <span className="font-semibold">Highly Experienced Professionals:</span> Compassionate experts dedicated to
            your well-being.
          </li>
          <li>
            <span className="font-semibold">Customized Care Plans:</span> Tailored rehabilitation for individual needs.
          </li>
          <li>
            <span className="font-semibold">Advanced Techniques:</span> Utilizing cutting-edge methods for better
            outcomes.
          </li>
          <li>
            <span className="font-semibold">Comfort of Home:</span> Convenient and effective care delivered to your
            doorstep.
          </li>
        </ul>
      </section>

      {/* Call Button */}
      <div className="mt-16 text-center">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg py-4 px-10 rounded-lg shadow-md hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 transform hover:scale-105 transition duration-300">
          Call Now: 03154195240
        </button>
      </div>
    </div>
  );
};

export default RehabilitationServices;

