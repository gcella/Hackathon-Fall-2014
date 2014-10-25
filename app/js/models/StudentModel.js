define([], function() {
  var TeamModel = Backbone.Model.extend({
    defaults: {
        name: "Team", 
        points: 0,
        rank: 0,
        members: {}, 
        videoUrl: "", 
        description: ""
    }, 
    url: "/team"
  });
  return TeamModel;
});