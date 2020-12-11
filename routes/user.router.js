const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user.model");

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .populate("favorites")
    .then((returnedUser) => {
      res.status(200).json(returnedUser);
    })
    .catch((err) => {
      createError(err);
    });
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, email } = req.body;
  User.findByIdAndUpdate(id, { name, email }, { new: true })
    .then((updatedUser) => {
      res.status(201).json(updatedUser);
    })
    .catch((err) => {
      createError(err);
    });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  User.findByIdAndDelete(id).then(() => {
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      }
      res
        .status(204) //  No Content
        .send();
    });
  });
});

module.exports = router;
