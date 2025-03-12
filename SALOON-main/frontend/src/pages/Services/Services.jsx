import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

// Icons for each service
import { FaCut, FaPaintBrush, FaSpa, FaHandHoldingWater, FaCogs, FaHandSparkles, FaFeather, FaHotjar } from 'react-icons/fa';

const Services = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="bg-gradient-to-b from-gray-800 to-black py-10 px-5 md:px-20 text-white">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold mb-4 text-gray-100 animate-fadeIn">Our Services</h1>
                    <p className="text-lg text-gray-300 animate-fadeIn">Some of the premium services we provide to our customers</p>
                </div>

                {/* Timeline Section */}
                <div>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {/* Service 1 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2">
                                <FaCut className="text-white h-5 w-5" />
                            </div>
                            <div className="timeline-start md:text-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Haircut and Styling</div>
                                <p>
                                    Receive a tailored haircut and style that suits your face shape, hair type, and style
                                    preference. Includes shampoo, scalp massage, and blow-dry finish. Our stylists provide
                                    tips to maintain your look at home, ensuring a polished, refreshed appearance that reflects
                                    your unique personality and lifestyle.
                                </p>
                                <img src="https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?ga=GA1.1.1284074313.1728821547&semt=ais_hybrid" alt="Haircut and Styling" className="w-120 h-80 mt-4 rounded-md shadow-lg" />
                            </div>
                        </li>

                        {/* Service 2 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-red-500 to-yellow-500 rounded-full p-2">
                                <FaPaintBrush className="text-white h-5 w-5" />
                            </div>
                            <div className="timeline-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Hair Coloring</div>
                                <p>
                                    Enhance your look with custom hair color, including single-process, highlights, balayage,
                                    or ombre. A consultation ensures the perfect shade, complementing your style and skin tone.
                                    Our ammonia-free dyes add vibrancy and shine, creating a professional finish that
                                    transforms your hair with stunning depth and dimension.
                                </p>
                                <img src="https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?ga=GA1.1.1284074313.1728821547&semt=ais_hybrid" alt="Hair Coloring" className="w-120 h-80 mt-4 rounded-md shadow-lg" />
                            </div>
                        </li>

                        {/* Service 3 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-2">
                                <FaSpa className="text-white h-5 w-5" />
                            </div>
                            <div className="timeline-start md:text-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Keratin Treatment</div>
                                <p>
                                    Achieve smooth, frizz-free hair with our keratin treatment, which infuses protein for
                                    lasting shine and manageability. Ideal for all hair types, this service reduces styling
                                    time, strengthens hair, and delivers up to three months of silky softness, making daily
                                    care effortless and enjoyable.
                                </p>
                                <img src="https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?ga=GA1.1.1284074313.1728821547&semt=ais_hybrid" alt="Keratin Treatment" className="w-120 h-80 mt-4 rounded-md shadow-lg" />
                            </div>
                        </li>

                        {/* Service 4 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-pink-500 to-lime-700 rounded-full p-2">
                                <FaHandHoldingWater className="text-white h-5 w-5" />
                            </div>
                            <div className="timeline-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Facial Treatment</div>
                                <p>
                                    Our facial treatment includes cleansing, exfoliating, and hydrating steps to refresh and
                                    brighten your skin. Tailored to individual skin needs, it improves texture, reduces
                                    blemishes, and provides a radiant, youthful glow. Ideal for regular upkeep, this treatment
                                    leaves your complexion looking clear, balanced, and revitalized.
                                </p>
                                <img src="https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?ga=GA1.1.1284074313.1728821547&semt=ais_hybrid" alt="Facial Treatment" className="w-120 h-80 mt-4 rounded-md shadow-lg" />
                            </div>
                        </li>

                        {/* Service 5 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-green-500 to-blue-800 rounded-full p-2">
                                <FaHandSparkles className="text-white h-5 w-5" />
                            </div>
                            <div className="timeline-start md:text-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Manicure and Pedicure</div>
                                <p>
                                    Treat your nails with a manicure and pedicure, featuring nail shaping, cuticle care, and
                                    relaxing massage. Choose from regular, gel, or acrylic polish, with added nail art options
                                    for a personalized touch. Perfect for maintaining hand and foot elegance, leaving you
                                    feeling polished and pampered.
                                </p>
                                <img src="https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?ga=GA1.1.1284074313.1728821547&semt=ais_hybrid" alt="Manicure and Pedicure" className="w-120 h-80 mt-4 rounded-md shadow-lg" />
                            </div>
                        </li>

                        {/* Service 6 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-red-800 to-yellow-500 rounded-full p-2">
                                <FaHotjar className="text-white h-5 w-5" />
                            </div>
                            <div className="timeline-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Body Massage</div>
                                <p>
                                    Unwind with a full-body massage using techniques like Swedish or deep tissue. Our
                                    therapists relieve muscle tension, promote relaxation, and improve circulation. Essential
                                    oils enhance the experience, leaving you feeling refreshed, revitalized, and ready to take
                                    on the day with renewed energy and ease.
                                </p>
                                <img src="https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?ga=GA1.1.1284074313.1728821547&semt=ais_hybrid" alt="Body Massage" className="w-120 h-80 mt-4 rounded-md shadow-lg" />
                            </div>
                        </li>

                        {/* Service 7 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-gray-400 to-teal-500 rounded-full p-2">
                                <FaFeather className="text-white h-5 w-5" />
                            </div>
                            <div className="timeline-start md:text-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Eyebrow and Eyelash Services</div>
                                <p>
                                    Enjoy smooth, hair-free skin with our gentle waxing options for face, arms, legs, and
                                    full body. High-quality wax ensures minimal discomfort, leaving skin soft and glowing.
                                    Ideal for all skin types, this service provides long-lasting results, maintaining polished,
                                    hair-free skin for weeks.
                                </p>
                                <img src="https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?ga=GA1.1.1284074313.1728821547&semt=ais_hybrid" alt="Eyebrow and Eyelash Services" className="w-120 h-80 mt-4 rounded-md shadow-lg" />
                            </div>
                        </li>

                        {/* Service 8 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full p-2">
                                <FaCogs className="text-white h-5 w-5" />
                            </div>
                            <div className="timeline-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Waxing Services</div>
                                <p>
                                    Enjoy smooth, hair-free skin with our gentle waxing options for face, arms, legs, and
                                    full body. High-quality wax ensures minimal discomfort, leaving skin soft and glowing.
                                    Ideal for all skin types, this service provides long-lasting results, maintaining polished,
                                    hair-free skin for weeks.
                                </p>
                                <img src="https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?ga=GA1.1.1284074313.1728821547&semt=ais_hybrid" 
                                alt="Waxing Services" className="w-400 h-80 mt-4 rounded-md shadow-lg" />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="text-center mt-10 animate-bounce">
                    <h2 className="text-2xl font-bold mb-4 text-gray-100">Wanna Try!</h2>
                    <Link to='/book'>
                        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white 
                    font-semibold rounded-md hover:bg-gradient-to-l hover:from-yellow-500 hover:to-pink-500 
                    transition duration-300">
                            Click Here
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Services;
