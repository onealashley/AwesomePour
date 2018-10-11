const router = require("express").Router();
const vodkaController = require("../../controllers/vodkacontroller");

router.route("/")
    .get(vodkaController.findAll);


module.exports = router;