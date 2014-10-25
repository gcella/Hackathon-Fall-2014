define([], function() {
  var ClubModel = Backbone.Model.extend({
    defaults: {
        id: "",
        name: "Club", 
        email: "",
        description: "",
        photo_url: "",
        events: {}, 
        members: {}
    }, 
    url: "/clubs"
  });
  return ClubModel;
});