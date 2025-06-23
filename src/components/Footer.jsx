import React from 'react';
import { Coins, Twitter, MessageCircle, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black z-20 insert-0 relative backdrop-blur-md border-t border-[#d4af37]/10 ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Coins className="h-8 w-8 text-[#d4af37]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f3d779] bg-clip-text text-transparent">
                AmiCoin
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The future of decentralized finance. Join our community and be part of the blockchain revolution 
              that's transforming the world of digital currency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#f3d779] transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f3d779] transition-colors duration-300">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f3d779] transition-colors duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f3d779] transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300">Tokenomics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300">Roadmap</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300">Whitepaper</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AmiCoin. All rights reserved. Built with ❤️ for the crypto community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;