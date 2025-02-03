import Image from 'next/image';
import React from 'react';

const TeleClinicPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans mb-4">
      {/* Header */}
      <header className="w-full pt-16 lg:pt-24 pb-8 bg-gray-50">
        <h1 className="text-gray-700 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
          ABCare Tele Clinics
        </h1>
      </header>

      {/* Hero Section */}
      <section className="mt-8 w-full max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="relative w-full h-64 md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden">
          <Image
            src="/tele.webp"
            alt="ABCare Tele Clinics"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mt-8 leading-tight tracking-wide">
          Quality Telemedicine 
        </h2>
        <p className="text-center text-lg md:text-xl lg:text-2xl text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          Consult with doctors, book appointments, and manage your health from the comfort of your home. Experience healthcare in a whole new way.
        </p>
      </section>

      {/* Services Section */}
      <section className="mt-12 w-full max-w-screen-xl mx-auto px-6 md:px-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
          Our Services
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
          At ABCare Tele Clinics, we bring healthcare to your doorstep. Here are the services we offer:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[
            'Home lab sample collection',
            'Home medicine delivery',
            'Home nursing services',
            '24/7 online doctor availability',
            'Online consultations with a consultant/specialist'
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center text-gray-700 text-lg md:text-xl leading-relaxed hover:shadow-xl transition duration-300"
            >
              {service}
            </div>
          ))}
        </div>
        <div className="relative w-full h-64 md:h-96 mt-8 overflow-hidden rounded-2xl">
          <Image
            src="/te.webp"
            alt="ABCare Services"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
          />
        </div>
      </section>

      {/* Why Choose ABCare */}
      <section className="mt-12 w-full max-w-screen-xl mx-auto px-6 md:px-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose ABCare?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[
            'Experienced and certified doctors',
            'Affordable and transparent pricing',
            'Convenient online and at-home services',
            'Secure and private consultations',
            '24/7 customer support'
          ].map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center text-gray-700 text-lg md:text-xl leading-relaxed hover:shadow-xl transition duration-300"
            >
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* How to Book an Appointment */}
      <section className="mt-12 w-full max-w-screen-xl mx-auto px-6 md:px-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
          How to Book an Appointment?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[
            'Visit our website and log in to your account.',
            'Choose the service you require.',
            'Select a convenient date and time.',
            'Confirm your booking and make the payment online.',
            'Receive confirmation and reminders for your appointment.'
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center text-gray-700 text-lg md:text-xl leading-relaxed hover:shadow-xl transition duration-300"
            >
              {`${index + 1}. ${step}`}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12 w-full max-w-screen-xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Call us now at <span className="font-semibold text-blue-600">0315-4195240</span>
        </p>
        <button className="mt-6 px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
          Call Now
        </button>
      </section>
    </div>
  );
};

export default TeleClinicPage;



