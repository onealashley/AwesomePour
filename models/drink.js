const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [],
  directions: { type: String, required: true },
  image: String,
  favorite: { type: String, default: "yes" }
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
