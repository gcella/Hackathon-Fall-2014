define(['models/ClubModel'], function(ClubModel){
  
  var ClubView = Backbone.View.extend({
    tagName: 'div',
    model: new ClubModel(),
    template: _.template($("#clubProfile").html()),
    initialize: function () {
        this.model.on('change', this.render());
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }, 
    events: {

    }
  });

  return ClubView;

});