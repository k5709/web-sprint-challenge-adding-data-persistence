const router = require("express").Router();

const Project = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProject = await Project.insert(req.body);
    newProject.project_completed = Boolean(newProject.project_completed);
    res.json(newProject);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong inside the project router",
    mesasge: err.message,
    stack: err.stack,
  });
});

module.exports = router;
