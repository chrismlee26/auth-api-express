const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect
const should = chai.should();
const chaiHttp = require("chai-http");

const server = require('./index.js')

chai.use(chaiHttp);

describe("basic test routes", () => {
  it('returns a 200', (done) => { 
  });

  it('gets a list of movies', (done) => { 
  });

  it('add a movie to the db', (done) => { 
  });

  it('update an existing movie in the DB', (done) => { 
  });

  it('remove an existing movie in the DB', (done) => { 
  });
})

describe("API Tests", function() {
  it("TODO: Should test each endpoint of your API");
});

