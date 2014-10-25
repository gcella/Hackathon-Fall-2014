define(['models/ClubModel'], function(ClubModel){
  var ClubCollection = Backbone.Collection.extend({
      model: ClubModel,
      url: '/clubs', 
      parse: function(response) {
        return response.data;
      }
  });

  return ClubCollection;
});