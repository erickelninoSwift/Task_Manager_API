const express = require("express");
const router = express.Router();
const { updateTask } = require("../controllers/taskController");

router.put("/:id", updateTask);

module.exports = router;
