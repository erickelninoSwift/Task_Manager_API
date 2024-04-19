const express = require("express");
const router = express.Router();
const { selectTask } = require("../controllers/taskController");

router.get("/:id", selectTask);

module.exports = router;
