const Movies = require('../models/movies')

module.exports = function (app) {
  // Get
  app.get('/movies', (req,res) => {
    Movies.find({}.lean().populate('movies'), (err, movies) => {
      if(err) console.log(err)
      else(res.json(movies))
    })
  })

  // Post
  app.post('/uploadMovies', (req,res) => {
    const newMovie = new Movies(req.body)
    newMovie.save((err, newMovie) => {
      if(err) console.log(err)
      else res.redirect('/')
    })
  })

  // Update
  app.put('/updateMovies', (req,res) => {
    const movieToUpdate = null
    
    Movies.find({_id: req.body.ObjectId}, (err, movies) => {
      if(err) console.log(err)
      else movieToUpdate = movies
    })
  
    if(movieToUpdate) {
      movieToUpdate.title = req.body.title
      movieToUpdate.save((err, movieToUpdate) => {
        if(err) console.log(err)
        return res.json(movieToUpdate)
      })
    }
    return res.redirect('/')
  })

  // Delete
  app.delete('/deleteMovies/:id', (req,res) => {
    const movieToDelete = req.params.id

        Movie.find({_id: req.body.ObjectId}, (err, movie) => {
          if(err) console.log(err)
          else movieToDelete = movies
        })
        if(movieToDelete) {
          movieToDelete.delete({movieToDelete}, (err, deletedMovies) => {
            if(err) console.log(err)
            else res.json(deletedMovies)
            console.log(movieToDelete)
          })
        }
        return res.redirect('/')
    })
}




