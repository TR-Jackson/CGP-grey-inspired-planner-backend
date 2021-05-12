const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  steps: { type: mongoose.Schema.Types.Mixed, required: true },
  due: { type: Number, required: true },
});

module.exports = mongoose.model("PlannerItem", itemSchema);
