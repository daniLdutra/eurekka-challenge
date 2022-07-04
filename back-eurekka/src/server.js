const express = require('express');
const { db } = require('./config/db');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => {
  return res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
