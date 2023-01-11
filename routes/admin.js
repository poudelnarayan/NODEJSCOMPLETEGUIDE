const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  // "/add-product" can be used and the methods are different in the middleware. ie GET and POST
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
