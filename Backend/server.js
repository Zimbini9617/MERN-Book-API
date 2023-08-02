const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/bookRoute');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/books', router);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('connected to mongodb');
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`local server is running in PORT ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });

