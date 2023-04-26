const express = require("express");
const projectRouter = require("./project/router");

const server = express();

server.use(express.json());
server.use("/api/resources/router", projectRouter);

server.use("*", (req, res) => {
  res.json({
    api: "up",
  });
});

server.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
