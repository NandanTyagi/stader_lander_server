var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: true});
var fs = require('fs');


router.post('/', urlEncodedParser, function(req, res, next) {

  if(req.body.population){
    fs.readFile('./stad.json', (err, data) => {

      if(err) throw err;

      let stader = JSON.parse(data);

      let nyStad = {
        id:Number.parseInt(req.body.id),
        stadname:req.body.stad,
        countryid:Number.parseInt(req.body.countryid),
        population:Number.parseInt(req.body.population)
      }
    
      stader.push(nyStad);
      
      let savedStad = JSON.stringify(stader, null, 2);
      
      fs.writeFile('./stad.json', savedStad, (err, data) => {
          if(err) throw err;
      });

      res.send(Object.entries(nyStad).join(' | ') + ' sucessfully saved!');

    });
  }else if(req.body.land) {
    fs.readFile('./land.json', (err, data) => {

      if(err) throw err;
      
      let lander = JSON.parse(data);

      let nyLand = {
        id:Number.parseInt(req.body.id),
        countryname:req.body.land
      }

      lander.push(nyLand);
      
      let savedLand = JSON.stringify(lander,null,2);
      
      fs.writeFile('./land.json', savedLand, (err, data) => {
          if(err) throw err;
      })

      res.send(Object.entries(nyLand).join(' | ') + ' sucessfully saved!');

    });
  }
});

module.exports = router;