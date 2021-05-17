// const { assert } = require('chai');
const mongoose = require('mongoose')
assert = require('assert')

// Set default mongodb connection
const url = 'mongodb+srv://chris-test:Upbu9PD3oDWO5Jgx@cluster0.1zuec.mongodb.net/arnolddatabase?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, 
    useFindAndModify: false, 
  },
  (err, db) => {
    assert.equal(null, err);
    console.log(`Connected to ${url}`)
    // db.close(); // turn on for testing
  },
);

//Bind connection to error event (to get notification of connection errors)

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

//Get the default connection
module.exports = mongoose.connection;