const express = require('express');
const router = express.Router();
const MailService = require('../services/mail-service');

router.post('/send-email', async (req, res) => {
    const { from, subject, text } = req.body;
    console.log('Request Body : ', req.body);
    try {
        await MailService.sendEmail(from, subject, text);
        res.status(200).send('E-posta başarıyla gönderildi!');
    } catch (error) {
        console.error('E-posta gönderiminde hata:', error);
        res.status(500).send('E-posta gönderiminde bir hata oluştu.');
    }
});

module.exports = router;
