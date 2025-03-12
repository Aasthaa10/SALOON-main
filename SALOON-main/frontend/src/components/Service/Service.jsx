import React from 'react';

import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <>
            {/* Main section with dark gradient effect */}
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start md:text-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Haircut and Styling</div>
                                Receive a tailored haircut and style that suits your face shape, hair type, and style preference.
                                Includes shampoo, scalp massage, and blow-dry finish. Our stylists provide tips to maintain
                                your look at home, ensuring a polished, refreshed appearance that reflects your unique
                                personality and lifestyle.
                            </div>
                        </li>

                        {/* Service 2 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-red-500 to-yellow-500 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Hair Coloring</div>
                                Enhance your look with custom hair color, including single-process, highlights, balayage, or
                                ombre. A consultation ensures the perfect shade, complementing your style and skin tone. Our
                                ammonia-free dyes add vibrancy and shine, creating a professional finish that transforms your
                                hair with stunning depth and dimension.
                            </div>
                        </li>

                        {/* Service 3 */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start md:text-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Keratin Treatment</div>
                                Achieve smooth, frizz-free hair with our keratin treatment, which infuses protein for lasting
                                shine and manageability. Ideal for all hair types, this service reduces styling time,
                                strengthens hair, and delivers up to three months of silky softness, making daily care
                                effortless and enjoyable.
                            </div>
                        </li>

                        {/* Additional services */}
                        {/* Add other services as needed */}
                        <li className="animate-slideIn mb-10">
                            <div className="timeline-middle bg-gradient-to-r from-red-500 to-yellow-500 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end text-gray-300 hover:text-white transition duration-300">
                                <div className="text-lg font-bold mb-2">Facial Treatment</div>
                                Our facial treatment includes cleansing, exfoliating, and hydrating steps to refresh and
                                brighten your skin. Tailored to individual skin needs, it improves texture, reduces blemishes,
                                and provides a radiant, youthful glow. Ideal for regular upkeep, this treatment leaves your
                                complexion looking clear, balanced, and revitalized.
                            </div>
                        </li>

                    </ul>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-10 animate-bounce">
                    <h2 className="text-2xl font-bold mb-4 text-gray-100">To View More</h2>
                    <Link to='/services'>
                        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white 
                    font-semibold rounded-md hover:bg-gradient-to-l hover:from-yellow-500 hover:to-pink-500 
                    transition duration-300">
                            Click Here
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Service;
