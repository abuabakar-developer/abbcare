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
  faCalendarAlt,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Updated type for the ref
  const doctorsSectionRef = useRef<HTMLDivElement | null>(null);

  const fetchDoctors = async (specialty: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/doctors?specialty=${specialty}`);
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Failed to fetch doctors', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSpecialtyClick = (specialty: string) => {
    setSelectedSpecialty(specialty);
    fetchDoctors(specialty);

    if (doctorsSectionRef.current) {
      doctorsSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
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

      <div ref={doctorsSectionRef} className="mt-12">
        {loading && <p className="text-center text-blue-500">Loading doctors...</p>}

        {!loading && doctors.length > 0 && selectedSpecialty && (
          <div>
            <h2 className="text-center text-2xl font-semibold mb-4">
              {doctors.length} Doctor(s) Found for {selectedSpecialty}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="relative group p-6 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2"
                >
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={96}
                    height={96}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-center text-xl font-bold">{doctor.name}</h4>
                  <p className="text-center text-gray-600">{doctor.experience} Experience</p>
                  <p className="text-center text-yellow-500">⭐ {doctor.rating}</p>

                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                    <button
                      onClick={() => handleBookAppointment(doctor.name)}
                      className="bg-blue-500 text-white p-2 rounded-full mx-2"
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-xl" />
                    </button>
                    <button className="bg-green-500 text-white p-2 rounded-full mx-2">
                      <FontAwesomeIcon icon={faInfoCircle} className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && doctors.length === 0 && selectedSpecialty && (
          <p className="text-center text-gray-600">
            No doctors found for {selectedSpecialty}.
          </p>
        )}
      </div>
    </section>
  );
};

export default DoctorsPage;

