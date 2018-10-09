const router = require("express").Router();
const miscController = require("../../controllers/misccontroller");

router.route("/")
    .get(miscController.findAll);


module.exports = router;