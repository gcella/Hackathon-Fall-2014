define(['models/EventModel'], function(EventModel){
  var EventCollection = Backbone.Collection.extend({
      model: EventModel,
      url: '/test', 
      parse: function(response) {
        return response.data;
      }
  });

  return EventCollection;
});