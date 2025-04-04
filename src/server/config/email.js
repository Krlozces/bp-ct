const nodemailer = require('nodemailer');

// Crear el transporter de nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Función para enviar email
const sendEmail = async (formData) => {
    const { name, email, phone, company, message, subject } = formData;

    // Email para el administrador
    const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // El email donde recibirás los mensajes
        subject: `Nuevo mensaje de contacto - ${subject}`,
        html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <p><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
        `
    };

    // Email de confirmación para el usuario
    const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Gracias por contactarnos - PetuCode',
        html: `
            <h2>¡Hola ${name}!</h2>
            <p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
            <p>Estos son los detalles de tu mensaje:</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
            <br>
            <p>Saludos,</p>
            <p>El equipo de PetuCode</p>
        `
    };

    try {
        // Enviar email al administrador
        await transporter.sendMail(adminMailOptions);
        // Enviar email de confirmación al usuario
        await transporter.sendMail(userMailOptions);
        return { success: true, message: 'Email enviado correctamente' };
    } catch (error) {
        console.error('Error al enviar email:', error);
        throw new Error('Error al enviar el email');
    }
};

module.exports = { sendEmail }; 