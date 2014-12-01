// get houses
var houses = require('./houses.json')

// require and configure Sequelize
var Sequelize = require('sequelize')
	, sequelize = new Sequelize('houses_of_westeros_development', '', '', {
		dialect: "postgres",
		port: 5432
	});

// define House model
var House = sequelize.import(__dirname + '/models/house.js')


sequelize.sync().success(function() {
	houses.forEach(function(house){
			House.create(house)
		})
});
