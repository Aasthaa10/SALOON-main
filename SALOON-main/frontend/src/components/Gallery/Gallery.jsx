import React from 'react';

// IMPORTS IMAGES
import shavingbeard from '../../assets/shavingbeard.jpg';
import shavingbeard2 from '../../assets/shavingbeard2.jpg';
import model1 from '../../assets/model1.jpg';
import model2 from '../../assets/model2.jpg';
import model3 from '../../assets/model3.jpg';
import diffbrushs from '../../assets/diffbrushs.jpg';
import diffcosmetic from '../../assets/diffcosmetic.jpg';
import difftools from '../../assets/difftools.jpg';
import beardtrim from '../../assets/beardtrim.jpg';
import facemask from '../../assets/facemask.jpg';
import pinkbrushs from '../../assets/pinkbrushs.jpg';
import pinkbrushstogether from '../../assets/pinkbrushstogether.jpg';
import stylemen from '../../assets/stylemen.jpg';
import womenpic from '../../assets/womenpic.jpg';

const images = [
    { src: model1, alt: "Model 1" },
    { src: shavingbeard2, alt: "Shaving Beard 2" },
    { src: model2, alt: "Model 2" },
    { src: shavingbeard, alt: "Shaving Beard" },
    { src: model3, alt: "Model 3" },
    { src: beardtrim, alt: "Beard Trim" },
    { src: diffbrushs, alt: "Different Brushes" },
    { src: facemask, alt: "Face Mask" },
    { src: pinkbrushs, alt: "Pink Brushes" },
    { src: difftools, alt: "Different Tools" },
    { src: pinkbrushstogether, alt: "Pink Brushes Together" },
    { src: diffcosmetic, alt: "Different Cosmetics" },
    { src: womenpic, alt: "Woman" },
    { src: stylemen, alt: "Styled Man" },
];

const Gallery = () => {
    return (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mt-16">Our Works</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                    We work to make your face look like a celebrity
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-xl shadow-lg transition-all 
                        duration-300 ease-out hover:shadow-2xl hover:scale-105"
                    >
                        {/* Image with Placeholder */}
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="w-full h-full object-cover rounded-xl transition-transform 
                            duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                        />
                        
                        {/* Overlay with Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 
                        via-transparent to-transparent opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out flex items-end p-4">
                            <span className="text-white text-sm md:text-lg font-semibold tracking-wide opacity-0
                                group-hover:opacity-100 transition-opacity duration-500">
                                {image.alt}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
