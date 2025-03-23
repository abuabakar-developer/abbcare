"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Appointment {
  _id: string;
  fullName: string;
  dateOfBirth: string;
  contact: string;
  service: string;
  status: "scheduled" | "pending" | "canceled";
}

const DashboardPage = () => {
  const [lastTenAppointments, setLastTenAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"scheduled" | "pending" | "canceled">("scheduled");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Please log in to access your dashboard.");
      router.push("/login");
      return;
    }

    const fetchAppointments = async () => {
      try {
        const response = await fetch("/api/appointments", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error);

        setLastTenAppointments(data.data.slice(0, 10)); // Get the last 10 appointments
      } catch (error) {
        console.error("Error fetching appointments:", error);
        toast.error("Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [router]);

  const updateAppointmentStatus = async (id: string, newStatus: "scheduled" | "pending" | "canceled") => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized. Please log in.");
        return;
      }

      const response = await fetch(`/api/appointments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to update appointment.");
      }

      setLastTenAppointments((prev) =>
        prev.map((appointment) =>
          appointment._id === id ? { ...appointment, status: newStatus } : appointment
        )
      );

      toast.success(`Appointment status updated to ${newStatus.toUpperCase()}`);
    } catch (error) {
      console.error("Error updating appointment status:", error);
      toast.error("Error updating appointment status.");
    }
  };

  const handleNewAppointment = () => {
    router.push("/book-appointment");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 sm:px-8 md:px-12">
      <ToastContainer />
      <div className="max-w-6xl mx-auto p-6 sm:p-10 md:p-14 rounded-xl shadow-xl bg-gray-950">
        <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-center mb-12">
          Your Appointments
        </h3>

        <div className="mt-6 flex justify-center gap-6">
          {["scheduled", "pending", "canceled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "scheduled" | "pending" | "canceled")}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 focus:outline-none ${
                activeTab === tab
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center mt-10">
            <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {lastTenAppointments
              .filter((appointment) => appointment.status === activeTab)
              .map((appointment) => (
                <div
                  key={appointment._id}
                  className="flex justify-between items-center p-6 border-b-4 border-gray-600 bg-gray-700 hover:bg-gray-600 transition duration-300"
                >
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-200">{appointment.fullName}</h4>
                    <p className="text-sm sm:text-base text-gray-400">
                      {appointment.dateOfBirth} - {appointment.service}
                    </p>
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mt-3 ${
                        appointment.status === "scheduled"
                          ? "bg-green-600"
                          : appointment.status === "pending"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                    >
                      {appointment.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => updateAppointmentStatus(appointment._id, "pending")}
                      className="px-3 py-2 sm:px-4 sm:py-3 bg-yellow-600 text-xs sm:text-sm rounded transition duration-300 transform hover:scale-105"
                    >
                      Set Pending
                    </button>
                    <button
                      onClick={() => updateAppointmentStatus(appointment._id, "scheduled")}
                      className="px-3 py-2 sm:px-4 sm:py-3 bg-green-600 text-xs sm:text-sm rounded transition duration-300 transform hover:scale-105"
                    >
                      Set Scheduled
                    </button>
                    <button
                      onClick={() => updateAppointmentStatus(appointment._id, "canceled")}
                      className="px-3 py-2 sm:px-4 sm:py-3 bg-red-600 text-xs sm:text-sm rounded transition duration-300 transform hover:scale-105"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleNewAppointment}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105"
          >
            Book New Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
