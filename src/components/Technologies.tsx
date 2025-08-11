// "use client";

// import { motion } from "framer-motion";
// import { DM_Sans } from "next/font/google";
// import { FaReact, FaNode, FaPython, FaAws, FaDocker } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";
// import { useEffect, useState } from "react";

// const DMSans = DM_Sans({
//     weight: ["900", "800", "700", "600"],
//     subsets: ["latin"],
// });

// const technologies = [
//     {
//         name: "React",
//         icon: FaReact,
//         color: "#61DAFB"
//     },
//     {
//         name: "Next.js",
//         icon: SiNextdotjs,
//         color: "#000000"
//     },
//     {
//         name: "Tailwind CSS",
//         icon: SiTailwindcss,
//         color: "#38B2AC"
//     },
//     {
//         name: "TypeScript",
//         icon: SiTypescript,
//         color: "#3178C6"
//     },
//     {
//         name: "Node.js",
//         icon: FaNode,
//         color: "#339933"
//     },
//     {
//         name: "Python",
//         icon: FaPython,
//         color: "#3776AB"
//     },
//     {
//         name: "MongoDB",
//         icon: SiMongodb,
//         color: "#47A248"
//     },
//     {
//         name: "PostgreSQL",
//         icon: SiPostgresql,
//         color: "#336791"
//     },
//     {
//         name: "AWS",
//         icon: FaAws,
//         color: "#FF9900"
//     },
//     {
//         name: "Docker",
//         icon: FaDocker,
//         color: "#2496ED"
//     }
// ];

// const Technologies: React.FC = () => {
//     const [position, setPosition] = useState(0);
//     const itemWidth = 200; // Ancho de cada elemento en píxeles
//     const totalWidth = technologies.length * itemWidth;

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setPosition((prev) => {
//                 const newPosition = prev - 1;
//                 // Si llegamos al final, volvemos al inicio 
//                 if (Math.abs(newPosition) >= totalWidth / 2) {
//                     return 0;
//                 }
//                 return newPosition;
//             });
//         }, 20); // Velocidad del movimiento

//         return () => clearInterval(interval);
//     }, [totalWidth]);

//     return (
//         <section className={`py-12 bg-white overflow-hidden ${DMSans.className}`}>
//             <div className="max-w-[1400px] mx-auto px-8">
//                 {/* Encabezado */}
//                 <motion.div 
//                     className="text-center mb-12"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center ">Tecnologías que usamos</h2>
//                 </motion.div>

//                 {/* Carrusel */}
//                 <div className="relative">
//                     <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
//                     <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
                    
//                     <div className="relative overflow-hidden">
//                         <motion.div
//                             className="flex gap-8 py-6"
//                             style={{
//                                 x: position,
//                                 width: `${totalWidth * 2}px`, // Duplicamos el ancho para el efecto infinito
//                             }}
//                         >
//                             {/* Primera serie de elementos */}
//                             {technologies.map((tech, index) => (
//                                 <motion.div
//                                     key={`${tech.name}-1-${index}`}
//                                     className="flex-shrink-0 w-[200px]"
//                                 >
//                                     <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
//                                         <div className="flex items-center gap-4">
//                                             <div 
//                                                 className="w-12 h-12 rounded-lg flex items-center justify-center"
//                                                 style={{ backgroundColor: `${tech.color}20` }}
//                                             >
//                                                 <tech.icon size={28} style={{ color: tech.color }} />
//                                             </div>
//                                             <h4 className="text-lg font-semibold text-gray-900">{tech.name}</h4>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             ))}
                            
//                             {/* Segunda serie de elementos (para el efecto infinito) */}
//                             {technologies.map((tech, index) => (
//                                 <motion.div
//                                     key={`${tech.name}-2-${index}`}
//                                     className="flex-shrink-0 w-[200px]"
//                                 >
//                                     <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
//                                         <div className="flex items-center gap-4">
//                                             <div 
//                                                 className="w-12 h-12 rounded-lg flex items-center justify-center"
//                                                 style={{ backgroundColor: `${tech.color}20` }}
//                                             >
//                                                 <tech.icon size={28} style={{ color: tech.color }} />
//                                             </div>
//                                             <h4 className="text-lg font-semibold text-gray-900">{tech.name}</h4>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Technologies; 