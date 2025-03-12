import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">

                    {/* Left Section: About Us */}
                    <div className="flex flex-col items-start md:w-1/3">
                        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
                        <p className="text-sm text-gray-300 mb-4">
                            We offer the best MakeUp in Town.
                            <br /> Get in touch for custom designs and orders.
                        </p>
                        <a href="mailto:hexagonsservices@gmail.com" className="text-yellow-400 hover:text-yellow-500 transition duration-200">
                            hexagonsservices@gmail.com
                        </a>
                    </div>

                    {/* Middle Section: Quick Links */}
                    <div className="text-center md:w-1/3">
                        <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link to='/' className="text-lg text-gray-300 hover:text-yellow-400 
                                transition duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/book'
                                    className="text-lg text-gray-300 hover:text-yellow-400 transition duration-300">
                                    Book Your Appointment
                                </Link>
                            </li>
                            <li>
                                <Link to='/about'
                                    className="text-lg text-gray-300 hover:text-yellow-400 transition duration-300">
                                    About Us
                                </Link >
                            </li>
                            <li>
                                <Link to='/contact'
                                    className="text-lg text-gray-300 hover:text-yellow-400 transition duration-300">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to='/services'
                                    className="text-lg text-gray-300 hover:text-yellow-400 transition duration-300">
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section: Social Media Icons */}
                    <div className="flex flex-col items-start md:items-end md:w-1/3">
                        <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition duration-300 text-lg">
                                <FaTwitter size={28} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition duration-300 text-lg">
                                <FaInstagram size={28} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition duration-300 text-lg">
                                <FaFacebook size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                    © 2024 Powered By <span className='text-yellow-300'>Hexagon Digital Services</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
