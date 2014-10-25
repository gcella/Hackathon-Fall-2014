define(['views/NewsFeed', 'views/StudentView', 'views/ModalView', 'views/ClubsView'], 
function (NewsFeed, StudentView, ModalView, ClubsView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      ""              : "showHome",
      "groups/:group" : "showGroup",
      "listclubs"     : "listClubs"
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


    Backbone.history.start();
    
  };
  return {
      initialize: initialize
  };
});