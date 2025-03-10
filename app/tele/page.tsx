"use client";

import React from "react";
import Image from "next/image";

const TeleClinicPage = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-teal-400 leading-tight tracking-wide mb-10">
        ABCare Tele Clinics
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-300 text-center leading-relaxed tracking-wide mb-12 max-w-4xl mx-auto">
        Experience top-quality telemedicine services from the comfort of your home. Connect with expert doctors, book appointments, and manage your health conveniently.
      </p>

      {/* Services Section */}
      <section className="mt-12 lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-teal-300 mb-6 tracking-wide">Our TeleClinic Services</h2>
          <ul className="list-disc pl-8 space-y-4 text-gray-300 text-lg leading-relaxed">
            <li><span className="font-semibold text-teal-400">Virtual Consultations:</span> Get medical advice anytime, anywhere.</li>
            <li><span className="font-semibold text-teal-400">Home Lab Sample Collection:</span> Hassle-free diagnostic services from home.</li>
            <li><span className="font-semibold text-teal-400">Online Specialist Appointments:</span> Connect with top specialists easily.</li>
            <li><span className="font-semibold text-teal-400">24/7 Doctor Availability:</span> Immediate medical support when you need it.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <Image
            src="/tele.webp"
            alt="TeleClinic Services"
            width={700}
            height={400}
            className="rounded-lg shadow-2xl lg:max-h-[350px] transform hover:scale-105 transition duration-300 hover:shadow-teal-500"
          />
        </div>
      </section>

      {/* Additional Details */}
      <section className="mt-16 space-y-12 lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4 tracking-wide">Secure & Private Consultations</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            All online consultations are encrypted and secure, ensuring complete privacy for our patients.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4 tracking-wide">Affordable & Accessible Care</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            High-quality medical services at an affordable price, available at your convenience.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4 tracking-wide">Easy Appointment Booking</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Book appointments effortlessly through our user-friendly online platform.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-teal-500 to-teal-700 text-white text-lg py-4 px-12 rounded-lg shadow-lg hover:from-teal-600 hover:to-teal-800 transform hover:scale-110 transition duration-300">
          Call Now: 03154195240
        </button>
      </div>
    </div>
  );
};

export default TeleClinicPage;
