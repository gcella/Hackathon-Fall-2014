define(['models/StudentModel'], function(StudentModel){
  
  var StudentView = Backbone.View.extend({
    tagName: 'div',
    model: new StudentModel(),
    template: _.template($("#studentTemplate").html()),
    initialize: function () {
        this.model.on('change', this.render());
    },
    render: function () {
        return this;
    }, 
    events: {

    }
  });

  return StudentView;

});