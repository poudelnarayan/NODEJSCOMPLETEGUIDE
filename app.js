const express = require("express");

const app = express();

app.use((req, res, next) => {
  // runs for every incoming requests
  console.log("In the middleware");
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In the next middleware");
  res.send("<h1>Hello from express!!</h1>"); //send method provided by express.js attaches all the headers and requires things
});

app.listen(3000);
