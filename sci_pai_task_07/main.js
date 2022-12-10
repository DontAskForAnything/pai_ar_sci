const express = require('express');
const application = express();
const path = require('path');
const { port } = require("./source/configuration");

const server = application.listen(port, () => {
  console.log(`Server working at port: ${port}`);
});

