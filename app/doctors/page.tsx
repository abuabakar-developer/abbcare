'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  faHeartPulse, faFaceSmile, faLungs, faBrain, faTooth,
  faBone, faEye, faChild, faCapsules, faMicroscope
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Specialty {
  title: string;
  icon: IconDefinition;
  color: string;
}

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  imageUrl: string;
}

const doctorsData: Doctor[] = [
  { name: 'Dr. Ahmad Al-Sayed', specialty: 'Cardiology', experience: '10 years', rating: 4.8, imageUrl: '/ur1.webp' },
  { name: 'Dr. Amina Ibrahim', specialty: 'Cardiology', experience: '12 years', rating: 4.9, imageUrl: '/gn1.jpg' },
  { name: 'Dr. Noor Ahmed', specialty: 'Pediatrics', experience: '7 years', rating: 4.6, imageUrl: '/ab3.jpg' },
  { name: 'Dr. Yusuf Al-Mansoor', specialty: 'Orthopedics', experience: '15 years', rating: 4.9, imageUrl: '/g4.webp' },
  { name: 'Dr. Zain', specialty: 'Pharmacology', experience: '9 years', rating: 4.7, imageUrl: '/dn2.jpg' },
  { name: 'Dr. Khalid Al-Farsi', specialty: 'Pharmacology', experience: '11 years', rating: 4.8, imageUrl: '/gf3.jpg' },
  { name: 'Dr. Junaid ', specialty: 'Pathology', experience: '10 years', rating: 4.7, imageUrl: '/ab3.jpg' },
  { name: 'Dr. Amina Ibrahim ', specialty: 'Pediatrics', experience: '10 years', rating: 4.7, imageUrl: '/gn1.jpg' },
  { name: 'Dr. Khawar', specialty: 'Ophthalmology', experience: '10 years', rating: 4.7, imageUrl: '/images.jpg' },
  { name: 'Dr. Amina', specialty: 'Ophthalmology', experience: '10 years', rating: 4.7, imageUrl: '/gn4.jpg' },
  { name: 'Dr. Saleem Sb', specialty: 'Dentistry', experience: '10 years', rating: 4.7, imageUrl: '/dc1.jpg' },
  { name: 'Dr. Fakhar', specialty: 'Dentistry', experience: '10 years', rating: 4.7, imageUrl: '/dc2.jpg' },
  { name: 'Dr. Sadeeq', specialty: 'Pathology', experience: '10 years', rating: 4.7, imageUrl: '/dn3.avif' },
  { name: 'Dr. Idrees', specialty: 'Orthopedics', experience: '10 years', rating: 4.7, imageUrl: '/personal.jpg' },
  { name: 'Dr. Altaf', specialty: 'Neurology', experience: '10 years', rating: 4.7, imageUrl: '/ab.webp' },
  { name: 'Dr. Siddiqe ', specialty: 'Neurology', experience: '10 years', rating: 4.7, imageUrl: '/ab.webp' },
  { name: 'Dr. Iqrar Raza', specialty: 'Pulmonology', experience: '10 years', rating: 4.7, imageUrl: '/ur2.avif' },
  { name: 'Dr. Talha Muneer', specialty: 'Pulmonology', experience: '10 years', rating: 4.7, imageUrl: '/ur1.webp' },
  { name: 'Dr. Tassawar Hayat', specialty: 'Dermatology', experience: '10 years', rating: 4.7, imageUrl: '/dn2.jpg' },
  { name: 'Dr. Ubaid Shah', specialty: 'Dermatology', experience: '10 years', rating: 4.7, imageUrl: '/gf3.jpg' },
]; 

const specialties: Specialty[] = [
  { title: 'Cardiology', icon: faHeartPulse, color: 'text-red-500' },
  { title: 'Dermatology', icon: faFaceSmile, color: 'text-yellow-500' },
  { title: 'Pulmonology', icon: faLungs, color: 'text-blue-500' },
  { title: 'Neurology', icon: faBrain, color: 'text-purple-500' },
  { title: 'Dentistry', icon: faTooth, color: 'text-teal-500' },
  { title: 'Orthopedics', icon: faBone, color: 'text-orange-500' },
  { title: 'Ophthalmology', icon: faEye, color: 'text-indigo-500' },
  { title: 'Pediatrics', icon: faChild, color: 'text-pink-500' },
  { title: 'Pharmacology', icon: faCapsules, color: 'text-green-500' },
  { title: 'Pathology', icon: faMicroscope, color: 'text-gray-500' },
];

const DoctorsPage: React.FC = () => {
  const router = useRouter();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const doctorsRef = useRef<HTMLDivElement | null>(null);

  const filteredDoctors = selectedSpecialty
    ? doctorsData.filter((doctor) => doctor.specialty === selectedSpecialty)
    : [];

  const handleSpecialtySelection = (specialtyTitle: string) => {
    setSelectedSpecialty(specialtyTitle);
    if (doctorsRef.current) {
      doctorsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookAppointment = (doctorName: string) => {
    // Navigate to the book appointment page for the selected doctor
    router.push(`/book-appointment?doctor=${doctorName}`);
  };

  return (
    <section className="bg-gray-950 min-h-screen py-12 px-6 sm:px-10 md:px-14 lg:px-20 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Find a Specialist
        </h1>
        <p className="text-gray-400 text-center mt-4 mb-10 max-w-2xl mx-auto text-base md:text-lg">
          Browse by specialty and book appointments with ease.
        </p>
      </motion.div>

      {/* Specialty Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {specialties.map((specialty, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-5 bg-gray-800 shadow-lg rounded-lg cursor-pointer transition-all duration-300 text-center border-2 border-transparent hover:border-green-500 ${
              selectedSpecialty === specialty.title ? 'border-green-500 bg-green-500 text-white' : ''
            }`}
            onClick={() => handleSpecialtySelection(specialty.title)}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 mx-auto mb-4">
              <FontAwesomeIcon icon={specialty.icon} className={`text-3xl ${specialty.color}`} />
            </div>
            <h3 className="text-lg font-semibold">{specialty.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Doctors Section */}
      <div ref={doctorsRef} className="mt-12">
        {selectedSpecialty && (
          <>
            <h2 className="text-center text-2xl font-semibold mb-6 text-green-400">
              {filteredDoctors.length} Doctor(s) Found for {selectedSpecialty}
            </h2>

            {filteredDoctors.length === 0 ? (
              <p className="text-center text-gray-400 text-lg">No doctors available.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredDoctors.map((doctor, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="p-6 bg-gray-800 shadow-xl rounded-lg text-center hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} layout="fill" objectFit="cover" className="rounded-full border-2 border-green-500" />
                    </div>
                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                    <p className="text-gray-300 text-sm">{doctor.experience} of experience</p>
                    <p className="text-yellow-400 font-semibold">⭐ {doctor.rating}</p>
                    <button
                      onClick={() => handleBookAppointment(doctor.name)}
                      className="mt-4 py-2 px-6 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300"
                    >
                      Book Appointment
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default DoctorsPage;
