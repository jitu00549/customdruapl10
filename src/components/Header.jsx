import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">MyLogo</div>

        {/* Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Navigation Menu */}

        <nav className={`md:flex md:items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:flex`}>
         <ul className="flex space-x-4 ">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
