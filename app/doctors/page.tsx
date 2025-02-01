'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {
  faHeartPulse,
  faFaceSmile,
  faLungs,
  faBrain,
  faTooth,
  faBone,
  faEye,
  faChild,
  faCapsules,
  faMicroscope,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Define the specialties
interface Specialty {
  title: string;
  icon: IconDefinition;
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
  { name: 'Dr. Sufyan muqeem ', specialty: 'Orthopedics', experience: '10 years', rating: 4.7, imageUrl: '/ab.webp' },
  { name: 'Dr. Junaid ', specialty: 'Pathology', experience: '10 years', rating: 4.7, imageUrl: '/ab3.jpg' },
  { name: 'Dr. Umair ', specialty: 'Pediatrics', experience: '10 years', rating: 4.7, imageUrl: '/gn1.jpg' },
  { name: 'Dr. Khawar', specialty: 'Ophthalmology', experience: '10 years', rating: 4.7, imageUrl: '/images.jpg' },
  { name: 'Dr. Faizan', specialty: 'Ophthalmology', experience: '10 years', rating: 4.7, imageUrl: '/gn4.jpg' },
  { name: 'Dr. Saleem Sb', specialty: 'Dentistry', experience: '10 years', rating: 4.7, imageUrl: '/images(1).jpg' },
  { name: 'Dr. Fakhar', specialty: 'Dentistry', experience: '10 years', rating: 4.7, imageUrl: '/prof. Muhammad Shahid..jpg' },
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
  { title: 'Cardiology', icon: faHeartPulse },
  { title: 'Dermatology', icon: faFaceSmile },
  { title: 'Pulmonology', icon: faLungs },
  { title: 'Neurology', icon: faBrain },
  { title: 'Dentistry', icon: faTooth },
  { title: 'Orthopedics', icon: faBone },
  { title: 'Ophthalmology', icon: faEye },
  { title: 'Pediatrics', icon: faChild },
  { title: 'Pharmacology', icon: faCapsules },
  { title: 'Pathology', icon: faMicroscope },
];

const DoctorsPage: React.FC = () => {
  const router = useRouter();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const doctorsRef = useRef<HTMLDivElement | null>(null);

  // Filter doctors based on selected specialty
  const filteredDoctors = selectedSpecialty
    ? doctorsData.filter((doctor) => doctor.specialty === selectedSpecialty)
    : [];

  const handleSpecialtyClick = (specialty: string) => {
    setSelectedSpecialty(specialty);

    // Scroll to doctors section
    setTimeout(() => {
      doctorsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  const handleBookAppointment = (doctorName: string) => {
    router.push(`/book-appointment?doctor=${encodeURIComponent(doctorName)}`);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-16 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900">Our Doctors</h1>
        <p className="text-lg sm:text-xl text-blue-700 mt-4">
          Meet our highly skilled specialists, dedicated to providing the best healthcare services.
        </p>
      </div>

      {/* Specialties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className={`p-6 sm:p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ${
              selectedSpecialty === specialty.title ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleSpecialtyClick(specialty.title)}
          >
            <div className="flex items-center justify-center bg-blue-500 text-white w-16 h-16 rounded-full mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={specialty.icon} className="text-3xl" />
            </div>
            <h3 className="text-center text-xl sm:text-2xl font-semibold mb-4">{specialty.title}</h3>
          </div>
        ))}
      </div>

      {/* Doctors List */}
      <div ref={doctorsRef} className="mt-12">
        {selectedSpecialty && (
          <>
            <h2 className="text-center text-2xl font-semibold mb-6">
              {filteredDoctors.length} Doctor(s) Found for {selectedSpecialty}
            </h2>

            {filteredDoctors.length === 0 ? (
              <p className="text-center text-gray-600">No doctors available for this specialty.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.map((doctor, index) => (
                  <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
                    <Image src={doctor.imageUrl} alt={doctor.name} width={150} height={150} className="rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.experience} experience</p>
                    <p className="text-yellow-500">⭐ {doctor.rating}</p>
                    <button
                      onClick={() => handleBookAppointment(doctor.name)}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Book Appointment
                    </button>
                  </div>
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




