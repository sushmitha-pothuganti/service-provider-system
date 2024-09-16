import React from 'react';

const LoginPage = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-4 text-center">
        <h1 className="text-3xl">QuickService - Login</h1>
      </header>

      {/* Login Form */}
      <main>
        <section className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl text-gray-800 text-center mb-6">Login to Your Account</h2>
          <form id="login-form" className="flex flex-col">
            <label htmlFor="login-email" className="text-left font-bold text-gray-700 mb-2">Email or Phone Number:</label>
            <input type="text" id="login-email" required className="p-2 mb-4 border rounded focus:border-green-600"/>

            <label htmlFor="login-password" className="text-left font-bold text-gray-700 mb-2">Password:</label>
            <input type="password" id="login-password" required className="p-2 mb-4 border rounded focus:border-green-600"/>

            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Login</button>
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

export default LoginPage;
