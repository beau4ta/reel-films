const router = require("express").Router();
const movieController = require("../../controllers/movieController");
const passport = require("passport")
const User = require('../../models/user')
require('../../config/passport')(passport);

router.route("/profile/:username")
    .get(movieController.findByUsername)

    router.post('/signup',function (req, res) { 
      User.create(req.body)
      .then((user) => {
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          console.log(user._id)
          return res.json(user._id);
        })
      })
  });


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
router.get('/check', function(req, res) {
  console.log(req.user)
  if(req.user) {
    res.json(true);
  }
  else {
    res.json(false)
  }
})


//Logout Route
router.get('/', (req, res) => {
    // Express middleware function for logging out a user. The action is successful
// if the user is no longer authenticated.
var logout = function (req, res, next) {
  // Get rid of the session token. Then call `logout`; it does no harm.
  req.logout();
  req.session.destroy(function (err) {
    if (err) { return next(err); }
    // The response should indicate that the user is no longer authenticated.
    return res.send({ authenticated: req.isAuthenticated() });
  });
};
    
})

module.exports = router