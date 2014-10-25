define(['moment'], function(moment) {
  var EventModel = Backbone.Model.extend({
    defaults: {
        name: "Event", 
        date: new moment(),
        time: new moment(),
        location: "",
        id: "",
        photourl: "", 
        videourl: "", 
        description: "",
        freefood: false,
        host: "",
        isEvent: false
    }, 
    url: "/test"
  });
  return EventModel;
});