// var express = require('express');
// var fs = require('fs');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
  
//   fs.('./stad.json',(err,data) =>{
//     if (err) throw err;
//     let stader = JSON.parse(data);
//     res.send('Du är i update');

//   });

// });

// module.exports = router;


var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: true});
var fs = require('fs');


/* GET home page. */
let reply = [];
router.post('/', urlEncodedParser, function(req, res, next) {
  reply.push(req.body.email);

  fs.readFile('./stad.json', (err, data) => {
    if(err) throw err;
    
    let stader = JSON.parse(data);
    let nyStad = {
      id:req.body.id,
      stadname:req.body.stad,
      countryid:req.body.countryid,
      population:req.body.population,
    }
    
    savedStad = JSON.stringify(stader,null,2);
    
    fs.writeFile('./stad.json', savedStad, (err, data) => {
        if(err) throw err;
    })
    res.send('Ändring sparad!' + nyStad);
  });
});

module.exports = router;