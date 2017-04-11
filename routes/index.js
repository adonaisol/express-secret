var express = require('express');
var mongo = require('mongoskin');
var crypto = require('crypto');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {
  const decipher = crypto.createDecipher('aes256', 'asaadsaad');
  var encrypted = '';

  var db = mongo.db("mongodb://localhost:27017/mwaDB", { native_parser: true });
  db.bind('homework7');
  db.homework7.findOne({}, function (err, item) {
    console.dir('Item: ' + item.message);

    encrypted = item.message;
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted);
    res.render('index', { title: decrypted });

    db.close();
  });
  
  
});

module.exports = router;
