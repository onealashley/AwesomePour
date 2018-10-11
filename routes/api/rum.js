const router = require("express").Router();
const rumController = require("../../controllers/rumcontroller");

router.route("/")
    .get(rumController.findAll);


module.exports = router;