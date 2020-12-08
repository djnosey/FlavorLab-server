const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: String,
  group: String,
  subGroup: String,
  description: String,
  image: String,
  substitutes: [String],
  bestPairs: [String],
  suprisePairs: [String],
  allPairs: [{ name: String, score: Number, group: String }],
});

const Ingredients = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredients;
