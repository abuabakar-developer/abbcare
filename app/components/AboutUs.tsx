'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const services = [
    {
      title: 'Home Pharmacy Services',
      content:
        'With our Home Pharmacy Services, you can order medications online and get them delivered to your doorstep. We prioritize convenience and reliability, ensuring you never run out of essential medicines. Our service also includes a seamless prescription upload feature, making the process hassle-free.',
    },
    {
      title: 'Home Lab Services',
      content:
        'Book diagnostic tests from the comfort of your home. Our trusted network of labs ensures accurate reports delivered digitally. From routine blood tests to specialized diagnostics, our Home Lab Services are designed to prioritize your health and convenience.',
    },
    {
      title: 'Home Vaccination Services',
      content:
        'Ensure your family’s health and safety with our Home Vaccination Services. Schedule vaccinations with certified healthcare professionals who administer them in the comfort of your home. Stay protected against preventable diseases with ease.',
    },
    {
      title: 'Home Physiotherapy Services',
      content:
        'Access professional physiotherapy sessions tailored to your needs. Our expert physiotherapists provide customized treatment plans to aid recovery and improve mobility, all from the comfort of your home.',
    },
    {
      title: 'Home Medical Supplies',
      content:
        'Order essential medical supplies such as wheelchairs, walkers, and oxygen cylinders with a few clicks. Our Home Medical Supplies service ensures timely delivery of high-quality products to support your healthcare journey.',
    },
  ];
  
  return (
    <div id='about-us' className="bg-gray-50 py-16 px-6 lg:px-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image - Now visible on mobile */}
        <div className="w-full">
          <Image
            src="/abtus.webp"
            alt="About Us"
            width={500}
            height={300}
            className="w-full h-auto rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side: Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 tracking-tight leading-tight">
            About Us
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-4 leading-relaxed">
            We are committed to providing the best healthcare solutions with convenience and care. Our platform enables seamless booking for various medical services, ensuring your health is our priority.
          </p>
          <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
            Our mission is to bridge the gap between patients and healthcare providers through technology and trust.
          </p>
          <button className="px-8 py-3 text-lg lg:text-xl bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
            Read More
          </button>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left">
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
              Our platform is built on the foundation of trust, technology, and unparalleled service. Whether you need medicines, diagnostic tests, or home-based healthcare solutions, we are here to simplify the process for you.
            </p>
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mt-6">
              By combining expert care with cutting-edge technology, we ensure that every interaction you have with us is seamless and stress-free. Our goal is to empower individuals and families to take charge of their health with confidence.
            </p>
          </div>

{/* Right Content: Responsive Image */}
<div className="w-full lg:w-1/2 mt-8 lg:mt-0">
  <Image
    src="/abtua.jpg"
    alt="Why Us"
    width={500}
    height={300}
    className="w-full h-auto rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
  />
</div>    

        </div>
      </div>

      {/* Collapsible Services Section */}
      <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 text-center">
            Why Choose Us?
          </h3>
          <p className="text-lg lg:text-xl text-gray-600 mb-10 text-center leading-relaxed">
            We prioritize your health by connecting you with trusted professionals and facilities for every healthcare need. Experience personalized care and quick access to services with us.
          </p>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  className="flex justify-between items-center w-full py-3 text-left text-xl font-medium"
                  onClick={() => toggleSection(index)}
                >
                  <span className={`${activeSection === index ? 'text-blue-600' : 'text-blue-800'} transition-colors`}>
                    {service.title}
                  </span>
                  <span className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${activeSection === index ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100'}`}>
                    {activeSection === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                {activeSection === index && (
                  <p className="mt-4 text-gray-700 text-lg lg:text-xl leading-loose">
                    {service.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


