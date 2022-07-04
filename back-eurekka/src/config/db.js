const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.segfc.mongodb.net/desafio_eurekka`
    );
    console.log('Connected to the database succefully');
  } catch (error) {
    console.log(`Error connecting to DB: ${error}`);
  }
};

module.exports = db();
