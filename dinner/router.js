const express = require("express");
const router = express.Router();
const Dinner = require("./model.js");

router.get("/supplies", (req, res) => {
  Dinner.find().then((supplies) => {
    res.status(200).json(supplies);
  });
});

router.post("/supplies", (req, res) => {
  Dinner.add(req.body)
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((err) => {
      res.status(200).json({ error: err.message });
    });
});

module.exports = router;
