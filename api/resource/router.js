const express = require("express");
const Resource = require("./model");
const db = require("../../data/dbConfig");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await Resource.insert(req.body);
    return res.status(201).json(resource);
  } catch (err) {
    next(err);
  }
});

// router.use((err, req, res, next) => {
//   res.json({
//     customMessage: "something went wrong in the resource router",
//     errorMessage: err.message,
//     stack: err.stack,
//   });
// });

module.exports = router;
