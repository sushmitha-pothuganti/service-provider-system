import React from 'react';

const SignUpPage = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-4 text-center">
        <h1 className="text-3xl">QuickService - Sign Up</h1>
      </header>

      {/* Sign-Up Form */}
      <main>
        <section className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl text-gray-800 text-center mb-6">Create Your Account</h2>
          <form id="signup-form" className="flex flex-col">
            <label htmlFor="signup-email-phone" className="text-left font-bold text-gray-700 mb-2">Email or Phone Number:</label>
            <input type="text" id="signup-email-phone" required className="p-2 mb-4 border rounded focus:border-green-600"/>

            <label htmlFor="signup-password" className="text-left font-bold text-gray-700 mb-2">Create Password:</label>
            <input type="password" id="signup-password" required className="p-2 mb-4 border rounded focus:border-green-600"/>

            <label htmlFor="signup-confirm-password" className="text-left font-bold text-gray-700 mb-2">Confirm Password:</label>
            <input type="password" id="signup-confirm-password" required className="p-2 mb-4 border rounded focus:border-green-600"/>

            <label htmlFor="user-type-signup" className="text-left font-bold text-gray-700 mb-2">I am a:</label>
            <select id="user-type-signup" className="p-2 mb-4 border rounded focus:border-green-600">
              <option value="customer">Customer</option>
              <option value="provider">Service Provider</option>
            </select>

            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Sign Up</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-3 fixed bottom-0 w-full">
        <p>&copy; 2024 QuickService. All rights reserved.</p>
      </footer>
    </>
  );
};

export default SignUpPage;
