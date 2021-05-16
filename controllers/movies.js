const Movies = require('../models/movies')

module.exports = function (app) {
  // Get
  app.get('/movies', (req,res) => {
    Movies.find({}, (err, movies) => {
      if(err) console.log(err)
      else(res.json(movies))
    })
  })

  // Post
  app.post('/uploadMovies', (req,res) => {
    const newMovies = new Movies(req.body)

    newMovies.save((err, newMovies) => {
      if(err) console.log(err)
      return res.redirect('/')
    })
  })

  // Update
  app.put('/updateMovies'), (req,res) => {
    const movieToUpdate = null
    
    Movies.find({_id: req.body.ObjectId}, (err, movies) => {
      if(err) console.log(err)
      else movieToUpdate = movie
    })

    if(movieToUpdate) {
      movieToUpdate.title = "commando"
      movieToUpdate.save((err, updatedMovie) => {
        if(err) console.log(err)
        return res.json(movies)
      })
    }

    return res.redirect('/')
  }

  // Delete
  app.delete('/deleteMovies', (req,res) => {
    const movieToDelete = null

        Movie.find({_id: req.body.ObjectId}, (err, movies) => {
          if(err) console.log(err)
          else movieToDelete = movies
        })
        if(movieToDelete) {
          movieToDelete.delete({movieToDelete}, (err, deletedMovie) => {
            if(err) console.log(err)
            else res.json(deletedMovie)
          })
        }
        return res.redirect('/')
    })
}




