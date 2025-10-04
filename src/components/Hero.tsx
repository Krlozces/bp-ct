import React from 'react';

const Hero = () => {
  // URLs de WhatsApp
  const contactMessage = encodeURIComponent('Hola, quiero contactarme con ustedes.');
  const projectsMessage = encodeURIComponent('Hola, quiero ver sus proyectos.');
  const contactUrl = `https://wa.me/51953469369?text=${contactMessage}`;
  const projectsUrl = `https://wa.me/51953469369?text=${projectsMessage}`;

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Efecto de partículas dinámicas - Reducido en móviles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(window.innerWidth < 768 ? 15 : 30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-[0.15]"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl pt-16 sm:pt-20 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Texto principal */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="inline-block bg-blue-700/30 border border-blue-400/30 text-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
                Innovación Digital
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Soluciones
                </span>{' '}
                <br />
                <span className="relative inline-block">
                  Tecnológicas
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Creamos software empresarial que optimiza procesos, aumenta eficiencia y proporciona ventajas competitivas.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center lg:justify-start">
                <a
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-center"
                >
                  <span className="relative z-10">Contactar Ahora</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>

                <a
                  href={projectsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group border-2 border-blue-300/50 hover:border-blue-300 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-center"
                >
                  <span className="relative z-10">Ver Proyectos</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </div>

              {/* Features - Responsivo */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="bg-blue-700/30 p-2 sm:p-3 rounded-full backdrop-blur-sm flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-sm sm:text-base">Seguridad</div>
                    <div className="text-xs sm:text-sm text-blue-200/80">Protegemos tus datos</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="bg-purple-700/30 p-2 sm:p-3 rounded-full backdrop-blur-sm flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-sm sm:text-base">Rendimiento</div>
                    <div className="text-xs sm:text-sm text-blue-200/80">Soluciones optimizadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen con efecto flotante - Mejorada para móviles */}
          <div className="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
              {/* Efecto de halo - Reducido en móviles */}
              <div className="absolute -inset-2 sm:-inset-4 bg-blue-500/10 rounded-3xl blur-xl animate-pulse"></div>

              {/* Contenedor de imagen */}
              <div className="relative rounded-2xl overflow-hidden transform perspective-1000 hover:rotate-y-6 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Equipo de desarrollo colaborando"
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Tarjeta flotante - Responsiva */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-white/90 backdrop-blur-sm p-3 sm:p-5 rounded-xl shadow-lg w-48 sm:w-64 border border-white/20">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold mr-2 sm:mr-3 text-sm sm:text-base">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-800">Proyectos</div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Desarrollados con metodologías ágiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onda de transición - Ajustada para móviles */}
      <div className="pb-12 absolute -bottom-10 sm:-bottom- left-0 w-full overflow-hidden" style={{ transform: 'scaleY(-1) translateY(20px) translateY(20px)' }}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-current text-white w-full h-12 sm:h-16"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-blue-900/80"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39 116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-blue-900/60"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
        </svg>
      </div>

      {/* Estilos para las animaciones */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        
        @media (max-width: 768px) {
          .rotate-y-6 {
            transform: rotateY(2deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;