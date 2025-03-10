'use client';

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

interface Appointment {
  fullName: string;
  cnic: string;
  dateOfBirth: string;
  age: number;
  email: string;
  contact: string;
  service: string;
}

export default function AppointmentDetailsPage() {
  const router = useRouter();
  const params = useParams(); // Fix: Properly extract params
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params || !params.id) return; // Ensure params exist

    const fetchAppointment = async () => {
      try {
        const response = await fetch(`/api/appointments/${params.id}`);
        const data = await response.json();

        if (data.success && data.appointment) {
          setAppointment(data.appointment);
        }
      } catch (error) {
        console.error("Error fetching appointment:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [params.id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-800 shadow-xl rounded-3xl p-8 w-full max-w-3xl">
        {loading ? (
          <div className="flex justify-center items-center space-x-2">
            <div className="w-8 h-8 border-4 border-gray-500 rounded-full animate-spin"></div>
            <h1 className="text-xl text-gray-400">Loading appointment details...</h1>
          </div>
        ) : appointment ? (
          <>
            <h1 className="text-3xl font-extrabold text-center text-teal-500 mb-6">Appointment Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              {Object.entries(appointment).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm border-b border-gray-600 py-2">
                  <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>
                  <span>{String(value)}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm border-b border-gray-600 py-2">
                <strong>Appointment ID:</strong>
                <span className="text-teal-500">{params.id}</span>
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => router.push("/")}
                className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-lg shadow-lg"
              >
                Go Home
              </button>
            </div>
          </>
        ) : (
          <h1 className="text-2xl text-center text-red-500">Appointment not found!</h1>
        )}
      </div>
    </div>
  );
}
