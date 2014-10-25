define(['collections/EventCollection', 'views/EventView'], function(EventCollection, EventView){

  var EventsView = Backbone.View.extend({
    el: '#news-feed',
    template: "<%= events %>",
    initialize: function() {
        var that = this;
        this.collection = new TeamCollection();
        this.listenTo(this.collection, 'sync', this.addEvents);
        this.collection.fetch({
            success: function() {
                that.$el.animate({opacity:1}, 400);
            }
        });
    },
    render: function() {
        this.$el.html( _.template( this.template, {events:this.collection.models} ));
        return this;
    },
    addEvents: function(events) {
        var that = this;
        this.$el.empty();
        events.each(function(e) {
            that.addOne(e);
        });
    },
    addOne: function(e){
        var eventView = new EventView({model: e});
        this.$el.append(eventView.render({collection:true}).el);
    }
  });

  return EventView;

});