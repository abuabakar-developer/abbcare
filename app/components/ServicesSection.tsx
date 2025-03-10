"use client";
import React from "react";
import { FaClinicMedical, FaPills, FaBaby, FaSyringe } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { MdCoronavirus } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  link: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
  index,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="bg-gray-900 shadow-xl rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800"
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center ${color} shadow-lg mb-4`}
      >
        <Icon className="text-white text-3xl" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-200 text-center">
        {title}
      </h3>
      <p className="text-gray-400 mt-2 text-center text-sm md:text-base">
        {description}
      </p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaClinicMedical,
      title: "Home Lab Services",
      description: "Get diagnostic tests conveniently at your home.",
      color: "bg-blue-600",
      link: "/lab",
    },
    {
      icon: FaPills,
      title: "Home Pharmacy Services",
      description: "Order medicines and have them delivered to your door.",
      color: "bg-green-600",
      link: "/medicines",
    },
    {
      icon: GiHealthNormal,
      title: "Home Physio Services",
      description: "Expert physiotherapy care at the comfort of your home.",
      color: "bg-purple-600",
      link: "/rehabilitationServices",
    },
    {
      icon: FaSyringe,
      title: "Home Vaccination Services",
      description: "We provide safe and reliable vaccinations for all ages.",
      color: "bg-orange-600",
      link: "/vaccination",
    },
    {
      icon: FaBaby,
      title: "Mother & Baby Care Plan",
      description: "Comprehensive care plans for both mother and baby.",
      color: "bg-pink-600",
      link: "/mothercare",
    },
    {
      icon: MdCoronavirus,
      title: "Tele Clinics",
      description: "Get tested and treated for COVID-19 at home.",
      color: "bg-teal-600",
      link: "/tele",
    },
  ];

  return (
    <div className="bg-gray-950 py-12 pt-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-center"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
                    text-gray-400 text-center mt-4 mb-10 max-w-2xl mx-auto text-base md:text-lg"
        >
          We offer a variety of medical services that bring quality care directly to your home.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="block">
              <ServiceCard
                index={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                link={service.link}
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
