const expect        = require('chai').expect;
const assert        = require('assert');
const supertest     = require('supertest');
const api           = supertest('http://localhost:3001');
const fs            = require('fs');
const tempFile      = './tempId.json';

//  Description:
//  As a user
//  I want to send an api GET & POST request to an incorrect endpoint
//  So that I can test and assert the expected response

describe('Given a request is sent to an incorrect endpoint', function() {

  it('Then the api should return a 404 response code', (done) => {
    api.get('/zzzZZZzzz')
      .send()
      .expect(404)
      .expect('Content-Type', "text/html; charset=utf-8")
      .end(function (err, res) {
        if (err) return done(err);
        done();
    });
  });

  it('Then the api should return a 404 response code', (done) => {
    api.post('/zzzZZZzzz')
      .send()
      .expect(404)
      .expect('Content-Type', "text/html; charset=utf-8")
      .end(function (err, res) {
        if (err) return done(err);
        done();
    });
  });

  // *****************************************************************************
  // *** For this test to work, please specify a path /'500' in the api server ***
  // *****************************************************************************

  // it('Then the api should return a 500 response code Internal Server Error', (done) => {
  //   api.post('/500')
  //       .expect(500)
  //       .end(function (err, res) {
  //       if (err) return done(err);
  //       done();
  //   });
  // });

});
