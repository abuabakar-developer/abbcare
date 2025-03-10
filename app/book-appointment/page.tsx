'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaIdCard, FaCalendarAlt, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa';

interface FormDataType {
  fullName: string;
  cnic: string;
  dateOfBirth: string;
  age: string;
  email: string;
  contact: string;
  service: string;
  selectedDate: string;
  selectedTime: string;
  equationAnswer: string;
}

const BookAppointment = () => {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    cnic: '',
    dateOfBirth: '',
    age: '',
    email: '',
    contact: '',
    service: '',
    selectedDate: '',
    selectedTime: '',
    equationAnswer: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Keep the success message for 5 seconds
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700">
      <h2 className="text-white text-2xl font-bold text-center mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {[{ label: 'Full Name', name: 'fullName', type: 'text', icon: FaUser },
          { label: 'CNIC (without dashes)', name: 'cnic', type: 'text', icon: FaIdCard },
          { label: 'Date of Birth', name: 'dateOfBirth', type: 'date', icon: FaCalendarAlt },
          { label: 'Age', name: 'age', type: 'number' },
          { label: 'Email', name: 'email', type: 'email', icon: FaEnvelope },
          { label: 'Contact', name: 'contact', type: 'tel', icon: FaPhone }
        ].map((field, index) => (
          <div key={index} className="relative group">
            {field.icon && <field.icon className="absolute left-3 top-3 text-gray-500" />}
            <input
              type={field.type}
              name={field.name}
              placeholder={field.label}
              value={formData[field.name as keyof FormDataType]}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-xl py-3 px-4 pl-10 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
        ))}

        <div>
          <label className="text-white block mb-1">Select Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-xl py-3 px-4 focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="">Select a Service</option>
            <option value="General Checkup">Home Pharmacy</option>
            <option value="Consultation">Home Lab</option>
            <option value="Treatment">Home Vaccination</option>
          </select>
        </div>

        <div>
          <label className="text-white block mb-1">Select Date</label>
          <input type="date" name="selectedDate" value={formData.selectedDate} onChange={handleChange} required className="w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-xl py-3 px-4 focus:ring-2 focus:ring-green-500 outline-none" />
        </div>

        <div>
          <label className="text-white block mb-1">Select Time</label>
          <input type="time" name="selectedTime" value={formData.selectedTime} onChange={handleChange} required className="w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-xl py-3 px-4 focus:ring-2 focus:ring-green-500 outline-none" />
        </div>

        <div>
          <label className="text-white block mb-1">Math Verification (2 + 3 = ?)</label>
          <input type="text" name="equationAnswer" value={formData.equationAnswer} onChange={handleChange} required className="w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-xl py-3 px-4 focus:ring-2 focus:ring-green-500 outline-none" />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl">
          Submit Appointment
        </button>
      </form>

      {isSubmitted && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.7 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.7 }} 
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl shadow-xl text-center max-w-xs">
            <FaCheckCircle className="text-white text-5xl mx-auto mb-4 animate-pulse" />
            <h3 className="text-white text-2xl font-bold mb-2">Appointment Booked!</h3>
            <p className="text-white mb-4">We have successfully received your request. Our team will get in touch with you soon!</p>
            <button onClick={() => setIsSubmitted(false)} className="mt-4 px-6 py-2 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all">
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BookAppointment;
