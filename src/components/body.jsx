import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Body = () => {
  const images = [
    '/image/image1.avif',
    '/image/image2.avif',
    '/image/image3.avif',
    '/image/image4.avif',
    '/image/image5.avif',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [images.length, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <h1
        className="absolute left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl font-bold text-white z-10"
        style={{ top: window.innerWidth < 768 ? '4rem' : '6rem' }}
      >
        Kankai Polytechnic Institute
      </h1>
      <h2
        className="absolute left-1/2 transform -translate-x-1/2 text-lg md:text-2xl font-semibold text-white z-10"
        style={{ top: window.innerWidth < 768 ? '8rem' : '10rem' }}
      >
        Durgapur-1, Jhapa
      </h2>
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full z-10"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Body;