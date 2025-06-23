import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Coins, Sparkles } from "lucide-react";

// First import the image at the top of your file
import ammicoinLogo from "../assests/images/ammicoin.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-[#d4af37]/30 h-15  ">      {/* bg-[#1a2e2a]/100 */}
   
      <div className="container mx-auto px-4 py-2 mr-10">
        <div className="flex items-center justify-between ">
          {/* Logo - updated with gold theme */}
           <div className ="mr-15"> 
          <Link to="/" className="flex items-center space-x-2 text-white group ">
            <img
              src={ammicoinLogo}
              alt="AmmiCoin Logo"
              className="h-[3.8rem] w-[15.0625rem] " // 45px and 65px in rems
            />
          </Link>
          </div>
          {/* Desktop Navigation - updated with gold theme */}
          <nav className="hidden md:flex items-center ">
            <Link
              to="/"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              About
            </Link>
            <Link
              to="/features"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              Features
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              Projects
            </Link>
            <Link
              to="/steps"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              Steps
            </Link>
              <Link
              to="/roadmap"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              Roadmap
            </Link>
            <Link
              to="/tokenomics"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              Tokenomics
            </Link>
          
            <div className="login-btn">
              <a
                href="https://stak.amicoin.io"
                className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] text-black px-6 py-2 rounded-full font-medium hover:from-[#f3d779] hover:to-[#d4af37] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#d4af37]/30 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  {/* Font Awesome user icon (fa-user) as SVG */}
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                </svg>
                <span>Stak AMMYI</span>
              </a>
            </div>
          </nav>
          {/* Mobile Menu Button - updated with gold theme */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-[#d4af37] transition-colors duration-300 p-2 rounded-lg hover:bg-[#1a2e2a]/50"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - updated with gold theme */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#d4af37]/30">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-white hover:text-[#d4af37] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-[#1a2e2a]/50"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="text-white hover:text-[#d4af37] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-[#1a2e2a]/50"
              >
                About
              </Link>
               <Link
              to="/features"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              Features
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              Projects
            </Link>
            <Link
              to="/steps"
              className="text-white hover:text-[#d4af37] transition-colors duration-300 hover:bg-[#1a2e2a]/50 px-3 py-2 rounded-lg"
            >
              Steps
            </Link>
             <Link
                to="/roadmap"
                onClick={toggleMenu}
                className="text-white hover:text-[#d4af37] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-[#1a2e2a]/50"
              >
                Roadmap
              </Link>
              <Link
                to="/tokenomics"
                onClick={toggleMenu}
                className="text-white hover:text-[#d4af37] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-[#1a2e2a]/50"
              >
                Tokenomics
              </Link>
             
              <button
                onClick={toggleMenu}
                className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] text-black px-6 py-2 rounded-full font-medium hover:from-[#f3d779] hover:to-[#d4af37] transition-all duration-300 w-full mt-2"
              >
                Buy AmiCoin
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
