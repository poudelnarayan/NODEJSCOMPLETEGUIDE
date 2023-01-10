const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form method = 'POST' action='/admin/add-product'> <input type = 'text' name = 'title' > <button type = 'submit' >send </button> </form>"
  );
});

router.post("/add-product", (req, res) => {
  // "/add-product" can be used and the methods are different in the middleware. ie GET and POST
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
