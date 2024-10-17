import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
