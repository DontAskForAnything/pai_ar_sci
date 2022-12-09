const express = require('express');
const application = express();
const path = require('path');
const port = 3000;

const server = application.listen(port, () => {
  console.log(`Server working at port: ${port}`);
});

application.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./indexFile.html"))
});

application.get('/sci', function (req, res) {
    res.sendFile(path.join(__dirname, "./bestSchool.html"))
});
application.get('/apple', function (req, res) {
    res.sendFile(path.join(__dirname, "./banana.html"))
});

