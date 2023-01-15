const mongodb = require("mongodb");
const dotenv = require("dotenv");

const MongoClient = mongodb.MongoClient;

dotenv.config();

const username = process.env["USER_NAME"];
const password = process.env["PASSWORD"];

const mongoConnect = (callback) => {
  const url = `mongodb+srv://${username}:${password}@cluster0.fsnczme.mongodb.net/?retryWrites=true&w=majority`;
  MongoClient.connect(url)
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
