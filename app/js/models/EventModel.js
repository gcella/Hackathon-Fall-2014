define(['moment'], function(moment) {
  var EventModel = Backbone.Model.extend({
    defaults: {
        name: "Event", 
        date: 01012015,
        start_time: new moment(),
        location: "",
        id: "",
        photos: {}, 
        videoUrl: "", 
        description: "",
        freeFood: false,
        club: "",
        isEvent: false
    }, 
    url: "/test"
  });
  return EventModel;
});