var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile('./land.json',(err,data) =>{
    if (err) throw err;
    let lander = JSON.parse(data);
    res.send(lander);

  });

});

module.exports = router;
