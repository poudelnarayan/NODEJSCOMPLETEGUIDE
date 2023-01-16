const mongodb = require("mongodb");
const dotenv = require("dotenv");

const MongoClient = mongodb.MongoClient;

dotenv.config();

const username = process.env["USER_NAME"];
const password = process.env["PASSWORD"];

let _db;

const mongoConnect = (callback) => {
  const url = `mongodb+srv://${username}:${password}@cluster0.fsnczme.mongodb.net/shop?retryWrites=true&w=majority`;
  MongoClient.connect(url)
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
