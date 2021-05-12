const PlannerItem = require("../models/PlannerItem");

exports.getPlanner = (req, res, next) => {
  PlannerItem.find()
    .then((list) => {
      console.log("returning: ", list);
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
  const item = new PlannerItem({
    title: title,
    steps: steps,
    due: due,
  });
  item
    .save()
    .then((result) => {
      res.json({ _id: result._id });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteItem = (req, res, next) => {
  const itemId = req.body.id;
  PlannerItem.findByIdAndDelete(itemId).then((result) => {
    res.json({ success: true });
  });
};

exports.updateItem = (req, res, next) => {
  const title = req.body.title;
  const steps = req.body.steps;
  const due = req.body.due;
  const _id = req.body._id;
  PlannerItem.findByIdAndUpdate(_id, { title: title, steps: steps, due: due })
    .then((result) => res.json({ success: true }))
    .catch((err) => console.log(err));
};
