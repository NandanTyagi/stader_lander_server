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

      let toDeleteStad = {
        id:Number.parseInt(req.body.id),
        stadname:req.body.stad,
        countryid:Number.parseInt(req.body.countryid),
        population:Number.parseInt(req.body.population)
      }
    
       // TODO Error handling needed
       let found = stader.find( stad => stad.stadname === toDeleteStad.stadname);
       let index = stader.findIndex(stad => stad === found);
       let deletedStad = stader.splice(index,1)
       
       let remainingStader = JSON.stringify(stader,null,2);
       
       fs.writeFile('./stad.json', remainingStader, (err, data) => {
           if(err) throw err;
       })
       let msg = ' Raderat!!';
       let arr = [];
       arr[0] = JSON.stringify(Object.values(deletedStad));
       arr.push(msg);

       let test = arr;
       res.render('add', {data:test});

    });
  }else if(req.body.land) {
    fs.readFile('./land.json', (err, data) => {

      if(err) throw err;
      
      let lander = JSON.parse(data);

       

      let toDeleteLand = {
        id:Number.parseInt(req.body.id),
        countryname:req.body.land
      }
    // TODO Error handling needed
      let found = lander.find( land => land.countryname === toDeleteLand.countryname);
      let index = lander.findIndex(land => land === found);
      let deletedLand = lander.splice(index,1)
      
      let remainingLands = JSON.stringify(lander,null,2);
      
      fs.writeFile('./land.json', remainingLands, (err, data) => {
          if(err) throw err;
      })
      let msg = ' Raderat!!';
      let arr = [...deletedLand];
      arr.push(msg);

      
      // res.send(Object.values(nyLand).join(' | ') + msg);
      res.send(arr);


    });
  }
});

module.exports = router;