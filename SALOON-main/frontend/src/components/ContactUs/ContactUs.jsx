import React, { useState } from 'react'

const ContactUs = () => {
    // State to store form input values
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log the form data to the console
        // Optionally, reset form after submission
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 
            rounded-xl shadow-lg max-w-lg w-full text-white">
                <h2 className="text-3xl font-bold text-center mb-6">Have A Query? Ask Here</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                                transition-all duration-300 hover:bg-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2
                                focus:ring-blue-500 transition-all duration-300 hover:bg-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 transition-all duration-300
                                hover:bg-gray-600 h-32 resize-none"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 
                            rounded-lg transition-transform transform hover:scale-105 focus:outline-none 
                            focus:ring-4 focus:ring-blue-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;