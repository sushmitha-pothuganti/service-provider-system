import React from 'react';
import { Link } from 'react-router-dom';

const FindServices = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 p-5 text-center text-white">
        <nav>
          <ul className="flex justify-center space-x-4 bg-gray-800 p-4">
            <li><Link to="/" className="text-white hover:bg-green-600 px-4 py-2 rounded">Home</Link></li>
            <li><Link to="/services" className="text-white hover:bg-green-600 px-4 py-2 rounded">Find Services</Link></li>
            <li><Link to="/about" className="text-white hover:bg-green-600 px-4 py-2 rounded">About Us</Link></li>
            <li><Link to="/contact" className="text-white hover:bg-green-600 px-4 py-2 rounded">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main className="p-10 bg-gray-100">
        {/* Search Section */}
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Search for Service Providers or Groceries</h2>
          <form id="service-form">
            <div className="mb-5">
              <label htmlFor="category" className="block font-bold mb-2">Category:</label>
              <select id="category" className="w-full p-2 border rounded">
                <option value="maid">Maid</option>
                <option value="plumber">Plumber</option>
                <option value="electrician">Electrician</option>
                <option value="groceries">Shop Groceries</option>
              </select>
            </div>
            <div className="mb-5 hidden" id="grocery-items-group">
              <label htmlFor="items" className="block font-bold mb-2">Select Grocery Item:</label>
              <select id="grocery-items" className="w-full p-2 border rounded">
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="dairy">Dairy Products</option>
                <option value="grains">Grains and Pulses</option>
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="location" className="block font-bold mb-2">Enter Your Location:</label>
              <input type="text" id="location" placeholder="City or Zip Code" required className="w-full p-2 border rounded"/>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Find Providers or Shop</button>
          </form>
        </section>

        {/* Results Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Available Providers or Items</h2>
          <ul id="providers-list" className="list-none p-0">
            {/* Results will be dynamically added here */}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
        <p>&copy; 2024 Service Finder. All rights reserved.</p>
      </footer>
    </>
  );
};

export default FindServices;
