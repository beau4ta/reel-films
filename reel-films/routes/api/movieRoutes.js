const router = require("express").Router();
const movieController = require("../../controllers/movieController");

const Movie = require("../../models");

router.route("/profile/:username")
    .get(movieController.findByUsername)

//NEED TO ADD SIGNIN FUNCTIONALITY


//Logout Route
router.get('/logout', (req, res) => {
    req.logout();
})

module.exports = router