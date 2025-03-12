import React from 'react';

const WhyCUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center
            p-10 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            
            {/* Left Image Section */}
            <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 group">
                <img 
                    src="https://img.freepik.com/free-photo/assortment-makeup-brushes_23-2147783951.jpg?ga=GA1.1.801277020.1721202577&semt=ais_hybrid" 
                    alt="About Our Salon" 
                    className="rounded-xl object-cover w-full h-80 md:h-full transition-transform 
                    duration-500 transform group-hover:scale-105"
                />
                <div className="inset-0 bg-black opacity-30 rounded-xl group-hover:opacity-40 
                transition-opacity duration-500"></div>
            </div>

            {/* Right Text Section */}
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <h1 className="text-5xl font-bold mt-2 transition-transform duration-300 hover:translate-x-2">
                    Why Choose Us?
                </h1>
                <br />
                <h3 className="text-lg font-semibold text-yellow-400 mt-2">
                    ABOUT OUR SALON
                </h3>
                <h2 className="text-2xl font-bold mt-2 text-yellow-300 transition-transform duration-300 hover:translate-x-1">
                    Your Beauty, Our Passion
                </h2>
                <p className="mt-6 text-gray-300 leading-relaxed">
                    At our salon, we believe that beauty is an experience. Our dedicated team of professionals is committed to providing you with a
                    personalized and luxurious service that enhances your natural beauty. Whether you're looking for a fresh haircut, stunning color,
                    or a rejuvenating spa treatment, we have the expertise to make it happen.
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                    We use only the highest quality products and the latest techniques to ensure you leave feeling refreshed and beautiful. Our salon
                    environment is designed to make you feel relaxed and pampered from the moment you step through our doors.
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                    Experience the difference with our exceptional service, attention to detail, and a passion for beauty. Join us today and let
                    us help you shine!
                </p>
            </div>
        </div>
    );
};

export default WhyCUs;
