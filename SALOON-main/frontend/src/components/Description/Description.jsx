import React from 'react';

const Description = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-black text-white py-8 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-center">
                        Unwind, Refresh, and Glow – Where Beauty Meets Serenity!
                    </h1>
                    <br />
                {/* Section 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-400
                         animate-fadeInLeft"
                    >
                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">
                            Our Approach to Client Care
                        </h1>
                    </div>
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-300 animate-fadeInRight"
                    >
                        <p className="text-lg md:text-xl lg:text-2xl">
                            At our salon, we believe in offering exceptional service by treating every client with personalized care. 
                            We create a welcoming environment, ensuring that every visit is a relaxing and rejuvenating experience.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-400 animate-fadeInLeft"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-semibold">
                            Time Management
                        </h2>
                    </div>
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-300 animate-fadeInRight"
                    >
                        <p className="text-lg md:text-xl lg:text-2xl">
                            We value your time, so we strive to keep every appointment on schedule, without compromising on the quality of service. 
                            Our online booking system allows you to conveniently schedule and manage appointments.
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-400 animate-fadeInLeft"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-semibold">
                            Professional Staff
                        </h2>
                    </div>
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-300 animate-fadeInRight"
                    >
                        <p className="text-lg md:text-xl lg:text-2xl">
                            Our experienced and professional staff undergo regular training to ensure they’re up-to-date with the latest trends and techniques. 
                            We maintain a friendly and relaxing atmosphere, making sure every client feels at ease.
                        </p>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-400 animate-fadeInLeft"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-semibold">
                            Comprehensive Services
                        </h2>
                    </div>
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-300 animate-fadeInRight"
                    >
                        <p className="text-lg md:text-xl lg:text-2xl">
                            From hair styling to spa treatments, we offer a wide range of services to meet all your beauty needs. 
                            Our staff takes the time to understand your preferences and deliver results that exceed expectations.
                        </p>
                    </div>
                </div>

                {/* Section 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-400 animate-fadeInLeft"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-semibold">
                            Our Promise
                        </h2>
                    </div>
                    <div 
                        className="transform transition duration-500 hover:scale-105 hover:text-yellow-300 animate-fadeInRight"
                    >
                        <p className="text-lg md:text-xl lg:text-2xl">
                            Your satisfaction is our priority. We guarantee high-quality service and look forward to building long-lasting relationships 
                            with our clients, one visit at a time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
