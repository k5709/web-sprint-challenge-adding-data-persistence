const express = require("express");

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();
server.use(express.json());

//routers
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.use("*", (req, res, next) => {
  next({
    status: 404,
    message: "endpoint not found",
  });
});

server.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "error in the server",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
