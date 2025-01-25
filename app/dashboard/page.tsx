'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiPlus } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define types for appointments
interface Appointment {
  id: string; // Replace with actual unique identifier if applicable
  title: string;
  date: string;
}

interface Appointments {
  upcoming: Appointment[];
  past: Appointment[];
}

const DashboardPage = () => {
  const [appointments, setAppointments] = useState<Appointments>({
    upcoming: [],
    past: [],
  });
  const [selectedType, setSelectedType] = useState<'upcoming' | 'past' | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      toast.warning('Please log in to access your dashboard.');
      router.push('/login');
      return;
    }

    const fetchAppointments = async () => {
      try {
        const appointmentsRes = await fetch('/api/appointments', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const appointmentsData = await appointmentsRes.json();

        if (!appointmentsRes.ok) throw new Error(appointmentsData.error);

        setAppointments({
          upcoming: appointmentsData.upcoming || [],
          past: appointmentsData.past || [],
        });
      } catch {
        toast.error('Failed to load appointments.');
      }
    };

    fetchAppointments();
  }, [router]);

  const handleIconClick = () => {
    router.push('/book-appointment');
  };

  const handleTypeSelection = (type: 'upcoming' | 'past') => {
    setSelectedType(type);
    setSelectedAppointment(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <ToastContainer />
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-700">Appointments</h3>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              className={`px-6 py-2 rounded-md font-semibold ${
                selectedType === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`}
              onClick={() => handleTypeSelection('upcoming')}
            >
              Upcoming Appointments
            </button>
            <button
              className={`px-6 py-2 rounded-md font-semibold ${
                selectedType === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`}
              onClick={() => handleTypeSelection('past')}
            >
              Past Appointments
            </button>
          </div>

          <div>
            {selectedType && (
              <ul className="space-y-4">
                {appointments[selectedType].length > 0 ? (
                  appointments[selectedType].map((appointment) => (
                    <li
                      key={appointment.id}
                      className={`p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105 ${
                        selectedAppointment === appointment
                          ? 'bg-blue-200 border-blue-500'
                          : 'bg-gray-100 border-gray-300'
                      }`}
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      <p className="text-gray-800 font-medium">{appointment.title}</p>
                      <p className="text-gray-600 text-sm">{appointment.date}</p>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No {selectedType} appointments available</p>
                )}
              </ul>
            )}
          </div>

          {selectedAppointment && (
            <div className="bg-blue-50 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Selected Appointment</h3>
              <p className="text-gray-800 font-medium">{selectedAppointment.title}</p>
              <p className="text-gray-600 text-sm">{selectedAppointment.date}</p>
            </div>
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center justify-center border-2 border-blue-600 rounded-lg p-4 max-w-sm w-full shadow-lg hover:shadow-xl transition-shadow bg-gray-50">
            <div
              className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700"
              onClick={handleIconClick}
            >
              <FiPlus size={36} />
            </div>
            <p className="mt-4 text-3xl font-bold text-gray-700">New Appointment</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              localStorage.removeItem('token');
              toast.success('Logged out successfully.');
              router.push('/login');
            }}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;





