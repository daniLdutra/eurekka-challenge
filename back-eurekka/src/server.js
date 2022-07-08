const express = require('express');
const { db } = require('./config/db');
const { reportRoutes } = require('./routes/reportRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));

// ao acessar a rota "/images", acessa a pasta "src/assets" no back
app.use('/images', express.static('src/assets'));

const PORT = process.env.PORT || 3001;

app.use('/report', reportRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
