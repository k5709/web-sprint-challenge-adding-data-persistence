const express = require("express");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();
server.use(express.json());

//routers
server.use("/api/project/", projectRouter);
server.use("/api/resource/", resourceRouter);
server.use("/api/task/", taskRouter);

server.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "error in the server",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
