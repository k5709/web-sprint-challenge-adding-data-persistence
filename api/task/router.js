const express = require("express");
const Task = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    await Task.getAll().then((tasks) => {
      return res.status(200).json(tasks);
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newTask = await Task.insert(req.body);
    // newTask.task_completed = Boolean(newTask.task_completed);
    return res.json(newTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
