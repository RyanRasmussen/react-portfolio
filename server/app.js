require('dotenv').config();

const express = require('express');
const app = express();

const routes = require('./router');

const port = process.env.PORT || 5000;

app.use(express.static('dist'));

// Specify the routes to be used for our application 
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://${process.env.BASE_URL}:${port}/`);
})