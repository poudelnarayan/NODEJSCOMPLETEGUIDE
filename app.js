const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form method = 'POST' action='/product'> <input type = 'text' name = 'title' > <button type = 'submit' >send </button> </form>"
  );
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express!!</h1>");
});

app.listen(3000);
