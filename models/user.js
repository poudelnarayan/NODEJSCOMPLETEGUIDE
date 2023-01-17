const mongoDb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongoDb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    db.collection("user").insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) })
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

module.exports = User;
