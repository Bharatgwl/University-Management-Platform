import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/about" className="text-gray-500 hover:text-gray-600">
            About
          </Link>
          <Link to="/help" className="text-gray-500 hover:text-gray-600">
            Help Center
          </Link>
          <Link to="/privacy" className="text-gray-500 hover:text-gray-600">
            Privacy & Terms
          </Link>
          <Link to="/advertising" className="text-gray-500 hover:text-gray-600">
            Advertising
          </Link>
        </div>
        <div className="mt-4 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-500">
            &copy; {new Date().getFullYear()} AlumniConnect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;