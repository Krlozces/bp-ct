import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-purple-800 text-white relative overflow-hidden">
      {/* Efecto de partículas */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-[0.05]"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Columna 1: Descripción */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Cobal</span>Tech
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Empresa líder en desarrollo de software empresarial, con más de 10 años de experiencia creando soluciones tecnológicas que transforman negocios.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-blue-800/50 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <FaFacebook className="text-blue-200" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-blue-800/50 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <FaLinkedin className="text-blue-200" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-blue-800/50 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <FaTwitter className="text-blue-200" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-blue-800/50 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <FaGithub className="text-blue-200" />
              </motion.a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-300">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  ¿Quiénes somos?
                </Link>
              </li>
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog Tecnológico
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Soluciones */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-300">Soluciones</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/51941644810?text=${encodeURIComponent('Hola, quiero información sobre Sistemas ERP')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Sistemas ERP
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/51941644810?text=${encodeURIComponent('Hola, quiero información sobre Plataformas CRM')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Plataformas CRM
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/51941644810?text=${encodeURIComponent('Hola, quiero información sobre Business Intelligence')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Business Intelligence
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/51941644810?text=${encodeURIComponent('Hola, quiero información sobre Desarrollo a Medida')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Desarrollo a Medida
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-300">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-100">
                <FaEnvelope className="text-blue-300 mt-1 flex-shrink-0" />
                <span>contacto@cobaltech.com</span>
              </li>
              <li className="flex items-start gap-3 text-blue-100">
                <FaPhone className="text-blue-300 mt-1 flex-shrink-0" />
                <span>+51 941 644 810</span>
              </li>
              <li className="flex items-start gap-3 text-blue-100">
                <FaMapMarkerAlt className="text-blue-300 mt-1 flex-shrink-0" />
                <span>Av. Amautas , Chiclayo, Perú</span>
              </li>
              <li className="flex items-start gap-3 text-blue-100">
                <FaClock className="text-blue-300 mt-1 flex-shrink-0" />
                <span>Lun-Vie: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-blue-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>© {new Date().getFullYear()} CobalTech. Todos los derechos reservados.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Política de Privacidad</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Términos y Condiciones</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa superior */}
          <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-1">
              <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="fill-white text-white w-full h-12"
              >
                  <path
                      d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                      className="fill-current text-white"
                  ></path>
              </svg>
          </div>
    </footer>
  );
}