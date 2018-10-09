const router = require("express").Router();
const champagneController = require("../../controllers/champagnecontroller");

router.route("/")
    .get(champagneController.findAll);


module.exports = router;