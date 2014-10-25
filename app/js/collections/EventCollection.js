define(['models/EventModel'], function(EventModel){
  var EventCollection = Backbone.Collection.extend({
      model: EventModel,
      url: '/events'
  });

  return EventCollection;
});