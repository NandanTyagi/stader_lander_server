var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile('./land.json','utf8',(err,data) =>{
    if (err) throw err;
    let lander = JSON.parse(data);
    
    res.render('lander', {data: show(lander)});

  });

});

function show(array){
  let print = [];
  array.forEach(el => {
  
    // print += Object.keys(el).join(' | ') + ' ';
    print.push('ID ' + Object.values(el).join(': ') + ', ');
  
  });


  return print;
}
module.exports = router;
