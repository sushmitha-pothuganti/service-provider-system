import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-blue-600 text-white py-5 text-center">
        <h1 className="text-4xl mb-2">QuickService</h1>
        <p className="text-xl">We'd love to hear from you!</p>
      </header>

      {/* Menu Bar */}
      <nav>
        <ul className="flex justify-center bg-gray-800 p-2">
          <li>
            <Link to="/" className="text-white px-4 py-2 hover:bg-gray-600 rounded">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-white px-4 py-2 hover:bg-gray-600 rounded">Services</Link>
          </li>
          <li>
            <Link to="/booking" className="text-white px-4 py-2 hover:bg-gray-600 rounded">Book Now</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white px-4 py-2 hover:bg-gray-600 rounded">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
        <section className="text-center">
          <h2 className="text-3xl text-blue-600 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">If you have any questions, suggestions, or feedback, feel free to reach out to us. We'd love to assist you!</p>
          <form id="contact-form" className="flex flex-col">
            <label htmlFor="name" className="text-left font-bold mb-2">Full Name:</label>
            <input type="text" id="name" placeholder="Enter your full name" required className="p-2 mb-4 border rounded"/>
            
            <label htmlFor="email" className="text-left font-bold mb-2">Email:</label>
            <input type="email" id="email" placeholder="Enter your email address" required className="p-2 mb-4 border rounded"/>
            
            <label htmlFor="subject" className="text-left font-bold mb-2">Subject:</label>
            <input type="text" id="subject" placeholder="Enter the subject" required className="p-2 mb-4 border rounded"/>
            
            <label htmlFor="message" className="text-left font-bold mb-2">Message:</label>
            <textarea id="message" placeholder="Write your message here" required className="p-2 mb-4 border rounded resize-vertical h-36"/>
            
            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10 rounded-t-lg">
        <p>&copy; 2024 QuickService. All rights reserved.</p>
      </footer>
    </>
  );
};

export default ContactPage;
