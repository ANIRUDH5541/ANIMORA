import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-black/95 backdrop-blur-lg fixed z-10 top-0 w-full border-b border-[#2DDEED]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold gradient-text">
              AnimeStore
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="nav-link text-gray-300 hover:text-white">
              Explore
            </Link>
            <Link to="/men" className="nav-link text-gray-300 hover:text-white">
              Men
            </Link>
            <Link to="/women" className="nav-link text-gray-300 hover:text-white">
              Women
            </Link>
            <Link to="/accessories" className="nav-link text-gray-300 hover:text-white">
              Accessories
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
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
            <Link
              to="/explore"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/men"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Men
            </Link>
            <Link
              to="/women"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Women
            </Link>
            <Link
              to="/accessories"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Accessories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;