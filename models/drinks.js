const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [],
  directions: { type: String, required: true },
  image: String
});

const Drinks = mongoose.model("Drinks", DrinkSchema);

module.exports = Drinks;
