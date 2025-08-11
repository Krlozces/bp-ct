import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaCommentAlt, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="font-sans text-white w-full z-50 fixed ">
      {/* Top bar */}
      <div className="border-b border-blue-700/30 py-2 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          {/* Contact info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <FaPhone className="text-blue-300" />
              <p>+51 976 217 463</p>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <FaEnvelope className="text-blue-300" />
              <p>Cobaltech@info.com</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <FaCommentAlt className="text-blue-300" />
              <p>Contactar</p>
            </a>
            <a href="#" className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full hover:opacity-90 transition-opacity">
              <FaUser />
              <p>Solicitar Demo</p>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Cobal</span>Tech
            </h1>
          </a>
        </div>

        {/* Desktop menu */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a href="#" className="text-white hover:text-blue-300 transition-colors relative group">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-300 transition-colors relative group">
                Nosotros
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-white hover:text-blue-300 transition-colors relative group"
              >
                Servicios
                <FaChevronDown className={`ml-1 text-xs transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 py-2 px-4 bg-white rounded-md shadow-lg w-48 text-gray-800 z-50"
                  >
                    <li><a href="#" className="block py-2 hover:text-blue-500 text-sm">Desarrollo Custom</a></li>
                    <li><a href="#" className="block py-2 hover:text-blue-500 text-sm">SaaS Empresarial</a></li>
                    <li><a href="#" className="block py-2 hover:text-blue-500 text-sm">Integraciones</a></li>
                    <li><a href="#" className="block py-2 hover:text-blue-500 text-sm">Consultoría TI</a></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-300 transition-colors relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none text-xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-4 bg-blue-900/90 backdrop-blur-sm">
              <a href="#" className="block py-2 text-white hover:text-blue-300">Inicio</a>
              <a href="#" className="block py-2 text-white hover:text-blue-300">Nosotros</a>
              
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between w-full py-2 text-white hover:text-blue-300"
                >
                  <span>Servicios</span>
                  <FaChevronDown className={`text-xs transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-500/30">
                    <a href="#" className="block py-1 text-blue-200 hover:text-white text-sm">Desarrollo Custom</a>
                    <a href="#" className="block py-1 text-blue-200 hover:text-white text-sm">SaaS Empresarial</a>
                    <a href="#" className="block py-1 text-blue-200 hover:text-white text-sm">Integraciones</a>
                    <a href="#" className="block py-1 text-blue-200 hover:text-white text-sm">Consultoría TI</a>
                  </div>
                )}
              </div>
              
              <a href="#" className="block py-2 text-white hover:text-blue-300">Contacto</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;