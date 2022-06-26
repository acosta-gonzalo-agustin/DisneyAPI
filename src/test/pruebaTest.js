const chai = require('chai');
const app = require('../app')

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;




describe("Index Tests", function () {


  // test usuarios


  describe('Usuarios: ', () => {
    it('should login user', (done) => {
      chai.request(app)
        .post('/auth/login')
        .send({
          name:'gonzalo',
          password: '11111gG#'
        })
        .end(function (err, res) {
          expect(res.statusCode).to.equal(200);
          done()                 
        })
    }).timeout(10000);

    it('should register user', (done) => {
      chai.request(app)
        .post('/auth/register')
        .send({
          name:'pancho',
          password: '11111gG#'
        })
        .end(function (err, res) {
          expect(res.statusCode).to.equal(200);
          done();                               
        });
    }).timeout(10000);


  });


  // test personajes


  describe('get all movies: ', () => {
    it('should get all movies', (done) => {
      chai.request(app)
        .get('/movies')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          done();                       
        });
    });
  });


})








