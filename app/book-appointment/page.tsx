'use client';

import { useState } from 'react';
import { FaUser, FaIdCard, FaCalendarAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

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
}

const doctors = [
  { name: 'Dr. Sophia Turner', rating: 4.9, image: '/dn2.jpg', specialty: 'Cardiology' },
  { name: 'Dr. Ethan Williams', rating: 4.8, image: '/gn3.jpg', specialty: 'Neurology' },
  { name: 'Dr. Olivia Brown', rating: 4.7, image: '/gn4.jpg', specialty: 'Pediatrics' },
];

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
  });

  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); // This is now used
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDoctorSelection = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    setError(null); // Clear error when a doctor is selected
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctor) {
      setError('Please select a doctor before confirming the appointment.');
      return;
    }

    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-950 px-6 py-12">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-center mb-12">
        Book an Appointment
      </h2>

      {/* Container for form & doctor selection */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full max-w-6xl space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Section - Appointment Form */}
        <div className="w-full lg:w-1/2 bg-gray-800 shadow-2xl rounded-2xl border border-gray-600 p-8 lg:p-12 flex flex-col">
          <form className="space-y-6 flex-grow" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { label: 'Full Name', name: 'fullName', type: 'text', icon: FaUser },
                { label: 'CNIC', name: 'cnic', type: 'text', icon: FaIdCard },
                { label: 'Date of Birth', name: 'dateOfBirth', type: 'date', icon: FaCalendarAlt },
                { label: 'Age', name: 'age', type: 'number' },
                { label: 'Email', name: 'email', type: 'email', icon: FaEnvelope },
                { label: 'Contact', name: 'contact', type: 'tel', icon: FaPhone },
              ].map((field, index) => (
                <div key={index} className="relative">
                  {field.icon && <field.icon className="absolute left-3 top-3 text-gray-400" />}
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name as keyof FormDataType]}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-xl py-3 px-4 pl-10 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="text-white block mb-1">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-xl py-3 px-4 focus:ring-2 focus:ring-green-500 outline-none transition-all"
              >
                <option value="">Select a Service</option>
                <option value="Home Pharmacy">Home Pharmacy</option>
                <option value="Home Lab">Home Lab</option>
                <option value="Home Vaccination">Home Vaccination</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-all shadow-lg mt-6"
            >
              Submit Appointment
            </button>
          </form>
        </div>

        {/* Right Section - Doctor Selection */}
        <div className="w-full lg:w-1/2 bg-gray-800 shadow-2xl rounded-2xl border border-gray-600 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Doctor Appointment List</h2>

          <div className="flex-grow">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`cursor-pointer bg-gray-700 rounded-xl p-6 shadow-lg flex items-center gap-6 hover:bg-gray-600 transition-all ${
                  selectedDoctor === doctor.name ? 'border-2 border-green-500' : ''
                }`}
                onClick={() => handleDoctorSelection(doctor.name)}
              >
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full border-2 border-green-500"
                />
                <div>
                  <h3 className="text-white font-bold text-lg">{doctor.name}</h3>
                  <p className="text-green-400 text-sm">{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
      </div>

      {/* Confirmation Message */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-green-600 text-white p-8 rounded-xl shadow-lg max-w-lg w-full text-center">
            <h3 className="text-2xl font-bold mb-4">Appointment Confirmed!</h3>
            <p className="mb-6">Your appointment has been successfully booked. A confirmation email will be sent shortly.</p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="bg-green-800 text-white py-2 px-6 rounded-xl hover:bg-green-700 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
