var HouseList = Backbone.Collection.extend({
	url: '/api/houses',
	model: House
})