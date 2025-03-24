"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackgroundLines from "./BackgroundLines";
import { UserIcon, HeartIcon, PlusCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push("/book-appointment");
  };

  return (
    <section className="relative bg-gray-900 text-white py-12 sm:py-16 md:py-24 overflow-visible">
      <BackgroundLines />

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 relative z-10">
        {/* Left: Text Content */}
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

          {/* Centering Button on Small Screens */}
          <div className="flex justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookAppointment}
              className="mt-4 py-3 px-6 bg-green-600 text-white font-semibold text-sm sm:text-base rounded-full hover:bg-green-700 shadow-lg transition duration-300 flex items-center gap-2"
            >
              Book Appointment
              <ArrowRightIcon className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Doctor Image with Glow Effect */}
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

      {/* Statistics Section - Half inside Hero & Half Below */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] w-full max-w-5xl bg-gray-800 bg-opacity-90 rounded-2xl shadow-xl px-8 py-6 flex flex-wrap justify-around items-center z-20 backdrop-blur-md border border-gray-700">
        <div className="flex flex-col items-center space-y-1">
          <UserIcon className="h-10 w-10 text-green-400" />
          <span className="text-2xl font-bold text-green-400">+102</span>
          <span className="text-sm text-gray-300">Doctors</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <HeartIcon className="h-10 w-10 text-blue-400" />
          <span className="text-2xl font-bold text-blue-400">2K+</span>
          <span className="text-sm text-gray-300">Patient Services</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <PlusCircleIcon className="h-10 w-10 text-yellow-400" />
          <span className="text-2xl font-bold text-yellow-400">32+</span>
          <span className="text-sm text-gray-300">Treatments</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
