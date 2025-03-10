"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            type: "bot",
            content: "¡Hola! Soy el asistente virtual de PetuCode. ¿En qué puedo ayudarte hoy?"
        }
    ]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        // Agregar mensaje del usuario
        setMessages(prev => [...prev, { type: "user", content: message }]);
        
        // Simular respuesta del bot
        setTimeout(() => {
            setMessages(prev => [...prev, {
                type: "bot",
                content: "Gracias por tu mensaje. Nuestro equipo se pondrá en contacto contigo pronto."
            }]);
        }, 1000);

        setMessage("");
    };

    return (
        <>
            {/* Botón flotante */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-[#22C55E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
            >
                <FaComments className="text-2xl" />
            </motion.button>

            {/* Ventana del chat */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-96 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
                    >
                        {/* Encabezado */}
                        <div className="bg-[#22C55E] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FaRobot className="text-white text-xl" />
                                <h3 className="text-white font-semibold">Asistente Virtual</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Mensajes */}
                        <div className="h-96 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 ${
                                            msg.type === "user"
                                                ? "bg-[#22C55E] text-white"
                                                : "bg-gray-100 text-gray-800"
                                        }`}
                                    >
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Formulario de mensaje */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Escribe tu mensaje..."
                                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#22C55E] text-white p-2 rounded-lg hover:bg-[#16A34A] transition-colors"
                                >
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot; 