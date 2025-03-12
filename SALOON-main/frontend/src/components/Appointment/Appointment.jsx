import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidDate = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    return selectedDate >= today.setHours(0, 0, 0, 0);
  };

  const generateTimeSlots = (startHour, endHour) => {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour}:00 - ${hour + 1}:00`);
    }
    return slots;
  };

  const isFutureTimeSlot = (date, timeSlot) => {
    const [startHour] = timeSlot.split(':00');
    const selectedDateTime = new Date(date);
    selectedDateTime.setHours(startHour, 0, 0, 0);
    return selectedDateTime > new Date();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, date, time, service } = formData;

    if (!isValidDate(date)) {
      toast.error('Please choose a valid future date.', { duration: 5000 });
      return;
    }

    if (!isFutureTimeSlot(date, time)) {
      toast.error('Please choose a time slot that is in the future.', { duration: 5000 });
      return;
    }

    const message = `New appointment request:\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nService: ${service}\n\nPlease confirm or Book a Slot Available`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = '918081716312';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');

    toast.success('Appointment request sent successfully!', { duration: 5000 });

    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      service: '',
    });
  };

  const timeSlots = generateTimeSlots(9, 20);

  return (
    <section id="appointment" className="py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto text-center animate-fade-in px-4 md:px-0 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Book Your Appointment</h2>
        <p className="mt-4 text-gray-300">Fill out the form below to schedule your visit.</p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md max-w-lg mx-auto space-y-4 border border-white/30"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
            required
          />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
            required
          >
            <option value="" disabled>Select Time</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot} className="text-black">
                {slot}
              </option>
            ))}
          </select>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
            required
          >
            <option value="" disabled>Select Service</option>
            <option value="haircut" className="text-black">Haircut</option>
            <option value="coloring" className="text-black">Coloring</option>
            <option value="facial" className="text-black">Facial</option>
          </select>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-transform transform hover:scale-105 focus:outline-none"
          >
            Book Appointment
          </button>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </section>
  );
};

export default Appointment;
