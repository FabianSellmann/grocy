define([
  'backbone',
  'handlebars',
  'jquery',
  'scanModel',
  'scanner',
  'text!templates/code.html'
], function(Backbone, Handlebars, $, ScanModel, Scanner, scannerTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      // Using Underscore we can compile our template with data
      //var data = new ScanModel;
      //writes scanning result into model

      var data = new ScanModel();

      alert("Dessert will be " + data.get('dessert'));

      //scanner(data);

      var compiledTemplate = Handlebars.compile(scannerTemplate);
      var view = compiledTemplate(data);
      // Append our compiled template to this Views "el"
      this.$el.append( view );
    }
  });
  // Our module now returns our view
  return ProjectListView;
});