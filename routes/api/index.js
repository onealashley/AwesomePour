const router = require("express").Router();
const drinkRoutes = require("./drinks");

// Book routes
router.use("/drinks", drinkRoutes);

module.exports = router;
