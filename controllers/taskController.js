const express = require("express");
const { task_collection } = require("../model/TaskSchema");

const taskController = async (request, response) => {
  try {
    const getAllTasks = await task_collection.find({});
    if (getAllTasks) {
      response.status(200).json({
        result: getAllTasks,
      });
    } else {
      response.status(200).json({
        result: "There was no record found ",
      });
    }
  } catch (error) {
    response.status(404).json({
      error: error._message,
    });
  }
};

const createTask = async (request, response) => {
  try {
    const task = await task_collection.create(request.body);
    await task.save();
    response.status(201).json(task);
  } catch (error) {
    console.log(error);
    response.status(500).json({
      error: error._message,
    });
  }
};

const selectTask = async (request, response) => {
  try {
    const { id: taskID } = request.params;

    if (taskID.length > 24) {
      return response.status(500).json({
        message: "Please provide correct id format",
      });
    }
    const selectedTask = await task_collection.findOne({ _id: taskID });
    console.log(taskID.length);
    if (!selectedTask) {
      return response.status(404).json({
        msg: `No task was found with ID `,
      });
    }

    response.status(200).json({
      myTask: selectedTask,
    });
  } catch (error) {
    response.status(404).json({
      error: error._message,
    });
  }
};

const updateTask = (request, response) => {
  console.log("task updated", request.params.id);
  response.status(200).send("update task ");
};

const deleteTask = async (request, response) => {
  try {
    const { id: taskID } = request.params;

    const task = await task_collection.findByIdAndDelete({
      _id: taskID,
    });
    if (!task) {
      return response.status(404).json({
        message: `Data your trying to delete does not exist `,
      });
    }
    response.status(200).json({
      message: `Task ID : ${taskID} was deleted successfully`,
    });
  } catch (error) {
    response.status(404).json({
      message: "Data was not found ",
    });
  }
};

module.exports = {
  taskController,
  createTask,
  selectTask,
  updateTask,
  deleteTask,
};