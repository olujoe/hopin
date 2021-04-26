const expect        = require('chai').expect;
const assert        = require('assert');
const supertest     = require('supertest');
const api           = supertest('http://localhost:3001');
const fs            = require('fs');
const tempFile      = './tempId.json';

//  Description:
//  As a user
//  I want to send an api POST request to a correct endpoint
//  So that I can test and assert the expected response

describe('Given a request is sent to the correct endpoint', function() {

  it('Then the api should return a 200 response code and JSON object', (done) => {
    api.post('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
        if (err) return done(err);
        done();
    });
  });

  it('Then the api should return a 200 response code with expected userId details', (done) => {
    api.post('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
        if (err) return done(err);
        console.log(res.body.timestamp);
        // console.log(res.body.customers[0]);
        var date = Date().split(" "),
        newDate  = (date[0]+" "+date[1]+" "+date[2]+" "+date[3]);
        // expect(res.body.timestamp).to.equal("Mon Apr 26 2021");
        expect(res.body.timestamp).to.equal(newDate);
        expect(res.body.customers[0]).to.have.property("id",1);
        expect(res.body.customers[0]).to.have.property("name","Americas Inc.");
        expect(res.body.customers[0]).to.have.property("employees",10);
        expect(res.body.customers[0].contactInfo).to.have.property("name","John Smith");
        expect(res.body.customers[0].contactInfo).to.have.property("email", "jsmith@americasinc.com");
        expect(res.body.customers[0]).to.have.property("size","Small");
        done()
    });
  });
  

});
