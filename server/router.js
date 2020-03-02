const loremIpsum = require('./src/generator');
const querystring = require("querystring");

const express = require('express');
const router = express.Router();

// Route that generates the lorem ipsum text and reloads a modified index.html
router.post('/', (request, response) => {
  // Generate the lorem ipsum text with the getAllParagraphs function
  let loremIpsumText = loremIpsum.getAllParagraphs(request.body.num);
  // Send a response to the client with the modified index.html file
  response.json(loremIpsumText);
  response.end();
});

module.exports = router;