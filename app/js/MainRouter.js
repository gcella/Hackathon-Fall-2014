define(['views/NewsFeed', 'views/StudentView'], function (NewsFeed, StudentView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      "" : "showHome"
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

    Backbone.history.start();
    
  };
  return {
      initialize: initialize
  };
});