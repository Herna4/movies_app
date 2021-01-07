const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
    },
    { timestanps: true}
)

module.exports = mongoose.model('movies', Movie)