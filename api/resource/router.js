const express = require("express");
const Resource = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.json(resources);
  } catch (err) {
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newResource = await Resource.insert(req.body);
    res.json(newResource);
    if (!newResource.resource_name) {
      next({
        status: 400,
        customMessage: "resource_name not found",
      });
    }
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.json({
    customMessage: "something went wrong in the resource router",
    errorMessage: err.message,
    stack: err.stack,
  });
});

module.exports = router;
