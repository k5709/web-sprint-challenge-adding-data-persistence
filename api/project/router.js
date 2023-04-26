const router = require("express").Router();

const Project = require("./model");

router.get("/api/projects", async (req, res, next) => {
  try {
    console.log(req.body);
    const projects = await Project.getAll();
    res.json({
      resource_id: 1,
      resource_name: "foo",
      resource_description: null,
    });
  } catch (next) {
    next();
  }
});

router.post("/api/projects", async (req, res, next) => {
  try {
    const newProject = Project.insert(req.body);
    res.json({
      ...newProject,
      project_completed: newProject.project_completed ? true : false,
    });
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
