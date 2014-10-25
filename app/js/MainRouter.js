define(['views/NewsFeed', 'views/StudentView'], function (NewsFeed, StudentView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      ""             : "showHome",
      "groups/:group" : "showGroup"
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

      console.log(club);
        
    });

    Backbone.history.start();
    
  };
  return {
      initialize: initialize
  };
});