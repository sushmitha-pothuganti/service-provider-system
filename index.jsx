import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-gray-100 p-5 text-center">
        <h1 className="text-2xl font-bold">Welcome to QuickService</h1>
        <p>Your one-stop solution for home services and groceries</p>
      </header>

      {/* Menu Bar */}
      <nav>
        <ul className="flex justify-center bg-gray-800 p-4">
          <li className="mx-2">
            <Link to="/" className="text-white hover:bg-gray-700 px-4 py-2 rounded">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/services" className="text-white hover:bg-gray-700 px-4 py-2 rounded">Services</Link>
          </li>
          <li className="mx-2">
            <Link to="/booking" className="text-white hover:bg-gray-700 px-4 py-2 rounded">Book Now</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact" className="text-white hover:bg-gray-700 px-4 py-2 rounded">Contact Us</Link>
          </li>
          <li className="mx-2">
            <Link to="/signup" className="text-white hover:bg-gray-700 px-4 py-2 rounded">Sign-up</Link>
          </li>
          <li className="mx-2">
            <Link to="/login" className="text-white hover:bg-gray-700 px-4 py-2 rounded">Login</Link>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="text-center">
        <section className="my-10 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold">What do you need today?</h2>
          <p>Select from a range of services and groceries delivered to your doorstep!</p>
        </section>

        {/* New Location Section */}
        <section className="my-5 max-w-xs mx-auto">
          <label htmlFor="location-select" className="block mb-2">Select Your Location:</label>
          <select id="location-select" className="w-full p-2 border rounded">
            <option value="">Choose your location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
          </select>
        </section>

        {/* Categories Section */}
        <section className="my-10 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold">Categories</h3>
          <div className="flex flex-wrap justify-around">
            <div className="w-full sm:w-1/2 md:w-1/3 text-center my-5">
              <img src="images/services.png" alt="Services" className="w-full h-auto" />
              <h4 className="text-lg font-semibold my-2">Home Services</h4>
              <p className="text-gray-600">Electricians, Plumbers, Cleaners, and more.</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 text-center my-5">
              <img src="images/groceries.png" alt="Groceries" className="w-full h-auto" />
              <h4 className="text-lg font-semibold my-2">Groceries</h4>
              <p className="text-gray-600">Fresh vegetables, fruits, and daily needs.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-5 bg-gray-100">
        <p>&copy; 2024 QuickService. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
