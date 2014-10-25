define(['collections/ClubCollection', 'views/ClubView'], function(ClubCollection, ClubView){

  var ClubsView = Backbone.View.extend({
    el: $('#clubs'),
    template: "<%= clubs %>",
    initialize: function() {
        var that = this;
        this.collection = new ClubCollection();
        this.listenTo(this.collection, 'sync', this.addEvents);
        this.collection.fetch({
            success: function() {
                console.log(that.collection);
                that.$el.animate({opacity:1}, 400);
            }
        });
    },
    render: function() {
        this.$el.html( _.template( this.template, {clubs:this.collection.models} ));
        return this;
    },
    addEvents: function(clubs) {
        var that = this;
        this.$el.empty();
        events.each(function(club) {
            that.addOne(club);
        });
    },
    addOne: function(club){
        var eventView = new EventView({model: club});
        this.$el.append(eventView.render({collection:true}).el);
    }
  });

  return ClubsView;

});