import React from 'react';
import NavBar from './navBar';
import Footer from './footer';

const teachers = [
  { name: 'Khagendra Misra',position:'Principal', contact: '+9770000000', photo: '/image/image1.avif' },
  { name: 'Safal sir', position:'sir',contact: '+9770000000', photo: '/image/image2.avif' },
  { name: 'Depesh timalsina', position:'Nerworking teacher',contact: '+9770000000', photo: '/image/image3.avif' },
  { name: 'Sagar sir', position:'Computer teacher',contact: '+9770000000', photo: '/image/image4.avif' },
    { name: 'Khagendra Misra', position:'#',contact: '+9770000000', photo: '/image/image1.avif' },
  { name: 'Safal sir',position:'#' ,contact: '+9770000000', photo: '/image/image2.avif' },
  { name: 'Depesh timalsina', position:'#',contact: '+9770000000', photo: '/image/image3.avif' },
  { name: 'Sagar sir', position:'#',contact: '+9770000000', photo: '/image/image4.avif' },
    { name: 'Khagendra Misra',position:'#', contact: '+9770000000', photo: '/image/image1.avif' },
  { name: 'Safal sir',position:'#', contact: '+9770000000', photo: '/image/image2.avif' },
  { name: 'Depesh timalsina',position:'#', contact: '+9770000000', photo: '/image/image3.avif' },
  { name: 'Sagar sir', position:'#',contact: '+9770000000', photo: '/image/image4.avif' },
];

const Teacher = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-blue-100 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Our Teachers</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
              />
              <h2 className="text-lg font-semibold text-center mb-2">{teacher.name}</h2>
              <h2 className="text-sm font-semibold text-center mb-2">{teacher.position}</h2>
              <a
                href={`tel:${teacher.contact}`}
                className="text-blue-500 underline text-center"
              >
                {teacher.contact}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teacher;