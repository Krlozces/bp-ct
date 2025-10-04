import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaCommentAlt, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Construir URLs de WhatsApp
  const contactMessage = encodeURIComponent('Hola, quiero contactarme con ustedes.');
  const demoMessage = encodeURIComponent('Hola, quiero solicitar una demo.');
  const contactUrl = `https://wa.me/51953469369?text=${contactMessage}`;
  const demoUrl = `https://wa.me/51953469369?text=${demoMessage}`;

  return (
    <header className={`font-sans text-white w-full z-50 fixed transition-colors duration-300 ${scrolled ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900' : 'bg-transparent'}`}>
      {/* Top bar - Oculto en móviles muy pequeños */}
      <div className="hidden sm:block border-b border-blue-700/30 py-2 text-xs lg:text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {/* Contact info */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-2 sm:gap-4">
              <div className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-300 transition-colors">
                <FaPhone className="text-blue-300 text-xs" />
                <p className="text-xs lg:text-sm">+51 976 217 463</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-300 transition-colors">
                <FaEnvelope className="text-blue-300 text-xs" />
                <p className="text-xs lg:text-sm truncate">Cobaltech@info.com</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-2 sm:gap-3">
              <a 
                href={contactUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 hover:text-blue-300 transition-colors px-2 py-1 rounded hover:bg-blue-700/20"
              >
                <FaCommentAlt className="text-blue-300 text-xs" />
                <p className="text-xs lg:text-sm">Contactar</p>
              </a>
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity text-xs lg:text-sm whitespace-nowrap"
              >
                <FaUser className="text-xs" />
                <p>Solicitar Demo</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Cobal</span>Tech
            </h1>
          </a>
        </div>

        {/* Mobile top buttons - Solo visible en pantallas pequeñas */}
        {/* <div className="flex sm:hidden items-center gap-2">
          <a 
            href={contactUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 hover:text-blue-300 transition-colors px-2 py-1 rounded text-xs"
          >
            <FaCommentAlt className="text-blue-300" />
          </a>
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-1 rounded-full hover:opacity-90 transition-opacity text-xs"
          >
            <FaUser />
          </a>
        </div> */}

        {/* Desktop menu */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 xl:space-x-8 text-sm font-medium">
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
            className="text-white focus:outline-none text-xl ml-2"
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
            <div className="px-4 pt-2 pb-4 space-y-3 bg-blue-900/95 backdrop-blur-sm">
              <a href="#" className="block py-2 text-white hover:text-blue-300 text-base">Inicio</a>
              <a href="#" className="block py-2 text-white hover:text-blue-300 text-base">Nosotros</a>
              
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between w-full py-2 text-white hover:text-blue-300 text-base"
                >
                  <span>Servicios</span>
                  <FaChevronDown className={`text-xs transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-2 space-y-2 border-l-2 border-blue-500/30 overflow-hidden"
                    >
                      <a href="#" className="block py-1.5 text-blue-200 hover:text-white text-sm">Desarrollo Custom</a>
                      <a href="#" className="block py-1.5 text-blue-200 hover:text-white text-sm">SaaS Empresarial</a>
                      <a href="#" className="block py-1.5 text-blue-200 hover:text-white text-sm">Integraciones</a>
                      <a href="#" className="block py-1.5 text-blue-200 hover:text-white text-sm">Consultoría TI</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <a href="#" className="block py-2 text-white hover:text-blue-300 text-base">Contacto</a>
              
              {/* Mobile contact buttons */}
              <div className="pt-3 border-t border-blue-700/30 space-y-2">
                <a 
                  href={contactUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  <FaCommentAlt />
                  <span>Contactar</span>
                </a>
                <a 
                  href={demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  <FaUser />
                  <span>Solicitar Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;