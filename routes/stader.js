var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  fs.readFile('./stad.json',(err,data) =>{
    if (err) throw err;
    let stader = JSON.parse(data);
    res.send(stader);

  });

});

module.exports = router;
