const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  favorites: [{ type: Schema.Types.ObjectId, ref: "Favorite" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;