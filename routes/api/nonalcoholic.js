const router = require("express").Router();
const nonalcoholicController = require("../../controllers/nonalcoholiccontroller");

router.route("/")
    .get(nonalcoholicController.findAll);


module.exports = router;