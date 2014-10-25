define(['models/StudentModel'], function(StudentModel){
  
  var StudentView = Backbone.View.extend({
    tagName: 'div',
    model: new StudentModel(),
    template: _.template($("#studentProfile").html()),
    initialize: function () {
        this.model.on('change', this.render());
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }, 
    events: {

    }
  });

  return StudentView;

});