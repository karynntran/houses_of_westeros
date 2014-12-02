// Require Modules
var express = require('express');
var MethodOverride = require('method-override');
var bodyParser = require('body-parser');

// Set Up and Configure App
var app = express();
app.use(express.urlencoded());
app.use(bodyParser());
app.use(MethodOverride('X-HTTP-Method-Override'))

// Serve static files from public
app.use(express.static('public'))

// require and configure Sequelize
var Sequelize = require('sequelize')
  , sequelize = new Sequelize('houses_of_westeros_development', '', '', {
    dialect: "postgres",
    port: 5432,
    logging: false
  });

// define House model
var House = sequelize.import(__dirname + '/models/house.js');


sequelize.sync().then(function() {
  app.listen(3000);
  console.log('Starting server on port 3000...');
});

app.get('/', function(req, res){
  res.sendfile('./views/index.html')
})


app.get('/api/houses', function(req, res){
  House.findAll().then(function(houses){
    res.send(JSON.stringify(houses));
  });
});

app.get('/api/houses/:id', function(req, res){
  var houseId = req.params.id;
  var house = House.find(houseId).then(function(house){
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
  }).then(function(house){
    res.send(JSON.stringify(house))
  });
});

app.put('/api/houses/:id', function(req, res){
  var houseId = req.params.id;
  var houseDetails = req.body.house;
  House.find(houseId).then(function(house){
    house.updateAttributes(houseDetails).then(function(house){
      res.send(JSON.stringify(house))
    });;
  })
});

app.delete('/api/houses/:id', function(req, res){
  var houseId = req.params.id;
  House.find(houseId).then(function(house){
    house.destroy().then(function(){
      res.send(house)
    })
  })
})