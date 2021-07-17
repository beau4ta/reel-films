const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reelfilms"
);

const userSeed = [
    {
        email: 'beaufortier13@gmail.com',
        username: 'beau4ta',
        password: 'password1'
    },
    {
        email: 'johnsmith1@aol.com',
        username: 'jsmith1',
        password: 'password1'
    },
    {
        email: 'janedoe2@gmail.com',
        username: 'jdoe2',
        password: 'password1'
    }
]
db.User.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
  });

  