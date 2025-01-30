
'use client';

import React, { useState } from 'react'; // Import React for React.createElement
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FaUser, FaIdCard, FaCalendarAlt, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa';

type FormData = {
  fullName: string;
  cnic: string;
  dateOfBirth: string;
  age: string;
  email: string;
  contact: string;
  service: string;
  equationAnswer: string;
};

const BookAppointment = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    cnic: '',
    dateOfBirth: '',
    age: '',
    email: '',
    contact: '',
    service: '',
    equationAnswer: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.cnic.match(/^\d{13}$/)) {
      toast.error('Please enter a valid 13-digit CNIC (without dashes).');
      return;
    }

    if (formData.equationAnswer !== '13') {
      toast.error('Please solve the equation 8 + 5 correctly!');
      return;
    }

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('Appointment successfully booked!');
        setIsSubmitted(true);
        router.push(`/onboarding/${result.id}`);
      } else {
        throw new Error('Failed to book appointment');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An unknown error occurred');
      }
    }
  };

  const handleAdminRedirect = () => {
    router.push('/adminpanel');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-8 py-10">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-4xl w-full ring-1 ring-gray-200 hover:ring-indigo-400 transition-transform duration-300 transform hover:scale-105">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
          Book Your Appointment
        </h1>
        <p className="text-center text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Fill out the form below to schedule your appointment.It&apos;s quick and hassle-free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: 'Full Name', name: 'fullName', type: 'text', icon: FaUser },
              { label: 'CNIC (without dashes)', name: 'cnic', type: 'text', icon: FaIdCard },
              { label: 'Date of Birth', name: 'dateOfBirth', type: 'date', icon: FaCalendarAlt },
              { label: 'Age', name: 'age', type: 'number', icon: null },
              { label: 'Email', name: 'email', type: 'email', icon: FaEnvelope },
              { label: 'Contact', name: 'contact', type: 'tel', icon: FaPhone },
            ].map((field, index) => (
              <div key={index} className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                <div className="relative">
                  {field.icon && <field.icon className="absolute left-3 top-3 text-gray-400" />}
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={`Enter ${field.label}`}
                    value={formData[field.name as keyof FormData]}
                    onChange={handleChange}
                    required
                    className={`w-full pl-${field.icon ? '10' : '4'} border border-gray-300 rounded-lg py-3 text-gray-800 focus:ring-indigo-500 focus:border-indigo-500`}
                  />
                </div>
              </div>
            ))}

            <div className="space-y-1 sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg py-3 text-gray-800 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a Service</option>
                <option value="Home Lab">Home Lab</option>
                <option value="Home Physio">Home Physio</option>
                <option value="Home Pharmacy">Home Pharmacy</option>
                <option value="Tele Medicine">Tele Medicine</option>
              </select>
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Solve: 8 + 5</label>
              <input
                type="text"
                name="equationAnswer"
                placeholder="Your Answer"
                value={formData.equationAnswer}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg py-3 text-gray-800 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleAdminRedirect}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center"
            >
              <FaUser className="mr-2" /> Admin
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-6 text-center">
            <FaCheckCircle className="text-green-500 text-4xl mb-3 animate-bounce" />
            <p className="text-lg text-green-600 font-semibold">
              Your appointment has been successfully booked!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;

