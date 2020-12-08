const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  combination: String,
  recipe: String,
  image: String,
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;