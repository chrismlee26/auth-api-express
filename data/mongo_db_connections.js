const { assert } = require('assert');
const mongoose = require('mongoose')

const URL = 'mongodb://localhost/movies-db'

mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { useNewUrlParser: true },
  function(err, db) {
    assert.equal(null, err);
    console.log(`connected to ${db}`)
    // db.close(); // turn on for testing
  }
);

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;