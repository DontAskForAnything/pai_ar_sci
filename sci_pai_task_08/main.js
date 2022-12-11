const http = require("http");
const https = require("https");
const { port, ssl } = require("./source/configuration");
const express = require('express');
const application = express();

const server = (null !== ssl)
    ? https.createServer(Object.assign({}, ssl), application)
    : http.createServer(application);

server.listen(port, () => {
    console.log(`sample_server is running.`);
    console.log(`port: ${port}`);
    console.log(`ssl: ${null !== ssl}`);
});

application.get('/', function (req, res) {
    res.send("Lewy SSL heu heu heu")
});
