import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../pics/hera-logo.jpg'
function Navbar() {
  return (
    <nav className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="https://heradigitalhealth.org/">
              <img className="h-16 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-violet-950 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/logIn" className="text-violet-950 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link to="/signUp" className="text-violet-950 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;