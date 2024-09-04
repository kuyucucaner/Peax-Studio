const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

const MailService = {
    sendEmail: async (from, subject, text) => {
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.MAIL_ID,
                    pass: process.env.MAIL_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: true // Güvenlik için true olarak ayarlanmalıdır
                },
            });

            const info = await transporter.sendMail({
                from: from,
                to: 'peaxstudio@gmail.com',
                subject: subject, // E-posta başlığı
                text: `Subject: ${subject}\nFrom: ${from}\n\n${text}`, // E-posta içeriği
            });
            

            console.log('Email sent: %s', info.messageId);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    },
};

module.exports = MailService;