'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function LabPage() {
  const [showTests, setShowTests] = useState(false);

  const labTests = [
    { id: 1, name: "Complete Blood Count (CBC)", price: "$25", description: "Checks overall health and detects a variety of disorders." },
    { id: 2, name: "Lipid Profile", price: "$30", description: "Measures cholesterol and triglycerides to assess heart health." },
    { id: 3, name: "Liver Function Test", price: "$40", description: "Evaluates liver health and function." },
    { id: 4, name: "Thyroid Function Test", price: "$35", description: "Checks thyroid hormone levels." },
    { id: 5, name: "Diabetes Test (HbA1c)", price: "$28", description: "Measures blood sugar levels over the past 3 months." },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Hero Section */}
        <section className="relative text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900">Welcome to Abcare Lab</h1>

          <div className="relative">
            <Image src="/lb.webp" alt="Abcare Lab" width={1200} height={600} className="rounded-lg shadow-lg object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-4xl font-semibold text-white">Trusted Diagnostics for Better Health</h2>
            </div>
          </div>

          <h3 className="text-3xl font-medium text-gray-800">
            Your Trusted Partner for Comprehensive Health Tests
          </h3>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-4">
          <button 
            onClick={() => setShowTests(!showTests)}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
          >
            {showTests ? "Hide Lab Tests" : "View Lab Tests"}
          </button>

          {/* Call Now Button */}
          <a
            href="tel:+923154195240"
            className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg mt-6 block max-w-xs mx-auto hover:bg-green-700 transition ease-in-out duration-300"
          >
            Call Now: 03154195240
          </a>
        </section>

        {/* Lab Test List - Shows when the button is clicked */}
        {showTests && (
          <section className="space-y-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-900 text-center">Available Lab Tests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labTests.map((test) => (
                <div key={test.id} className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition">
                  <h3 className="text-2xl font-semibold text-blue-900">{test.name}</h3>
                  <p className="text-gray-700">{test.description}</p>
                  <p className="text-blue-600 font-semibold mt-2">{test.price}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}


