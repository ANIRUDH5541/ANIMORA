import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50 border-b border-[#2DDEED]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] via-[#4FD1C5] to-[#4ADE80] bg-clip-text text-transparent">
              Animora
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
              Explore
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#4FD1C5] to-[#4ADE80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link to="/men" className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
              Men
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#4FD1C5] to-[#4ADE80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link to="/women" className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
              Women
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#4FD1C5] to-[#4ADE80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link to="/accessories" className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
              Accessories
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#4FD1C5] to-[#4ADE80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {searchOpen ? (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-900 text-white rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#2DDEED]"
                />
                <X
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-400 hover:text-white"
                  size={20}
                  onClick={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <Search
                className="cursor-pointer text-gray-400 hover:text-white transition-colors"
                size={24}
                onClick={() => setSearchOpen(true)}
              />
            )}
            <User className="cursor-pointer text-gray-400 hover:text-white transition-colors" size={24} />
            <ShoppingCart className="cursor-pointer text-gray-400 hover:text-white transition-colors" size={24} />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/explore" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Explore</Link>
            <Link to="/men" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Men</Link>
            <Link to="/women" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Women</Link>
            <Link to="/accessories" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Accessories</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;