define([], function() {
  var StudentModel = Backbone.Model.extend({
    defaults: {
        id: "",
        name: "Student", 
        email: "",
        year: 0,
        photo_url: "",
        clubs: {}, 
        events: {}
    }, 
    url: "/currentuser"
  });
  return StudentModel;
});