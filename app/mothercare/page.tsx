"use client";
import React from "react";
import Image from "next/image";

const MotherBabyCarePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full bg-gray-50 text-green-600 text-center py-12 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          ABCARE Mother & Baby Care Program
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl opacity-80 max-w-2xl mx-auto">
          Providing compassionate, home-based care for mothers and babies.
        </p>
      </header>

      {/* Content Section */}
      <section className="w-full max-w-screen-lg px-4 sm:px-6 md:px-12 py-10 space-y-10">
        {/* Intro Section */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
          Our ABCARE Mother & Baby Care Program is designed to offer
          personalized, home-based care for both mothers and newborns.
          We ensure the well-being of both mother and baby in the early stages of motherhood.
        </p>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/bb.webp"
            alt="Mother and Baby Care"
            width={800}
            height={600}
            className="w-full max-w-3xl rounded-lg shadow-xl"
          />
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-green-700 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Postpartum care for mothers",
              "Newborn care and feeding support",
              "Baby massage and development exercises",
              "Health monitoring for mother and baby",
              "Personalized health and nutrition advice",
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                <p className="text-lg text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-green-700">About This Program</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
            Our Mother & Baby Care Program ensures both mother and child receive the best care 
            during the crucial early stages. With professional and compassionate services 
            provided at home, we prioritize emotional and physical well-being.
          </p>
        </div>

        {/* How to Get the Care Plan */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-green-700">How to Get the Care Plan</h2>
          <div className="space-y-4 mt-4">
            {[
              "Contact us via phone or email to schedule your consultation.",
              "Our team will assess your needs and customize a care plan.",
              "We will arrange a convenient time to begin the home care program.",
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                <p className="text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-700">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-700 mt-4">
            For more information or to schedule your consultation, please contact us:
          </p>
          <p className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">
            Phone:{" "}
            <a
              href="tel:+923154195240"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              03154195240
            </a>
          </p>
        </div>

        {/* Call Now Button */}
        <div className="flex justify-center mt-8">
          <a
            href="tel:+923154195240"
            className="bg-green-700 text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-green-800 transition duration-300 transform hover:scale-105"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default MotherBabyCarePage;




