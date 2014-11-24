var express = require('express');
var router = express.Router();
var instagram = require('instagram-node').instagram();

instagram.use({
  client_id: '5c19f20081ec4a33a2493683a4cb8c31',
  client_secret: 'c0ba60ea9baa4654a2db25015b00e547'
});

var redirect_uri = 'http://www.lyonsday.com/';

/* GET home page. */
router.get('/:hashTag?', function(req, res) {
  var hashTag = req.params.hashTag;

  if(typeof hashTag === 'string'){
    instagram.tag_media_recent(hashTag, [{count: 100}], function(err, medias, pagination, remaining, limit) {
      res.json(medias);
    });
  } else {
    res.send(500);
  }
});

module.exports = router;
