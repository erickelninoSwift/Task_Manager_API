const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide text"],
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const task_collection = mongoose.model("Task", taskSchema);

module.exports = { task_collection };
