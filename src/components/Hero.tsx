"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { DM_Sans } from "next/font/google";
import Button from "./Button";
import Lottie from "lottie-react";

const DMSans = DM_Sans({
  weight: ["700", "500", "400"],
  subsets: ["latin"],
});

const Hero: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animationHero.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isHovering, setIsHovering] = useState(false);
  const [activeParticles, setActiveParticles] = useState<number[]>([]);

  // Iniciar animaciones cuando el componente está en vista
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Seguimiento del cursor para efectos interactivos
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Activar partículas aleatorias periódicamente
  useEffect(() => {
    const interval = setInterval(() => {
      const randomParticles = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 30)
      );
      setActiveParticles(randomParticles);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Variantes para el cursor personalizado
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(79, 70, 229, 0.1)",
      border: "1px solid rgba(79, 70, 229, 0.3)",
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(79, 70, 229, 0.2)",
      border: "1px solid rgba(79, 70, 229, 0.5)",
      mixBlendMode: "difference",
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "transparent",
      border: "2px solid rgba(79, 70, 229, 0.8)",
      mixBlendMode: "difference",
    },
  };

  // Funciones para interactividad del cursor
  const textEnter = (text: string) => {
    setCursorText(text);
    setCursorVariant("text");
  };

  const textLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const buttonEnter = () => {
    setCursorVariant("hover");
    setIsHovering(true);
  };

  const buttonLeave = () => {
    setCursorVariant("default");
    setIsHovering(false);
  };

  // Generar partículas para el fondo
  const renderParticles = () => {
    return Array.from({ length: 30 }).map((_, index) => {
      const size = Math.random() * 6 + 2;
      const isActive = activeParticles.includes(index);
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const delay = Math.random() * 5;

      return (
        <div
          key={index}
          className={`absolute rounded-full transition-all duration-1000 ${isActive ? "scale-150 opacity-100" : "opacity-40"}`}
          style={{
            top,
            left,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: index % 3 === 0 ? "#4f46e5" : index % 3 === 1 ? "#60a5fa" : "#818cf8",
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
  };

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const codeBlockVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${DMSans.className}`}
    >
      {/* Cursor personalizado */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center text-white font-bold text-sm"
        variants={cursorVariants}
        animate={cursorVariant}
      >
        {cursorText && <span>{cursorText}</span>}
      </motion.div>

      {/* Fondo con gradiente y partículas */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-950">
        <div className="absolute inset-0 opacity-30">{renderParticles()}</div>

      </div>

      {/* Malla de líneas de código */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="code-grid w-full h-full opacity-10"></div>
      </div>

      {/* Contenido principal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Columna de texto */}
        <motion.div className="lg:col-span-6 text-white">
          <motion.div
            variants={itemVariants}
            className="glitch-wrapper mb-6"
            onMouseEnter={() => textEnter("INNOVACIÓN")}
            onMouseLeave={textLeave}
          >
            <h2 className="glitch text-indigo-300 text-xl font-mono tracking-wider">
              <span aria-hidden="true">DESARROLLO DE SOFTWARE</span>
              DESARROLLO DE SOFTWARE
              <span aria-hidden="true">DESARROLLO DE SOFTWARE</span>
            </h2>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            onMouseLeave={textLeave}
          >
            <span className="block">Transformamos</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300">
              Ideas en Realidad Digital
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl"
          >
            No solo desarrollamos software, creamos experiencias digitales que
            <span className="relative inline-block mx-1">
              <span className="relative z-10 font-bold">revolucionan</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-indigo-500/30 rounded-sm -z-0"></span>
            </span>
            la forma en que interactúas con la tecnología.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <div
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
              className="relative"
            >
              <Button className="relative z-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:translate-y-[-2px] transition-all duration-300 text-lg overflow-hidden group">
                <span className="relative z-10">Inicia Tu Proyecto</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            </div>

            <div
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
              className="relative"
            >
              <Button className="relative z-10 bg-transparent border-2 border-indigo-400/50 text-indigo-200 font-bold py-4 px-8 rounded-xl shadow-lg hover:border-indigo-300 hover:text-white hover:translate-y-[-2px] transition-all duration-300 text-lg overflow-hidden group">
                <span className="relative z-10">Explora Soluciones</span>
                <span className="absolute inset-0 bg-indigo-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </motion.div>

          {/* Indicadores de tecnología */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
          >
            {["React", "Node.js", "Python", "AWS", "AI"].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-mono rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-700/50"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Animación Lottie */}
        <motion.div
          variants={codeBlockVariants}
          className="lg:col-span-6 relative"
          onMouseLeave={textLeave}
        >
          <div className="relative rounded-xl overflow-hidden  p-4">
            {/* Contenedor de la animación Lottie */}
            <div className="relative h-[700px] w-full overflow-hidden">
              <Lottie
                loop={true}
                animationData={animationData}
                autoplay={true}
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '600px',
                  maxHeight: '600px',
                  pointerEvents: 'none',
                }}
              />
            </div>
            
            {/* Efecto de brillo en los bordes */}
            
          </div>

          {/* Elementos decorativos alrededor de la animación */}
          <div className="absolute -top-5 -left-5 w-10 h-10 bg-indigo-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 -right-4 w-8 h-8 bg-indigo-400/30 rounded-full blur-lg"></div>
          <div className="absolute top-1/4 -left-3 w-6 h-6 bg-blue-400/30 rounded-full blur-lg"></div>
          
          {/* Etiquetas flotantes */}
          
        </motion.div>
      </motion.div>

      {/* Líneas de conexión animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="connection-lines w-full h-full opacity-20"></div>
      </div>

      {/* Estilos CSS para efectos especiales */}
      <style jsx>{`
        /* Efecto de glitch para texto */
        .glitch-wrapper {
          position: relative;
          width: fit-content;
        }
        
        .glitch {
          position: relative;
          color: white;
        }
        
        .glitch > span {
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .glitch > span:first-child {
          animation: glitch 500ms infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          transform: translate(-0.04em, -0.03em);
          opacity: 0.75;
        }
        
        .glitch > span:last-child {
          animation: glitch 375ms infinite;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          transform: translate(0.04em, 0.03em);
          opacity: 0.75;
        }
        
        @keyframes glitch {
          0% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          100% {
            text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }
        
        /* Rejilla de código para el fondo */
        .code-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(79, 70, 229, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(79, 70, 229, 0.1) 1px, transparent 1px);
        }
        
        /* Líneas de conexión */
        .connection-lines {
          background: 
            radial-gradient(circle at 20% 35%, rgba(79, 70, 229, 0.2) 0%, transparent 50px),
            radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.2) 0%, transparent 50px),
            radial-gradient(circle at 40% 80%, rgba(79, 70, 229, 0.2) 0%, transparent 50px),
            radial-gradient(circle at 70% 60%, rgba(96, 165, 250, 0.2) 0%, transparent 50px);
        }
        
        /* Animaciones para partículas */
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Hero;