"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaWhatsapp } from "react-icons/fa";

interface Message {
    type: "user" | "bot";
    content: string;
    isAction?: boolean;
}

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            type: "bot",
            content: "¡Hola! Soy el asistente virtual de PetuCode. ¿En qué puedo ayudarte hoy?"
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        // Agregar mensaje del usuario
        setMessages(prev => [...prev, { type: "user", content: message }]);
        setIsLoading(true);
        
        try {
            console.log('Enviando mensaje al servidor...');
            const response = await fetch('http://localhost:3001/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                throw new Error(`Error del servidor: ${response.status}`);
            }

            const data = await response.json();
            console.log('Respuesta recibida:', data);
            
            setMessages(prev => [...prev, {
                type: "bot",
                content: data.response
            }]);

            // Agregar botón de WhatsApp después de la respuesta
            setMessages(prev => [...prev, {
                type: "bot",
                content: "¿Quieres contactarnos por WhatsApp?",
                isAction: true
            }]);
        } catch (error) {
            console.error('Error completo:', error);
            setMessages(prev => [...prev, {
                type: "bot",
                content: `Lo siento, hubo un error al conectar con el servidor. Por favor, asegúrate de que el servidor esté corriendo en http://localhost:3001`
            }]);
        }

        setIsLoading(false);
        setMessage("");
    };

    const handleWhatsAppClick = () => {
        
        window.open('https://wa.me/+51976217463','_blank');
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
                className="fixed bottom-6 right-6 bg-[#22C55E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50 hover:cursor-pointer"
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
                                className="text-white hover:text-gray-200 transition-colors hover:cursor-pointer"
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
                                    {msg.isAction ? (
                                        <button
                                            onClick={handleWhatsAppClick}
                                            className="bg-[#25D366] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#128C7E] transition-colors"
                                        >
                                            <FaWhatsapp />
                                            <span>Contactar por WhatsApp</span>
                                        </button>
                                    ) : (
                                        <div
                                            className={`max-w-[80%] rounded-lg p-3 ${
                                                msg.type === "user"
                                                    ? "bg-[#22C55E] text-white"
                                                    : "bg-gray-100 text-gray-800"
                                            }`}
                                        >
                                            {msg.content}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                                        Escribiendo...
                                    </div>
                                </div>
                            )}
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
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    className="bg-[#22C55E] text-white p-2 rounded-lg hover:bg-[#16A34A] transition-colors disabled:opacity-50"
                                    disabled={isLoading}
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