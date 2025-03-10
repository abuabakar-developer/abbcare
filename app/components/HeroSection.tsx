"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { motion } from "framer-motion";
import BackgroundLines from "./BackgroundLines";
import { UserIcon, HeartIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const router = useRouter(); // Initialize router

  const handleBookAppointment = () => {
    router.push("/book-appointment"); // Navigate to book-appointment page
  };

  return (
    <section
      id="hero-section"
      className="relative bg-gray-900 text-white py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      <BackgroundLines />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 relative z-10">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Trusted Healthcare for Everyone
          </h1>
          <p className="text-sm sm:text-base max-w-md mx-auto md:mx-0 text-gray-300">
            Our expert doctors provide top-notch medical care tailored to your needs. Your health is our priority.
          </p>
          
          {/* Book Appointment Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookAppointment} // Handle button click
            className="mt-4 py-3 px-6 bg-green-600 text-white font-semibold text-sm sm:text-base rounded-full hover:bg-green-700 shadow-lg transition duration-300"
          >
            Book Appointment
          </motion.button>

          {/* Statistics Section */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <UserIcon className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold text-green-400">+102</span>
              <span className="text-sm text-gray-300">Doctors</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <HeartIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-blue-400">2K+</span>
              <span className="text-sm text-gray-300">Patient Services</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <PlusCircleIcon className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold text-yellow-400">32+</span>
              <span className="text-sm text-gray-300">Innovative Treatments</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Image with hover glow effect */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 relative">
          <motion.div whileHover={{ scale: 1.05 }} className="relative group overflow-hidden">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
              <div className="absolute w-44 h-44 bg-green-500 opacity-0 group-hover:opacity-30 rounded-full blur-xl transition duration-300"></div>
            </div>
            <Image
              src="/abcares.webp"
              alt="Doctor Illustration"
              width={450}
              height={350}
              className="rounded-lg shadow-2xl transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
