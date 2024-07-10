require('dotenv').config();
<<<<<<< HEAD
=======
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', require('./api/create-coach-account'));
app.use('/api', require('./api/handle-booking-payment'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("Environment variables loaded.");
});
>>>>>>> f364e4d360d208a6b6bdea13e56452f98ee186a9
