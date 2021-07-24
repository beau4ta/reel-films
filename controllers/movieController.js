const db = require("../models");
const bcrypt = require('bcrypt');
const passport = require('passport')


module.exports = {
    //search a user and see their watch list
       findByUsername: function(req, res) {
           db.User
           .find({$text: {$search: req.params.username, $caseSensitive: false}})
           .then(dbModel => res.json(dbModel))
           .catch(err => res.status(422).json(err));
       },
       findAll: function(req, res) {
        db.Movie
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Movie
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Movie
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Movie
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Movie
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}