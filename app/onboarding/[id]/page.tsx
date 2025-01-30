'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';

// Define an interface for the appointment object
interface Appointment {
  id: string;
  fullName: string;
  cnic: string;
  dateOfBirth: string;
  age: number;
  email: string;
  contact: string;
  service: string;
}

const OnboardingPage = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the appointment ID from the URL
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchAppointment = async () => {
      try {
        const response = await fetch(`/api/appointments/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch appointment details.');
        }
        const data: Appointment = await response.json();
        setAppointment(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          toast.error(err.message);
        } else {
          setError('An unexpected error occurred.');
          toast.error('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [id]);

  const handleDashboardRedirect = () => {
    router.push('/dashboard');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-700">Loading...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-8 py-10">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-3xl w-full ring-1 ring-gray-200 hover:ring-indigo-400 transition-transform duration-300 transform hover:scale-105">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
          Appointment Confirmed!
        </h1>
        <p className="text-center text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          Your appointment has been successfully booked. Below are the details.
        </p>

        {appointment && (
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-700"><strong>Full Name:</strong> {appointment.fullName}</p>
            <p className="text-gray-700"><strong>CNIC:</strong> {appointment.cnic}</p>
            <p className="text-gray-700"><strong>Date of Birth:</strong> {appointment.dateOfBirth}</p>
            <p className="text-gray-700"><strong>Age:</strong> {appointment.age}</p>
            <p className="text-gray-700"><strong>Email:</strong> {appointment.email}</p>
            <p className="text-gray-700"><strong>Contact:</strong> {appointment.contact}</p>
            <p className="text-gray-700"><strong>Service:</strong> {appointment.service}</p>
          </div>
        )}

        <div className="text-center mt-6">
          <FaCheckCircle className="text-green-500 text-5xl mb-3 animate-bounce" />
          <p className="text-lg text-green-600 font-semibold">
            Your appointment is confirmed. We will contact you soon!
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleDashboardRedirect}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
