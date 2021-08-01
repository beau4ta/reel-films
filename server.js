const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('passport')
const session = require('express-session');
require('./config/passport')(passport);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({  secret: 'secret',  resave: true,  saveUninitialized: true}));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reelfilms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});