const router = require("express").Router();
const drinkRoutes = require("./drinks");
const favRoutes = require("./favorites");
const ginRoutes = require("./gin");
const vodkaRoutes = require("./vodka");
const bourbonRoutes = require("./bourbon");
const rumRoutes = require("./rum");
const miscRoutes = require("./misc");
const champagneRoutes = require("./champagne");
const nonalcoholicRoutes = require("./nonalcoholic");

// drink routes
router.use("/drinks", drinkRoutes);
router.use("/favorites", favRoutes);
router.use("/gin", ginRoutes);
router.use("/vodka", vodkaRoutes);
router.use("/bourbon", bourbonRoutes);
router.use("/rum", rumRoutes);
router.use("/misc", miscRoutes);
router.use("/champagne", champagneRoutes);
router.use("/nonalcoholic", nonalcoholicRoutes);

module.exports = router;
