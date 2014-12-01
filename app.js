var express = require('express');
var app = express();
app.use(express.urlencoded());
app.use(express.methodOverride())

// require and configure Sequelize
var Sequelize = require('sequelize')
  , sequelize = new Sequelize('houses_of_westeros_development', '', '', {
    dialect: "postgres",
    port: 5432
  });

// define House model
var House = sequelize.import(__dirname + '/models/house.js');


sequelize.sync().success(function() {
  app.listen(3000);
  console.log('Starting server on port 3000...');
});

// app.get('/', function(req, res){
//   res.sendfile('./views/index.html')
// })


app.get('/api/houses', function(req, res){
  House.findAll().success(function(houses){
    res.send(JSON.stringify(houses));
  });
});

app.get('/api/houses/:id', function(req, res){
  var houseId = req.params.id;
  var house = House.find(houseId).success(function(house){
    res.send(JSON.stringify(house));
  });
});

app.post('/api/houses', function(req, res){
  var houseDetails = req.body.house;
  House.create({
    name: houseDetails.name,
    image: houseDetails.image,
    words: houseDetails.words,
    founder: houseDetails.founder,
    founded: houseDetails.founded,
    seat: houseDetails.seat,
    coatOfArms: houseDetails.coatOfArms,
    region: houseDetails.region,
    lord: houseDetails.lord,
    overlord: houseDetails.overlord
  }).success(function(house){
    res.send(JSON.stringify(house))
  });
});

// app.get('/api/houses/:id/edit', function(req, res){
//   var houseId = req.params.id;
//   var house = House.find(houseId).success(function(house){
//     res.sendfile('./views/update.html');
//   });
// });

app.put('/api/houses/:id', function(req, res){
  var houseId = req.params.id;
  var houseDetails = req.body.house;
  House.find(houseId).success(function(house){
    house.updateAttributes(houseDetails).success(function(house){
      res.send(JSON.stringify(house))
    });;
  })
});

app.delete('/api/houses/:id', function(req, res){
  var houseId = req.params.id;
  House.find(houseId).success(function(house){
    house.destroy().success(function(){
      res.send('Successfuly deleted ' + house.name)
    })
  })
})