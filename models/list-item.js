const mongoDb = require("mongodb");
const getDb = require("../util/database").getDb;

class ListItem {
  constructor(title, steps, due, id) {
    this.title = title;
    this.steps = steps;
    this.due = due;
    this._id = id ? new mongoDb.ObjectID(id) : null;
  }

  addItem() {
    const db = getDb();
    return db
      .collection("planner")
      .insertOne(this)
      .then((result) => {
        return result.insertedId;
      })
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("planner")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteById(itemId) {
    const db = getDb();
    return db
      .collection("planner")
      .deleteOne({ _id: new mongoDb.ObjectID(itemId) })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = ListItem;
