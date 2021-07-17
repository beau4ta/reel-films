const db = require("../models");

module.exports = {
    //search a user and see their watch list
       findByUsername: function(req, res) {
           db.Reelfilms
           .find({$text: {$search: req.params.username, $caseSensitive: false}})
           .then(dbModel => res.json(dbModel))
           .catch(err => res.status(422).json(err));
       },
       
       //DO WE NEED A CONTROLLER FOR ADDING A MOVIE FROM API TO A PROFILE OR IS THAT SOMETHING WE CAN DO IN THE FRONTEND?
}