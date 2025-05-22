import React, { useState } from 'react';
import NavBar from './navBar';
import Footer from './footer';
const free = <h1 className='text-red-500'> Free</h1>
const courseDetails = [
  { title: 'Diploma in IT', details: 'this is the 3 years structure course with very good subjects with 6 semesters', fee: 'Rs.55,000 per year' },
  { title: 'Diploma in Civil Engineering', details: 'This is 3 years course with 6 semester having a strong foundation of civil ', fee: 'Rs.50,000 per year' },
  { title: 'Pre-Diploma in IT', details: 'This is the course with 2 years has the 4 semester and wide range of practical to students , We make students able to work as any feild with 19 months of internship ', fee:free },
  { title: 'Pre-Diploma in civil Engineering', details: 'This course is also 2ith 2 years and have ....', fee: free },
//   { title: '#', details: '#', fee: '#' },
//   { title: '#', details: '#', fee: '#' },
//   { title: '#', details: '#', fee: '#' },
//   { title: '#', details: '#', fee: '#' },
 ];

const Courses = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <>
      <NavBar />
      <div className="min-screen bg-blue-100 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Courses</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 relative">
          {courseDetails.map((course, index) => (
            <div
              key={index}
              className={`bg-blue-500 text-white w-[150px] h-[150px] md:w-[250px] md:h-[250px] flex flex-col justify-center items-center rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-transform duration-500 relative ${hoveredCourse === index && window.innerWidth >= 768 ? 'scale-200 z-10' : ''} ${hoveredCourse === index && window.innerWidth < 768 ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-10' : ''}`}
              onMouseEnter={() => window.innerWidth >= 768 && setHoveredCourse(index)}
              onMouseLeave={() => window.innerWidth >= 768 && setHoveredCourse(null)}
              onClick={() => window.innerWidth < 768 && setHoveredCourse(index)}
            >
              <h2 className="text-sm md:text-xl font-semibold text-center">{course.title}</h2>
              {hoveredCourse === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-blue-700 text-white flex flex-col justify-center items-center rounded-lg p-4 z-20">
                  <h1 className="text-sm font-bold mb-2">{course.title}</h1>
                  <p className="text-xs mb-2">{course.details}</p>
                  <p className="text-xs font-bold">Fee: {course.fee}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;