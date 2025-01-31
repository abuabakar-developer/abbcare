"use client";

import { useState, useEffect } from "react";

interface Appointment {
  _id: string;
  fullName: string;
  service: string;
  date?: string;
  time?: string;
  status: string;
}

const AdminPanel = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState("scheduled");
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch(`/api/admin/appointments?status=${filter}`);
        const data = await res.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchAppointments();
  }, [filter]);

  const updateAppointmentStatus = async (id: string, status: string) => {
    if (!confirm(`Change status to ${status}?`)) return;

    try {
      const res = await fetch(`/api/admin/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        const updatedAppointment = await res.json();
        setAppointments((prev) =>
          prev.map((appt) => (appt._id === id ? updatedAppointment : appt))
        );
      } else {
        const errorData = await res.json();
        alert(`Failed to update: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-white to-blue-50 p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Admin Panel
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["scheduled", "pending", "canceled"].map((status) => (
          <button
            key={status}
            className={`px-6 py-3 rounded-full font-medium text-lg shadow-lg transition-transform transform ${
              filter === status
                ? "bg-yellow-600 text-white scale-105"
                : "bg-gray-200 hover:bg-green-100 hover:scale-105"
            }`}
            onClick={() => setFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center text-gray-500 text-lg mt-12 animate-pulse">
          Loading appointments...
        </div>
      ) : appointments.length === 0 ? (
        <p className="text-center text-gray-500 mt-12">No appointments found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {appointment.fullName}
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  Service: {appointment.service}
                </p>
                {appointment.date && appointment.time && (
                  <div className="mt-4 text-sm text-gray-700 bg-green-50 p-3 rounded-lg shadow">
                    <p>
                      <span className="font-medium text-green-600">Date:</span>{" "}
                      {new Date(appointment.date).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-medium text-green-600">Time:</span>{" "}
                      {appointment.time}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {["scheduled", "pending", "canceled"].map((status) => (
                  <button
                    key={status}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      appointment.status === status
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                    onClick={() =>
                      appointment.status !== status &&
                      updateAppointmentStatus(appointment._id, status)
                    }
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
                           
