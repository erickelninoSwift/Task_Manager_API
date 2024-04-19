const express = require("express");
const app = express();
const getAlltask = require("./routes/Task");
const createmyTask = require("./routes/createTask");
const deleteTask = require("./routes/deleteTask");
const updatetask = require("./routes/updateTask");
const selectaTask = require("./routes/getTask");
const { connectDatabse } = require("./database/connection");
require("dotenv").config();

app.use(express.static("./public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use("/api/v1/alltasks", getAlltask);
app.use("/api/v1/alltasks", createmyTask);
app.use("/api/v1/alltasks", selectaTask);
app.use("/api/v1/alltasks", deleteTask);
app.use("/api/v1/alltasks", updatetask);
app.get("/*", (request, response) => {
  response.status(404).send("<h1>404 page not found </h1>");
});

const start = async () => {
  try {
    await connectDatabse(process.env.MONGO_URL);

    app.listen(process.env.PORT, () => {
      console.log("your server is running so well on port ", process.env.PORT);
    });
  } catch (error) {
    console.log(`Error found ${error}`);
  }
};

start();
