import React from "react";
import BG from '../../assets/SaloonBG.png';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div 
            className="h-screen"
            style={{ backgroundImage: `url('${BG}')`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            {/* Overlay */}
            <div className=" inset-0 bg-black opacity-20"></div>
            
            {/* Content */}
            <div className=" z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Welcome to Beauty Saloon
                </h1>
                <p className="text-xl md:text-3xl mb-8">
                    Experience the best services and relax in a serene environment
                </p>
                <Link to='/book'
                    className="px-6 py-3 bg-yellow-400 hover:bg-yellow-200 hover:text-black text-white 
                    font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Book Your Appointment
                </Link>
            </div>
        </div>
    );
};

export default Hero;
