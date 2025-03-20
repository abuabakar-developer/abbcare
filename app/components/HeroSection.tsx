"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BackgroundLines from "./BackgroundLines";

const HeroSection = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push("/book-appointment");
  };

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden flex flex-col items-center justify-center min-h-[80vh] w-full pt-4 sm:pt-6">
      <BackgroundLines />

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 relative z-10">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-1 text-center md:text-left space-y-4"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Premium Healthcare for Everyone
          </h1>
          <p className="text-base sm:text-lg max-w-lg mx-auto md:mx-0 text-gray-300 leading-relaxed">
            Our expert doctors deliver world-class medical care tailored to your health needs.
          </p>

          {/* Book Appointment Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookAppointment}
            className="mt-5 py-2 px-5 sm:py-3 sm:px-7 bg-green-600 text-white font-semibold text-sm sm:text-lg rounded-full hover:bg-green-700 shadow-xl transition duration-300 flex items-center gap-2"
            id="book-appointment-btn"
          >
            Book Appointment <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Right: Image with Overlayed Statistics */}
        <div className="flex-1 flex justify-center md:justify-end mt-14 sm:mt-16 relative">
          <motion.div whileHover={{ scale: 1.05 }} className="relative group overflow-visible">
            {/* Image */}
            <div className="relative">
              <Image
                src="/abcares.webp"
                alt="Doctor Illustration"
                width={450}
                height={320}
                className="rounded-xl shadow-2xl transition-transform duration-300"
                id="doctor-image"
              />

              {/* Statistics Section */}
              <div className="absolute bottom-0 left-0 w-full bg-gray-800 text-white rounded-t-xl shadow-lg p-4 sm:p-6">
                <div className="flex flex-row justify-center sm:justify-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-3 sm:p-4 bg-gray-900 rounded-md shadow-md border border-gray-700 flex-1"
                  >
                    <h2 className="text-base sm:text-xl font-bold text-green-400">500+</h2>
                    <p className="text-xs sm:text-sm text-gray-300">Expert Doctors</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-3 sm:p-4 bg-gray-900 rounded-md shadow-md border border-gray-700 flex-1"
                  >
                    <h2 className="text-base sm:text-xl font-bold text-blue-400">20K+</h2>
                    <p className="text-xs sm:text-sm text-gray-300">Patients Treated</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-3 sm:p-4 bg-gray-900 rounded-md shadow-md border border-gray-700 flex-1"
                  >
                    <h2 className="text-base sm:text-xl font-bold text-yellow-400">100+</h2>
                    <p className="text-xs sm:text-sm text-gray-300">Medical Services</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved Path SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 250 300 Q 500 100, 750 300"
          stroke="yellow"
          strokeWidth="3"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </section>
  );
};

export default HeroSection;
