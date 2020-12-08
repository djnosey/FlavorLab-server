const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user.model");
const Favorite = require("../models/favorite.model");

router.post("/", (req, res, next) => {
  const userSessionData = req.session.currentUser;
  const id = userSessionData._id;
  const { combination, recipe, image } = req.body;
  Favorite.create({ user: id, combination, recipe, image })
    .then((returnedFavorite) => {
      const returnedFavoriteID = returnedFavorite._id;
      User.findByIdAndUpdate(id, {
        $push: { favorites: returnedFavoriteID },
      }).then(() => {
        res.status(201).send();
      });
    })
    .catch((err) => {
      createError(err);
    });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  const userSessionData = req.session.currentUser;
  userId = userSessionData._id;
  User.findByIdAndUpdate(userId, { $pull: { favorites: id } })
    .then(() => {
      Favorite.findByIdAndDelete(id);
    })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      createError(err);
    });
});

module.exports = router;
