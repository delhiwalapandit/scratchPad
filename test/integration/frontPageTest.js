var request = require('supertest');
var db = require('../../config/db_connection');
var app = require('../../app');

var mHeathResources = db.get('mhdb');

describe('mhealth front page', function () {
  // make sure database is in a clean state at each run
  beforeEach(function (done) {

    mHeathResources.insert({
      "area": "Belfast",
      "subject": "Carers",
      "orgName": "Carers NI",
      "phone": "02890439843",
      "describtion": "Government support for Carers",
      "website": "N/A"
  }, done());
});

  // after(function (done) {
  //   mHeathResources.remove({}, function (err) {
  //     db.close();
  //     done();
  //   });
  // });

  describe('GET /', function () {
    it('routes correctly', function (done) {
      request(app).get('/')
        .expect(200, done)
    });


    xit('gets stuff from db', function(){
      request(app).get('/')
      .end(function (req, res) {
        mHeathResources.find({}, function (err, students){
        console.log("-----------------------------"+students[0].orgName);
        expect(students[0].orgName).to.equal("Carers NI");
        console.log("-----------------------------"+students[0].orgName);
        })
      });
    });
  });


});