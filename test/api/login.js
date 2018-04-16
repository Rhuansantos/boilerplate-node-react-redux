const chai      = require('chai');
const expect    = chai.expect; // eslint-disable-line
const chaiHttp  = require('chai-http');
const server    = require('../../api/server');
const port      =  3000;

chai.use(chaiHttp);

describe('testing user login', () => {
  it('should have body', (done) => {
    chai.request(server(port))
      .get('/test')
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });
});


describe('get all users', () => {
  it('should return all users', (done) => {
    chai.request(server(port))
      .get('/all-users')
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });
});
