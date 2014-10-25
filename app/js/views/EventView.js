define(['models/EventModel'], function(EventModel){
  
  var EventView = Backbone.View.extend({
    tagName: 'li',
    model: new EventModel(),
    template: _.template($("#eventTemplate").html()),
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

  return EventView;

});