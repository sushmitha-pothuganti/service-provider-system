// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components';
import Services from './components/services';
import Booking from './components/booking';
import Contact from './components/contact';
import SignUp from './components/signup';
import Login from './components/login';
import About from './components/about';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
