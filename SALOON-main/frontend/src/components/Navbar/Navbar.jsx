import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // React icons for the menu
import { GiConfirmed } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the hamburger menu
    const toggleMenu = (event) => {
        event.stopPropagation(); // Prevent the click event from closing the menu
        setIsOpen(!isOpen);
    };

    // Close the menu if clicking outside of the navbar when mobile menu is open
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.custom-navbar')) {
                setIsOpen(false); // Close the menu if clicked outside
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
        } else {
            window.removeEventListener('click', handleClickOutside);
        }

        return () => window.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <nav className="custom-navbar bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white
         shadow-lg relative w-full z-10 transition-all duration-500 ease-in-out transform hover:shadow-2xl">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink to='/'>
                            <h1 className="text-3xl font-extrabold tracking-tight hover:text-yellow-500 transition duration-300">Saloon</h1>
                        </NavLink>
                    </div>

                    {/* Menu for larger screens */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <NavLink to='/' className="hover:text-yellow-500 transition duration-300">Home</NavLink>
                        <NavLink to='/about' className="hover:text-yellow-500 transition duration-300">About</NavLink>
                        <NavLink to='/gallery' className="hover:text-yellow-500 transition duration-300">Gallery</NavLink>
                        <NavLink to='/contact' className="hover:text-yellow-500 transition duration-300">Contact</NavLink>
                        <NavLink to='/services' className="hover:text-yellow-500 transition duration-300">Services</NavLink>

                        <NavLink to='/book' className="hover:text-yellow-500 transition duration-300">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full 
                        flex items-center space-x-1 transition transform hover:scale-105 duration-300">
                                <GiConfirmed />
                                <span>Book Your Appointment</span>
                            </button>
                        </NavLink>
                    </div>

                    {/* Admin Button */}
                    {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full flex items-center space-x-1 transition transform hover:scale-105 duration-300">
                        <AiOutlineUser />
                        <span>Admin</span>
                    </button> */}

                    {/* Hamburger menu for smaller screens */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className={`text-white focus:outline-none transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with smoother slide down animation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
                    <NavLink to='/' className="block text-white hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Home</NavLink>
                    <NavLink to='/about' className="block text-white hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">About</NavLink>
                    <NavLink to='/gallery' className="block text-white hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Gallery</NavLink>
                    <NavLink to='/contact' className="block text-white hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Contact</NavLink>
                    <NavLink to='/services' className="block text-white hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Services</NavLink>
                    <NavLink to='/book' className="block text-white hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full 
                        flex items-center space-x-1 transition transform hover:scale-105 duration-300">
                            <GiConfirmed />
                            <span>Book Your Appointment</span>
                        </button>
                    </NavLink>
                </div>

                {/* Admin Button */}
                {/* <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-1 transition transform hover:scale-105 duration-300">
                    <AiOutlineUser />
                    <span>Admin</span>
                </button> */}
            </div>
        </nav>
    );
};

export default Navbar;