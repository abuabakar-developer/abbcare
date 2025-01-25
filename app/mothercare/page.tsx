// app/mothercare/page.tsx

import React from 'react';
import Image from 'next/image';
const MotherBabyCarePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full bg-gray-50 text-green-600 text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          ABCARE Mother & Baby Care Program
        </h1>
        <p className="text-lg sm:text-xl opacity-80">
          Providing compassionate, home-based care for mothers and babies.
        </p>
      </header>

      {/* Content Section */}
      <section className="w-full max-w-5xl px-6 py-8 sm:px-12 md:px-16 space-y-10">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Our ABCARE Mother & Baby Care Program is designed to offer personalized, home-based care for both mothers and newborns.
          We understand the importance of the early stages of motherhood and aim to provide the support you need to ensure the well-being of both mother and baby.
        </p>
        
        {/* Image Section */}
        <div className="flex justify-center mb-12">
 
        <Image 
  src="/bb.webp" 
  alt="Mother and Baby Care" 
  layout="responsive"
  width={800} 
  height={600} 
  className="rounded-lg shadow-xl"
/>

        </div>

        {/* Services Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-green-700">Our Services</h2>
          <ul className="list-inside space-y-3 text-lg text-gray-700">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Postpartum care for mothers
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Newborn care and feeding support
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Baby massage and development exercises
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Health monitoring for mother and baby
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Personalized health and nutrition advice
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-3xl font-semibold text-green-700">About This Program</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Our Mother & Baby Care Program is designed to ensure that both mother and child receive the best care and support during the critical early stages. With professional and compassionate services provided in the comfort of your own home, we make sure that both your emotional and physical health are taken care of. The program includes regular health check-ups, baby care advice, and guidance on maternal recovery.
          </p>
        </div>

        {/* How to Get the Care Plan Section */}
        <div>
          <h2 className="text-3xl font-semibold text-green-700">How to Get the Mother & Baby Care Plan</h2>
          <ul className="list-inside space-y-3 text-lg text-gray-700">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Contact us via phone or email to schedule your consultation.
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Our team will assess your needs and customize a care plan for you.
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              We will arrange a convenient time to begin the home care program.
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h2 className="text-3xl font-semibold text-green-700">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            For more information or to schedule your consultation, please contact us:
          </p>
          <p className="text-lg sm:text-xl font-semibold text-gray-800">
            Phone: <a href="tel:+923154195240" className="text-blue-600 hover:text-blue-800">03154195240</a>
          </p>
        </div>

        {/* Call Now Button */}
        <div className="flex justify-center mt-8">
          <a 
            href="tel:+923154195240" 
            className="inline-block bg-green-700 text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-green-800 transition duration-300 transform hover:scale-105"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default MotherBabyCarePage;

