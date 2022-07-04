const express = require('express');
const { db } = require('./config/db');
const { reportRoutes } = require('./routes/reportRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));

const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => {
  return res.send('Hello World!');
});

app.use('/report', reportRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
