const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // the render method somplu allows to pass in data that should be added into our view
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;