const router = require("express").Router();
const drinkRoutes = require("./drinks");
const favRoutes = require("./favorites");

// drink routes
router.use("/drinks", drinkRoutes);
router.use("/favorites", favRoutes);

module.exports = router;
