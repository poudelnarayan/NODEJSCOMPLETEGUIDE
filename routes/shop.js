const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.render("shop"); // this render method is provided by expressjs and it will use the default templating engine which is why we had to define the view engine in app.js
});

module.exports = router;
