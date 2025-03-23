'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image'; // Import next/image

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const router = useRouter();

  const toggleSection = (section: number) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const faqs = [
    { title: 'How does Home Pharmacy work?', content: '💊 Ordering medicine has never been easier! Simply upload your prescription or browse our catalog, place an order, and have it delivered to your doorstep with real-time tracking.' },
    { title: 'Can I book lab tests from home?', content: '🧪 Yes! Choose from a range of diagnostic tests, schedule a convenient time, and our certified professionals will collect your sample at home. Results will be sent digitally in the shortest possible time.' },
    { title: 'Are home vaccinations safe?', content: '💉 Absolutely! Our licensed healthcare professionals ensure that all vaccinations follow strict safety guidelines, maintaining hygiene and proper administration right in the comfort of your home.' },
    { title: 'What types of physiotherapy services are available?', content: '🏋️ From post-injury rehabilitation to chronic pain management, our expert physiotherapists tailor treatment plans for your needs, ensuring effective recovery and long-term wellness.' },
    { title: 'Do you provide medical equipment and supplies?', content: '⚕️ Yes, we offer a wide range of medical supplies, including mobility aids, oxygen cylinders, BP monitors, and more, ensuring you have everything needed for home care.' },
  ];

  const doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiologist', image: '/ab3.jpg', rating: 4.8 },
    { name: 'Dr. Jane Smith', specialty: 'Dermatologist', image: '/dn1.webp', rating: 4.5 },
    { name: 'Dr. Emily Davis', specialty: 'Orthopedic Surgeon', image: '/g4.webp', rating: 4.7 },
    { name: 'Dr. Mark Brown', specialty: 'Neurologist', image: '/dn2.jpg', rating: 4.6 },
  ];

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl w-full">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Frequently Asked Questions & Meet Our Doctors
          </h3>
          <p className="mt-3 text-gray-400 text-sm md:text-base">
            Get to know our experts and find answers to your questions.
          </p>
        </div>

        {/* Layout for FAQ and Doctors */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* FAQ Section */}
          <div className="flex flex-col flex-grow min-h-full">
            <h4 className="text-xl font-bold text-gray-300 mb-4">Frequently Asked Questions</h4>
            <div className="space-y-4 flex-grow">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-5 shadow-lg border border-gray-700 transition-transform transform hover:scale-[1.02]"
                >
                  <button
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                    onClick={() => toggleSection(index)}
                  >
                    <span className={`text-lg font-medium ${activeSection === index ? 'text-teal-400' : 'text-gray-200'} transition-colors`}>
                      {faq.title}
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center transition-all text-gray-300">
                      {activeSection === index ? <FaChevronUp size={16} color="#4FD1C5" /> : <FaChevronDown size={16} color="#4FD1C5" />}
                    </span>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {activeSection === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-gray-300 text-sm leading-relaxed">{faq.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Doctors Section */}
          <div className="flex flex-col flex-grow min-h-full">
            <h4 className="text-xl font-bold text-gray-300 mb-4">Meet Our Top Doctors</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg shadow-lg border border-gray-700 flex items-center space-x-4 transition-transform transform hover:scale-[1.02] min-h-[120px]"
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={64}  // Define width in pixels
                    height={64} // Define height in pixels
                    className="w-16 h-16 object-cover rounded-full border-2 border-gray-700"
                  />
                  <div>
                    <h5 className="text-lg font-semibold text-white">{doctor.name}</h5>
                    <p className="text-xs text-gray-400">{doctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < Math.round(doctor.rating) ? 'text-yellow-400' : 'text-gray-500'}>⭐</span>
                      ))}
                      <span className="text-xs text-gray-400 ml-2">({doctor.rating})</span>
                    </div>
                    <button
                      onClick={handleBookAppointment}
                      className="mt-2 px-4 py-1 text-sm bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default AboutUs;
