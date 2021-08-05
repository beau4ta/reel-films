const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String },
    genre: { type: String },
    plot: { type: String },
    year: { type: Date, default: Date.now },
    poster: { type: String, required: true }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
