var HouseListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "change", this.render);
    this.listenTo(this.collection, "add", this.render);
  },
  render: function(){
    this.$el.empty();
    var that = this;
    this.collection.each(function(house){
      var view = new HouseView({model: house});
      that.$el.append(view.render().$el);
    });
    return this;
  }
});