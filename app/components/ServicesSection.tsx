import React from "react";
import { FaClinicMedical, FaPills, FaBaby, FaSyringe } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { MdCoronavirus } from "react-icons/md";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  link: string;
}

const ServicesSection: React.FC = () => {
  const ServiceCard: React.FC<ServiceCardProps> = ({
    icon: Icon,
    title,
    description,
    color,
  }) => {
    return (
      <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center ${color} shadow-lg mb-4`}
        >
          <Icon className="text-white text-4xl" />
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight text-center">
          {title}
        </h3>
        <p className="text-gray-600 mt-3 text-center text-sm sm:text-base">
          {description}
        </p>
      </div>
    );
  };

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
    <div className="bg-gray-50 py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Our Services
        </h2>
        <p className="text-gray-700 text-center mt-4 mb-12 max-w-2xl mx-auto text-lg">
          We offer a variety of medical services that bring quality care
          directly to your home.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="block">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                link={service.link}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;


