const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Drink
            .find({ favorite: "yes" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        console.log("im in the function as well")
        db.Drink
            .findOneAndUpdate({ _id: req.params.id }, { $set: { favorite: "no" } }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }


}