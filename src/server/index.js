// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Configuración de CORS más permisiva para desarrollo
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type']
// }));

// app.use(express.json());

// // Middleware para logging
// app.use((req, res, next) => {
//     console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
//     next();
// });

// const chatResponses = {
//     contacto: {
//         keywords: ['contacto', 'email', 'teléfono', 'dirección', 'ubicación', 'dónde', 'comunicar'],
//         response: 'Puedes contactarnos en:\n Email: petucodeSAC@gmail.com\n Tel: +51 976 217 463\n Dirección: Chiclayo - Perú\n\n¿Te gustaría hablar directamente con nosotros por WhatsApp?'
//     },
//     precios: {
//         keywords: ['precio', 'costo', 'planes', 'pagar', 'valor', 'cuánto', 'tarifa'],
//         response: 'Nuestros planes comienzan desde S/.99. ¿Te gustaría ver más detalles sobre nuestros servicios?\n\nPodemos discutir los precios directamente por WhatsApp para darte una cotización personalizada.'
//     },
//     servicios: {
//         keywords: ['servicio', 'ofreces', 'haces', 'consultoría', 'qué hacen', 'trabajos'],
//         response: 'Ofrecemos servicios de consultoría en:\n- Desarrollo de software\n- Consultoría estratégica\n- Optimización de procesos\n\n¿Te gustaría conocer más detalles sobre algún servicio en particular por WhatsApp?'
//     },
//     horarios: {
//         keywords: ['horario', 'hora', 'días', 'cuándo', 'atención'],
//         response: 'Nuestro horario de atención es:\nLunes a Viernes: 8:00 - 18:00\nSábados: 9:00 - 13:00\n\n¿Necesitas agendar una cita? Podemos coordinar por WhatsApp.'
//     },
//     ayuda: {
//         keywords: ['ayuda', 'soporte', 'problemas', 'error', 'solución'],
//         response: 'Si tienes algún problema, por favor, contacta a nuestro equipo de soporte por WhatsApp. Estamos aquí para ayudarte.'
//     },
//     cotizacion: {
//         keywords: ['cotización', 'precio', 'costo', 'estimación', 'cuánto cuesta'],
//         response: 'Para obtener una cotización personalizada, por favor, contacta a nuestro equipo por WhatsApp. Estamos aquí para ayudarte.'
//     },
//     whatsapp: {
//         keywords: ['whatsapp', 'contacto', 'comunicar', 'mensaje', 'chatear'],
//         response: '¡Claro! Puedes contactarnos por WhatsApp para una atención más personalizada. ¡Estamos aquí para ayudarte!'
//     }
// };

// const defaultResponse = "Gracias por tu mensaje. ¿Te gustaría hablar directamente con nosotros por WhatsApp para una atención más personalizada?";

// app.post('/api/chat', (req, res) => {
//     try {
//         console.log('Mensaje recibido:', req.body);
//         const { message } = req.body;
        
//         if (!message) {
//             console.error('Mensaje vacío recibido');
//             return res.status(400).json({ error: 'El mensaje no puede estar vacío' });
//         }

//         const lowerMessage = message.toLowerCase();
//         console.log('Buscando palabras clave en:', lowerMessage);
        
//         let response = defaultResponse;
//         let matchedCategory = null;
        
//         for (const [category, data] of Object.entries(chatResponses)) {
//             if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
//                 response = data.response;
//                 matchedCategory = category;
//                 break;
//             }
//         }
        
//         console.log('Categoría encontrada:', matchedCategory);
//         console.log('Respuesta enviada:', response);
        
//         res.json({ response });
//     } catch (error) {
//         console.error('Error en el servidor:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }
// });

// // Ruta de prueba
// app.get('/api/health', (req, res) => {
//     res.json({ status: 'OK', timestamp: new Date().toISOString() });
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
//     console.log('Endpoints disponibles:');
//     console.log('- POST /api/chat');
//     console.log('- GET /api/health');
// }); 

