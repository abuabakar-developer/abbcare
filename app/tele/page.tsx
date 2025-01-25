// app/tele/page.tsx
import Image from 'next/image';
import React from 'react';

const TeleClinicPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans mb-4">
      {/* Header */}
      <header className="w-full pt-10 mt-10 py-10 bg-gray-50">
        <h1 className="text-gray-700 text-center text-5xl font-extrabold tracking-wide md:text-6xl">
          ABCare Tele Clinics
        </h1>
      </header>    

      {/* Hero Section */}
      <section className="mt-8 w-full px-6 md:px-12">
        <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
          <Image
            src="/tele.webp" // Make sure to add this image to the public folder
            alt="ABCare Tele Clinics"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-xl"
          />
        </div>
        <h2 className="text-center text-4xl font-semibold text-gray-800 mt-8 leading-snug tracking-tight md:text-5xl">
          Quality Telemedicine Services at Your Fingertips
        </h2>
        <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          Consult with doctors, book appointments, and manage your health from the comfort of your home. Experience healthcare in a whole new way.
        </p>
      </section>

      {/* Services Section */}
      <section className="mt-12 w-full px-6 md:px-12">
        <h2 className="text-center text-3xl font-bold text-gray-800 tracking-wide">Our Services</h2>
        <p className="text-center text-lg text-gray-600 mt-4 leading-relaxed">
          At ABCare Tele Clinics, we bring healthcare to your doorstep. Here are the services we offer:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-6 space-y-3 text-lg md:text-xl">
          <li>Home lab sample collection</li>
          <li>Home medicine delivery</li>
          <li>Home nursing services</li>
          <li>24/7 online doctor availability</li>
          <li>Online consultations with a consultant/specialist</li>
        </ul>
        <div className="relative w-full h-64 md:h-96 mt-8">
          <Image
            src="/te.webp" // Replace with an appropriate image for these services
            alt="ABCare Services"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Why Choose ABCare */}
      <section className="mt-12 w-full px-6 md:px-12">
        <h2 className="text-center text-3xl font-bold text-gray-800">Why Choose ABCare?</h2>
        <ul className="list-disc list-inside text-gray-600 mt-6 space-y-3 text-lg md:text-xl">
          <li>Experienced and certified doctors</li>
          <li>Affordable and transparent pricing</li>
          <li>Convenient online and at-home services</li>
          <li>Secure and private consultations</li>
          <li>24/7 customer support</li>
        </ul>
      </section>

      {/* How Can I Book an Appointment? */}
      <section className="mt-12 w-full px-6 md:px-12">
        <h2 className="text-center text-3xl font-bold text-gray-800">How Can I Book an Appointment?</h2>
        <p className="text-center text-lg text-gray-600 mt-4 leading-relaxed">
          Booking an appointment with ABCare Tele Clinics is simple:
        </p>
        <ul className="list-decimal list-inside text-gray-600 mt-6 space-y-3 text-lg md:text-xl">
          <li>Visit our website and log in to your account.</li>
          <li>Choose the service you require.</li>
          <li>Select a convenient date and time.</li>
          <li>Confirm your booking and make the payment online.</li>
          <li>Receive confirmation and reminders for your appointment.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mt-12 w-full px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mt-4">
          Call us now at <span className="font-semibold text-blue-600">0315-4195240</span>
        </p>
        <button className="mt-6 px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Call Now
        </button>
      </section>
    </div>
  );
};

export default TeleClinicPage;


