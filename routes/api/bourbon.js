const router = require("express").Router();
const bourbonController = require("../../controllers/bourboncontroller");

router.route("/")
    .get(bourbonController.findAll);


module.exports = router;