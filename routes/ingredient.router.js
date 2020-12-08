const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Ingredient = require("../models/ingredient.model");

router.get("/", (req, res, next) => {
  Ingredient.find()
    .then((ingredientList) => {
      res.status(200).json(ingredientList);
    })
    .catch((err) => {
      createError(err);
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Ingredient.findById(id)
    .then((returnedIngredient) => {
      res.status(200).json(returnedIngredient);
    })
    .catch((err) => {
      createError(err);
    });
});

module.exports = router;
