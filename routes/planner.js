const express = require("express");

const plannerController = require("../controllers/planner");

const router = express.Router();

router.get("/planner", plannerController.getPlanner);

router.post("/add-item", plannerController.addItem);

router.post("/delete-item", plannerController.deleteItem);

router.post("/update-item", plannerController.updateItem);

module.exports = router;
