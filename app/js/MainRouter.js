define(['views/NewsFeed', 'views/StudentView', 'views/ModalView'], 
function (NewsFeed, StudentView, ModalView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      ""              : "showHome",
      "groups/:group" : "showGroup", 
      "addEvent"      : "addEvent"
    }
  });

  var initialize = function(){
    
    var router = new MainRouter();

    router.on('route:showHome', function () {

        var user = new StudentView();
        user.render();
        var newsFeed = new NewsFeed();
        newsFeed.render();
        
    });

    router.on('route:showGroup', function (club) {

        var modal = new ModalView();
        modal.showClub(club);
      
    });

    router.on('route:addEvent', function () {

        var modal = new ModalView();
        modal.createEventForm();

    });

    Backbone.history.start();
    
  };
  return {
      initialize: initialize
  };
});