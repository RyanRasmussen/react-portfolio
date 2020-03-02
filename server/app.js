require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const routes = require('./router');

const port = process.env.PORT || 5000;

app.use(express.static('dist'));

// Specify the routes to be used for our application 
app.use('/api', routes);

app.use('*',  (req, res)=> {
  res.sendFile(path.join(__dirname, '/../dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://${process.env.BASE_URL}:${port}/`);
})