const asyncWrapperjs = require("../middleware/asyncWrapper");
const { task_collection } = require("../model/TaskSchema");

const taskController = asyncWrapperjs(async (request, response) => {
  const tasks = await task_collection.find({});
  response.status(200).json({ tasks });
});

const createTask = asyncWrapperjs(async (request, response) => {
  const task = await task_collection.create(request.body);
  await task.save();
  response.status(201).json(task);
});

const selectTask = asyncWrapperjs(async (request, response, next) => {
  const { id: taskID } = request.params;
  const task = await task_collection.findOne({ _id: taskID });
  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    return next(error);
  }
  response.status(200).json({ task });
});

const updateTask = asyncWrapperjs(async (request, response) => {
  const { id: taskID } = request.params;
  const { name, isCompleted } = request.body;
  const taskToUpdate = await task_collection.findOneAndUpdate(
    { _id: taskID },
    {
      name,
      isCompleted,
    },
    { new: true, runValidators: true }
  );
  if (!taskToUpdate) {
    return response.status(404).json({
      status: "not found",
      message: "No data with ID provided was found in the Database ",
    });
  }

  await taskToUpdate.save();
  response.status(200).json({
    task: request.body,
  });
});

const deleteTask = asyncWrapperjs(async (request, response) => {
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
});

module.exports = {
  taskController,
  createTask,
  selectTask,
  updateTask,
  deleteTask,
};
