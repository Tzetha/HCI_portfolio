"use client";

import { useState } from 'react';

export default function EmailSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // Reset form visually
    setFormData({ name: '', email: '', message: '' });

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section id="contact" className="w-full">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-lg px-8 py-12 md:px-16 max-w-3xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-1 w-full rounded-xl border border-gray-600 bg-[#121212] p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-gray-600 bg-[#121212] p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Type your message here..."
              className="mt-1 w-full rounded-xl border border-gray-600 bg-[#121212] p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition duration-300 hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>

        {/* Fake Success Popup */}
        {showPopup && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-2xl">
            <div className="bg-[#121212] border border-indigo-500 px-6 py-4 rounded-xl shadow-xl text-center">
              <p className="text-white font-medium">✅ Message sent successfully!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
