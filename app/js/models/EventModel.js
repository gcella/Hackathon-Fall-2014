define([], function() {
  var EventModel = Backbone.Model.extend({
    defaults: {
        name: "Event", 
        date: 01012015,
        id: "",
        photos: {}, 
        videoUrl: "", 
        description: "",
        freeFood: false,
        location: "",
        club: ""
    }, 
    url: "/events"
  });
  return EventModel;
});