'use client';

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const faqs = [
    {
      title: 'How does Home Pharmacy work?',
      content:
        '💊 Ordering medicine has never been easier! Simply upload your prescription or browse our catalog, place an order, and have it delivered to your doorstep with real-time tracking.',
    },
    {
      title: 'Can I book lab tests from home?',
      content:
        '🧪 Yes! Choose from a range of diagnostic tests, schedule a convenient time, and our certified professionals will collect your sample at home. Results will be sent digitally in the shortest possible time.',
    },
    {
      title: 'Are home vaccinations safe?',
      content:
        '💉 Absolutely! Our licensed healthcare professionals ensure that all vaccinations follow strict safety guidelines, maintaining hygiene and proper administration right in the comfort of your home.',
    },
    {
      title: 'What types of physiotherapy services are available?',
      content:
        '🏋️ From post-injury rehabilitation to chronic pain management, our expert physiotherapists tailor treatment plans for your needs, ensuring effective recovery and long-term wellness.',
    },
    {
      title: 'Do you provide medical equipment and supplies?',
      content:
        '⚕️ Yes, we offer a wide range of medical supplies, including mobility aids, oxygen cylinders, BP monitors, and more, ensuring you have everything needed for home care.',
    },
  ];

  return (
    <div id="about-us" className="relative bg-gray-950 text-white py-14 px-4 sm:px-10 lg:px-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 opacity-50 blur-2xl"></div>

      {/* Title Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Frequently Asked Questions
        </h3>
        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Your questions, answered with clarity and ease.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 max-w-3xl mx-auto mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-5 shadow-lg border border-gray-700 transition-transform transform hover:scale-[1.02]"
          >
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none transition-all"
              onClick={() => toggleSection(index)}
            >
              <span
                className={`text-lg font-medium ${
                  activeSection === index ? 'text-blue-400' : 'text-gray-200'
                } transition-colors`}
              >
                {faq.title}
              </span>
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all ${
                  activeSection === index
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-gray-800 border-gray-600 text-gray-300'
                }`}
              >
                {activeSection === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
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
  );
};

export default AboutUs;
