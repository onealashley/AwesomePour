const router = require("express").Router();
const ginController = require("../../controllers/gincontroller");

router.route("/")
    .get(ginController.findAll);


module.exports = router;