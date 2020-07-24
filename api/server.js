const express = require("express");

const Dinner = require("../dinner/model.js");

const server = express();

server.use(express.json());

server.get("/supplies", (req, res) => {
  Dinner.find().then((supplies) => {
    res.status(200).json(supplies);
  });
});

server.post("/supplies", (req, res) => {
  Dinner.add(req.body)
    .then(() => {
      res.status(202).json(req.body);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

server.delete("/supplies/:id", (req, res) => {
  Dinner.remove(req.params.id).then((item) => {
    res.status(202).json(item);
  });
});

module.exports = server;
