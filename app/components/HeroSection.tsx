"use client"; 

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BackgroundLines from "./BackgroundLines";

const HeroSection = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleBookAppointment = () => {
    router.push(isAuthenticated ? "/book-appointment" : "/login");
  };

  const handleBrowseServices = () => {
    router.push("/services");
  };

  return (
    <section className="relative bg-gray-900 text-white flex items-center justify-center min-h-screen w-full overflow-hidden px-6 sm:px-8">
      <BackgroundLines />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center lg:text-left space-y-6 max-w-lg"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 leading-tight">
            Premium Healthcare for Everyone
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Our expert doctors deliver world-class medical care tailored to your health needs.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookAppointment}
              className="flex items-center justify-center gap-2 w-1/2 sm:w-auto px-4 sm:px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 transition"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="sm:inline">Book Appointment</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBrowseServices}
              className="flex items-center justify-center gap-2 w-[45%] sm:w-auto px-4 sm:px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              Browse Services
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section - Doctor Image & Stats */}
        <motion.div whileHover={{ scale: 1.03 }} className="relative mt-10 lg:mt-0 flex justify-center">
          <div className="relative">
            <Image
              src="/abcares.webp"
              alt="Doctor Illustration"
              width={450}
              height={450}
              className="rounded-xl shadow-2xl object-contain max-h-[75vh]"
            />

            {/* Stats Section */}
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-full bg-gray-800 text-white rounded-xl shadow-lg p-4 sm:p-6 max-w-sm">
              <div className="flex justify-between gap-4">
                {[ 
                  { label: "Expert Doctors", value: "500+", color: "text-green-400" },
                  { label: "Patients Treated", value: "20K+", color: "text-blue-400" },
                  { label: "Medical Services", value: "100+", color: "text-yellow-400" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gray-900 rounded-lg shadow-md border border-gray-700 flex-1 text-center"
                  >
                    <h2 className={`${item.color} text-xl font-bold`}>{item.value}</h2>
                    <p className="text-sm text-gray-300">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
