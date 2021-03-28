const express = require("express");

const plannerController = require("../controllers/planner");

const router = express.Router();

router.get("/planner", plannerController.getPlanner);

router.post("/add-item", plannerController.addItem);

router.post("/remove-item", plannerController.deleteItem);

module.exports = router;
