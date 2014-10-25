define(['views/NewsFeed'], function (NewsFeed) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      "" : "showHome"
    }
  });

  var initialize = function(){
    
    var router = new MainRouter();

    router.on('route:showHome', function () {

        var newsFeed = new NewsFeed();
        newsFeed.render();
        
    });

    Backbone.history.start();
    
  };
  return {
      initialize: initialize
  };
});