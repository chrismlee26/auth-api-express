const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {type: String, required: true},
  year: {type: Number, required: true},
  // overview: {type: String, required: false},
  // id: {type: Number, required: false},
})

// var Movies = mongoose.model('Movies', movieSchema)

// const newMovie = new Movies({
//   title: "Commando",
//   year: "1985",
// })

// newMovie.save()

module.exports = mongoose.model("Movies", movieSchema)