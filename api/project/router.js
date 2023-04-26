const express = require("express");

const router = express.Router();

router.get("/api/projects", (req, res) => {
  res.send({ message: "api working as expected" });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong inside the project router",
  });
});

module.exports = router;
