const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  // runs for every incoming requests
  console.log("In the middleware");
  next();
});

 app.use((req, res, next) => {
  console.log("In the next middleware");
});

const server = http.createServer(app);

server.listen(3000);
