define(['models/ClubModel'], function(ClubModel){
  
  var StudentView = Backbone.View.extend({
    tagName: 'div',
    model: new ClubModel(),
    template: _.template($("#clubProfile").html()),
    initialize: function () {
        this.model.on('change', this.render());
    },
    render: function () {
        return this;
    }, 
    events: {

    }
  });

  return ClubView;

});