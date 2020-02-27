const fs = require("fs");

const express = require('express');
const router = express.Router();

// Route that serves index.html
router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  // Capture the contents of index.html in a variable
  let fileContents = fs.readFileSync("../dist/index.html", {encoding: "utf8"});
  // Send a response to the client with the index.html file
  response.write(fileContents);
  response.end();
});

module.exports = router;