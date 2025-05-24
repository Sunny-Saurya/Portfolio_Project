import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "react-feather"; // Using react-feather for icons

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed w-full top-0 left-0 bg-opacity-90 backdrop-blur-sm z-50 bg-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Artist Branding */}
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent transition-all hover:scale-105"
            >
              SHUBHAM PANDIT
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold uppercase tracking-wider hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold uppercase tracking-wider hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/music"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold uppercase tracking-wider hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent"
                  >
                    Music
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold uppercase tracking-wider hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* CTA Button */}
              <button className="ml-8 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold uppercase tracking-wider transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-900 border-t border-gray-700`}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold uppercase tracking-wider hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent py-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold uppercase tracking-wider hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent py-2"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/music"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold uppercase tracking-wider hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent py-2"
                  onClick={toggleMenu}
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold uppercase tracking-wider hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent py-2"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold uppercase tracking-wider transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;                                                                                                                            