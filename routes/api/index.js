const router = require("express").Router();
const userRoutes = require("./userRoutes");
const movies = require('./movies');

router.use("/user", userRoutes);
router.use("/movies", movies)

module.exports = router;

