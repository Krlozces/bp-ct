// "use client";

// import { motion } from "framer-motion";
// import { DM_Sans } from "next/font/google";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";

// const DMSans = DM_Sans({
//     weight: ["900", "800", "700", "600"],
//     subsets: ["latin"],
// });

// const faqs = [
//     {
//         question: "¿Cómo funciona la prueba gratuita?",
//         answer: "Ofrecemos una prueba gratuita de 14 días con acceso completo a todas las funciones del plan Profesional. No se requiere tarjeta de crédito y puedes cancelar en cualquier momento."
//     },
//     {
//         question: "¿Puedo cambiar de plan más adelante?",
//         answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se reflejarán en tu próxima facturación."
//     },
//     {
//         question: "¿Qué tipo de soporte ofrecen?",
//         answer: "Ofrecemos diferentes niveles de soporte según el plan: soporte por email para el plan Básico, soporte prioritario 24/7 para el plan Profesional, y soporte dedicado para el plan Empresarial."
//     },
//     {
//         question: "¿Cómo se realiza la implementación?",
//         answer: "Nuestro equipo técnico te guiará en todo el proceso de implementación. Incluye capacitación inicial, configuración del sistema y soporte continuo para asegurar una transición sin problemas."
//     },
//     {
//         question: "¿Mis datos estan seguros?",
//         answer: "Sí, utilizamos encriptación de última generación y realizamos copias de seguridad diarias. Cumplimos con los estándares de seguridad más altos y regulaciones de protección de datos."
//     },
//     {
//         question: "¿Qué métodos de pago aceptan?",
//         answer: "Aceptamos todas las tarjetas de crédito principales, transferencias bancarias, PayPal, Plin, Yape, PagoFacil, etc. Para el plan Empresarial, también ofrecemos facturación mensual o anual."
//     }
// ];

// const FAQ: React.FC = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(null);

//     const toggleFAQ = (index: number) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <section className={`py-20 bg-gray-50 ${DMSans.className}`} id="faq">
//             <div className="max-w-[1400px] mx-auto px-8">
//                 {/* Encabezado */}
//                 <motion.div 
//                     className="text-center mb-16"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
//                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                         Encuentra respuestas a las preguntas más comunes sobre nuestro software
//                     </p>
//                 </motion.div>

//                 {/* Lista de FAQs */}
//                 <div className="max-w-3xl mx-auto">
//                     {faqs.map((faq, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             className="mb-4"
//                         >
//                             <button
//                                 onClick={() => toggleFAQ(index)}
//                                 className="w-full bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between text-left"
//                             >
//                                 <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
//                                 <IoIosArrowDown 
//                                     className={`text-2xl text-gray-500 transition-transform duration-300 ${
//                                         openIndex === index ? 'rotate-180' : ''
//                                     }`}
//                                 />
//                             </button>
//                             <motion.div
//                                 initial={false}
//                                 animate={{
//                                     height: openIndex === index ? "auto" : 0,
//                                     opacity: openIndex === index ? 1 : 0
//                                 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="overflow-hidden"
//                             >
//                                 <div className="bg-white p-6 rounded-b-xl shadow-sm">
//                                     <p className="text-gray-600">{faq.answer}</p>
//                                 </div>
//                             </motion.div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Sección de contacto */}
//                 <motion.div 
//                     className="mt-16 text-center"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                         ¿No encontraste lo que buscabas?
//                     </h3>
//                     <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//                         Nuestro equipo de soporte está aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
//                     </p>
//                     <button className="bg-[#22C55E] text-white px-8 py-3 rounded-lg hover:bg-[#16A34A] transition-colors font-semibold hover:cursor-pointer">
//                         Contactar Soporte
//                     </button>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default FAQ; 