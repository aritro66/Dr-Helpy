const chai = require("chai");
const chaiHttp = require("chai-http");
// import { config } from "dotenv";
const should = chai.should();
const request = require("supertest");
const server = require("../server.js");

// config({
//   path: "./.env",
// });

// const server = process.env.BASE_URL;
chai.use(chaiHttp);

// User authentication
describe("/POST Successful user authentication check", () => {
  it("logging in the user", function (done) {
    this.timeout(1000000);
    request(server)
      .post("/login")
      .send({
        email: "ghosharitro66@gmail.com",
        password: "123",
      })
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.be.a("object");
        // res.body.should.be.have.property("success");
        // res.body.success.should.equal(true);
        // res.body.should.be.have.property("jwt_token");
        // res.body.jwt_token.should.be.a("string");
        done();
      });
  });
});
