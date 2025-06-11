import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="border-2 border-[#4caf50] p-2 rounded">
            <span className="text-2xl font-bold text-white">{`{ }`}</span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-[#00bfff] transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-[#00bfff] transition-colors">About Us</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
