const ListItem = require("../models/list-item");

exports.getPlanner = (req, res, next) => {
  ListItem.fetchAll()
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addItem = (req, res, next) => {
  const title = req.body.title;
  const steps = req.body.steps;
  const due = req.body.due;
  const item = new ListItem(title, steps, due, null);
  item.addItem().then((result) => {
    res.json({ success: true });
  });
};

exports.deleteItem = (req, res, next) => {
  const itemId = req.body.id;
  item.deleteById(itemId).then((result) => {
    res.json({ success: true });
  });
};
