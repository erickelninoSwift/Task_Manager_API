const express = require("express");
const router = express.Router();
const { updateTask } = require("../controllers/taskController");

router.patch("/:id", updateTask);

module.exports = router;
