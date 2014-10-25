define(['views/StudentView'], function (StudentView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      "" : "showHome"
    }
  });

  var initialize = function(){
    
    var router = new MainRouter();

    router.on('route:showHome', function () {

        
    });

    Backbone.history.start();
    
  };
  return {
      initialize: initialize
  };
});