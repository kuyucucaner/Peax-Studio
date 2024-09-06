const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const bodyParser = require('body-parser');
const mailRoutes = require('./routes/mail-routes'); // Dosya yolu
// Uygulama oluşturma
const app = express();

// Orta katmanlar (middlewares)
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Geliştirme sırasında frontend URL
}));

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", "http://localhost:5000"], // API istekleri için gerekli
    },
  },
}));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; connect-src 'self' http://localhost:5000;"); // İstek yapılan kaynağa göre düzenleyin
  next();
});
app.use('/api/mail', mailRoutes);

// Frontend build klasörünü backend üzerinden sunma
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Diğer tüm istekler için index.html dosyasını sunma
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Bir hata oluştu!');
});

// Port Ayarlama ve Sunucuyu Başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
