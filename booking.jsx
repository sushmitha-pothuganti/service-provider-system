import React from 'react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white text-center py-5">
        <nav>
          <ul className="flex justify-center space-x-5 bg-gray-800 py-3">
            <li>
              <Link to="/" className="text-white hover:bg-green-600 px-4 py-2 rounded">Home</Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:bg-green-600 px-4 py-2 rounded">Find Services</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:bg-green-600 px-4 py-2 rounded">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:bg-green-600 px-4 py-2 rounded">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main className="bg-gray-100 py-10">
        <section className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Complete Your Booking</h2>
          <p className="mb-6">Selected Item: <span id="selected-item" className="font-bold"></span></p>
          <form id="booking-form">
            <div className="mb-5">
              <label htmlFor="name" className="block font-bold mb-2">Username:</label>
              <input type="text" id="name" required className="w-full p-2 border rounded"/>
            </div>
            <div className="mb-5">
              <label htmlFor="address" className="block font-bold mb-2">Delivery Address:</label>
              <input type="text" id="address" required className="w-full p-2 border rounded"/>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Proceed to Payment</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>&copy; 2024 Service Finder. All rights reserved.</p>
      </footer>
    </>
  );
};

export default BookingPage;
