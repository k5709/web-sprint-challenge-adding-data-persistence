const express = require("express");
const projectRouter = require("./project/router");

const server = express();
server.use(express.json());
//routers
server.use("/api/resources/router", projectRouter);

server.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
