const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  title: { type: String },
  ingredients: [],
  directions: { type: String },
  image: { type: String, default: "./images/default-img.jpg"},
  category: String,
  favorite: { type: String, default: "yes" }
  
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
