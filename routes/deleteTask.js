const express = require("express");
const router = express.Router();
const { deleteTask } = require("../controllers/taskController");

router.delete("/:id", deleteTask);

module.exports = router;
