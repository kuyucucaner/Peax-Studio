const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// Uygulama oluşturma
const app = express();

// Orta katmanlar (middlewares)
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
// Port Ayarlama ve Sunucuyu Başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
