const chai = require("chai");
const chaiHttp = require("chai-http");
const request = require("supertest");
const server = require("../server.js");

chai.use(chaiHttp);

// User authentication
describe("/POST Successful user authentication check", function () {
  setTimeout(() => {
    console.log("stopped test");
    process.exit(0);
  }, 20000);
  it("logging in the user", function (done) {
    request(server)
      .post("/login")
      .send({
        email: "ghosharitro66@gmail.com",
        password: "123",
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
