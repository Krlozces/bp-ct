"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface IntroTransitionProps {
  setShowContent: (value: boolean) => void;
  loadingMessage?: string;
  slogan?: string;
}

export default function IntroTransition({
  setShowContent,
  loadingMessage = "Inicializando sistema...",
  slogan = "Innovación tecnológica para negocios disruptivos"
}: IntroTransitionProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (prev < 90 ? 2 : 1);
      });
    }, 60);

    const timer = setTimeout(() => {
      setStartExit(true); // Inicia la secuencia de salida
      
      // Retraso antes de mostrar el contenido principal
      setTimeout(() => {
        setIsVisible(false);
        setShowContent(true);
      }, 1000); // 1 segundo para la animación de salida
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [setShowContent]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={startExit ? { 
            opacity: 0,
            backgroundColor: "#f8fafc" // Cambio sutil de color de fondo
          } : { opacity: 1 }}
          transition={{ 
            duration: 1,
            ease: [0.22, 1, 0.36, 1], // Curva de easing personalizada
            backgroundColor: {
              duration: 0.8
            }
          }}
        >
          {/* Efecto de desenfoque durante la transición */}
          <motion.div
            className="absolute inset-0 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: startExit ? 0.5 : 0 
            }}
            transition={{ 
              delay: startExit ? 0 : 0.3,
              duration: 0.6
            }}
          />

          {/* Efecto de iluminación central */}
          <motion.div
            className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-indigo-400/20 blur-[80px]"
            animate={{
              scale: startExit ? [1, 1.5] : [1, 1.1, 1],
              opacity: startExit ? [0.4, 0] : [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: startExit ? 0.8 : 5,
              ease: startExit ? "easeOut" : "easeInOut",
              repeat: startExit ? 0 : Infinity,
            }}
          />
      
          {/* Contenido principal con animación de salida */}
          <motion.div
            className="relative z-10 text-center px-4 w-full max-w-3xl"
            animate={startExit ? {
              scale: 0.95,
              opacity: 0,
              y: 20
            } : {
              scale: 1,
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: startExit ? 0.8 : 1,
              ease: startExit ? [0.22, 1, 0.36, 1] : "easeOut"
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: startExit ? [0, 5, -5, 0] : [0, 1, -1, 0]
              }}
              transition={{
                duration: 1.5,
                ease: "backOut"
              }}
              className="mb-8"
            >
              <Image
                src="/logo.png"
                alt="CobalTech - Soluciones Tecnológicas"
                width={180}
                height={180}
                priority
                className="mx-auto drop-shadow-2xl"
              />
            </motion.div>
      
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: startExit ? 0 : 1, 
                y: startExit ? 40 : 0 
              }}
              transition={{ 
                delay: startExit ? 0 : 0.8,
                duration: startExit ? 0.5 : 0.8
              }}
              className="text-xl text-gray-800/90 max-w-xl mx-auto font-light tracking-wide mb-12"
            >
              {slogan}
            </motion.p>
      
            {/* Progreso con animación de salida */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: startExit ? 0 : 1,
                scale: startExit ? 0.9 : 1
              }}
              transition={{ 
                delay: startExit ? 0 : 1,
                duration: startExit ? 0.4 : 0.6
              }}
              className="flex flex-col items-center"
            >
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(0, 0, 0, 0.1)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={251}
                    strokeDashoffset={251 * (1 - progress / 100)}
                    className="text-indigo-600"
                    transition={{ ease: 'linear' }}
                  />
                </svg>
                <motion.span 
                  className="absolute inset-0 flex items-center justify-center text-gray-900 text-base font-medium"
                  animate={{ 
                    opacity: startExit ? 0 : 1,
                    scale: startExit ? 0.8 : 1
                  }}
                >
                  {progress}%
                </motion.span>
              </div>
              <motion.p
                className="mt-4 text-gray-700/90 text-sm tracking-wider uppercase font-medium"
                animate={{ 
                  opacity: startExit ? 0 : [0.6, 1, 0.6],
                  y: startExit ? 10 : 0
                }}
                transition={{ 
                  duration: startExit ? 0.3 : 2,
                  repeat: startExit ? 0 : Infinity
                }}
              >
                {loadingMessage}
              </motion.p>
            </motion.div>
          </motion.div>
      
          {/* Footer con animación de salida */}
          <motion.div
            className="absolute bottom-6 left-0 right-0 text-center"
            animate={{ 
              opacity: startExit ? 0 : 0.8,
              y: startExit ? 20 : 0
            }}
          >
            <p className="text-xs text-gray-700/80 tracking-wider">
              © {new Date().getFullYear()} COBALTECH
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}