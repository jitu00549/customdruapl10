import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/">MyLogo</Link>
        </div>

        {/* Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-blue-700 text-center md:static md:flex md:space-x-4 md:w-auto md:bg-transparent`}
        >
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-blue-800 md:hover:bg-transparent"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/abouts"
            className="block px-4 py-2 hover:bg-blue-800 md:hover:bg-transparent"
            onClick={() => setIsOpen(false)}
          >
            Abouts
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
