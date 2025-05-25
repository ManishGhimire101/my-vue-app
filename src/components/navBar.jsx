import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const ctvt = "./public/logo/ctevtlog.png";
    const logo = "./public/logo/logo.png";
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize(); // Check screen size on initial render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className="bg-blue-500 h-20 w-full flex items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    {!isSmallScreen && (
                        <div>
                            <img className="h-20 w-20" src={ctvt} alt="CTEVT Logo" />
                        </div>
                    )}
                    {isSmallScreen && (
                        <button
                            className="text-white focus:outline-none"
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    )}
                </div>
                {!isSmallScreen && (
                    <ul className="flex space-x-4 justify-center">
                        <Link to="/home"><li className="Homebtn">Home</li></Link>
                        <Link to="/gallery"><li className="Homebtn">Gallery</li></Link>
                        <Link to="/courses"><li className="Homebtn">Courses</li></Link>
                        <Link to="/teacher"><li className="Homebtn">Teachers</li></Link>
                        <Link to="/contact"><li className="Homebtn">Contact</li></Link>
                        <Link to="/about"><li className="Homebtn">About Us</li></Link>

                    </ul>
                )}
                {!isSmallScreen && (
                    <div>
                        <img className="h-20 w-20" src={logo} alt="Logo" />
                    </div>
                )}
            </nav>
            {isSmallScreen && isNavOpen && (
                <div className="bg-blue-500 w-full flex flex-col items-center space-y-4 py-4">
                    <Link to="/home" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
                    <Link to="/courses" className="text-white hover:text-gray-300">Courses</Link>
                    <Link to="/teacher" className="text-white hover:text-gray-300">Teachers</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>

                </div>
            )}
        </>
    );
};

export default NavBar;