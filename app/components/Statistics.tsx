"use client";

import { motion } from "framer-motion";
import { UserIcon, HeartIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const stats = [
  { icon: <UserIcon className="h-12 w-12 text-green-400" />, value: "+102", label: "Doctors", color: "text-green-400" },
  { icon: <HeartIcon className="h-12 w-12 text-blue-400" />, value: "2K+", label: "Patient Services", color: "text-blue-400" },
  { icon: <PlusCircleIcon className="h-12 w-12 text-yellow-400" />, value: "32+", label: "Innovative Treatments", color: "text-yellow-400" },
];

const Statistics = () => {
  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300"
          >
            {stat.icon}
            <span className={`text-3xl font-bold mt-3 ${stat.color}`}>{stat.value}</span>
            <span className="text-sm text-gray-400">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
