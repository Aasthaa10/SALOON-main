import React from 'react';

const AboutUs = () => {
    return (
        <>
            {/* Header Section with Dark Gradient */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-8">
                <h1 className="text-5xl font-extrabold text-center tracking-wide mt-20">About Us</h1>
            </div>

            {/* Welcome Section */}
            <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16 px-8 lg:px-24">
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-semibold mb-6">Welcome to Mr Makeup - Studio & Unisex Salon</h2>
                    <p className="text-lg leading-relaxed">
                        Welcome to Lucknow’s leading beauty destination where luxury meets artistry. At Mr Makeup, we believe that beauty transcends gender. Our world-class beauty and grooming services for both men and women help you look and feel your very best.
                    </p>
                </div>

                <div className="text-center max-w-4xl mx-auto">
                    <p className="text-lg leading-relaxed">
                        Our philosophy is that every individual is unique, and so is their beauty journey. Whether it’s a glamorous makeover or a bold new hairstyle, our highly skilled professionals blend creativity and precision to bring your vision to life.
                    </p>
                </div>
            </section>

            {/* Signature Services Section */}
            <section className="py-20 px-8 lg:px-24 bg-gray-900 text-white">
                <h1 className="text-4xl font-bold text-center mb-12">Our Signature Services</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="p-8 bg-gradient-to-r from-purple-800 to-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-br hover:from-purple-900 hover:to-gray-800">
                        <h2 className="text-2xl font-semibold mb-4">Professional Makeup</h2>
                        <p>From bridal and party makeup to editorial and high-fashion looks, our expert makeup artists ensure that your personality shines through with every brushstroke.</p>
                    </div>

                    <div className="p-8 bg-gradient-to-r from-pink-800 to-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-br hover:from-pink-900 hover:to-gray-800">
                        <h2 className="text-2xl font-semibold mb-4">Hair Care & Styling</h2>
                        <p>Whether it’s a fresh cut, vibrant coloring, or luxurious hair treatments, our hairstylists create hairstyles that suit your lifestyle and elevate your appearance.</p>
                    </div>

                    <div className="p-8 bg-gradient-to-r from-red-800 to-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-br hover:from-red-900 hover:to-gray-800">
                        <h2 className="text-2xl font-semibold mb-4">Advanced Skin Care</h2>
                        <p>Our customized facials, skin therapies, and treatments rejuvenate your skin, providing long-lasting radiance and a youthful glow.</p>
                    </div>

                    <div className="p-8 bg-gradient-to-r from-purple-800 to-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-br hover:from-purple-900 hover:to-gray-800">
                        <h2 className="text-2xl font-semibold mb-4">Nail Art & Care</h2>
                        <p>Pamper your hands and feet with our exquisite manicures, pedicures, and creative nail art, all designed to add beauty and elegance.</p>
                    </div>

                    <div className="p-8 bg-gradient-to-r from-pink-800 to-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-br hover:from-pink-900 hover:to-gray-800">
                        <h2 className="text-2xl font-semibold mb-4">Grooming for Men & Women</h2>
                        <p>From precision haircuts to tailored grooming services, we cater to the distinct needs of both men and women, ensuring you look sharp and feel refreshed.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-8 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Why Choose Mr Makeup?</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        At Mr Makeup - Studio & Unisex Salon, we merge global trends with local expertise. Our continuous training ensures cutting-edge styles and treatments that match your personal style. Our luxurious environment lets you unwind and emerge as the best version of yourself.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Whether preparing for a grand event or refreshing your look, we go beyond ordinary to deliver a personalized, unforgettable experience that meets and exceeds expectations.
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-black text-white py-16 px-8 lg:px-24 text-center">
                <h3 className="text-3xl font-semibold mb-6">Experience Excellence at Mr Makeup</h3>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                    Step into Mr Makeup - Studio & Unisex Salon, where beauty, style, and confidence come together. Let us help you embrace your unique charm with elegance and sophistication.
                </p>
            </section>
        </>
    );
};

export default AboutUs;
