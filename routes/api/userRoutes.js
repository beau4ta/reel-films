const router = require("express").Router();
const movieController = require("../../controllers/movieController");

const Movie = require("../../models");

router.route("/profile/:username")
    .get(movieController.findByUsername)

//Signin Route

router.post('/signin', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      console.log(user)
      if (!user) { return res.json("incorrect username"); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log(user._id)
        return res.json(user._id);
      });
    })(req, res, next);
  });


//Logout Route
router.get('/logout', (req, res) => {
    req.logout();
})

module.exports = router