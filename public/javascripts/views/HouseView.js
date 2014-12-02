var HouseView = Backbone.View.extend({
  tagName: 'li',
  render: function(){
    this.$el.html(this.model.get('name') + '... the house');
    return this;
  }
});