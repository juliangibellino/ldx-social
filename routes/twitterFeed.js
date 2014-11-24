var express = require('express');
var router = express.Router();
var Twit = require('twit');

var T = new Twit({
  consumer_key:         '1Dk2qeLRX5PDiHRNEtqgWbgj0'
  , consumer_secret:      'InRTtJ7zNilvRUSZwVdVp3wd5Cz1lwHQFMFihmKmZ9nxhtPv2z'
  , access_token:         '20559754-tI2VNuheK4X17Pbger4eXUglVzWlph86c7HGSnUO7'
  , access_token_secret:  'MRXEI1l8SEePmgHGGtTPaYPxM4qncOiUNPSZ3sOEctLoV'
})


/* GET home page. */
router.get('/:hashTag?', function(req, res) {
  var hashTag = req.params.hashTag;

  if(typeof hashTag === 'string'){
    T.get('search/tweets', { q: hashTag, count: 100 }, function(err, data, response) {
      res.json(data);
    });
  } else {
    res.send(500);
  }



});

module.exports = router;
