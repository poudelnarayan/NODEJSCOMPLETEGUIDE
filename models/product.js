const fs = require("fs");
const path = require("path");
const absPath = require("../util/path");
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(absPath, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this); // to use 'this' we must use arrow function otherwise 'this' will loose its context
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(absPath, "data", "products.json");

    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
