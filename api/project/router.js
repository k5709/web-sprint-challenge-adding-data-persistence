const express = require("express");

const router = express.Router();
const Project = require("./model");

router.use("/api/projects", (req, res) => {
  res.send({ message: "api working as expected" });
});

router.get("/api/projects", (req, res, next) => {
  //   const { project_name, project_description, project_completed } = req.body;
  res.send("projects get working");
});

router.post("/api/projects", (req, res, next) => {
  res.send("projects post working");
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong inside the project router",
  });
});

module.exports = router;
