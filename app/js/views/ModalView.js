define(['models/ClubModel'], function(ClubModel){
  
  var ModalView = Backbone.View.extend({
    tagName: 'div',
    template: _.template($("#modalTemplate").html()),
    initialize: function () {

    },
    render: function () {
        this.$el.html(this.template());
        return this;
    }, 
    events: {
        
    },
    createEventForm: function() {
        
    }, 
    showClub: function(club) {
        console.log(club);
        club = new ClubModel({name:club});
        var promise = club.fetch();
        promise.success(function(){
            console.log(arguments);
        });
    }

  });

  return ModalView;

});