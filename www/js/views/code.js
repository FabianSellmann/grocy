define([
  'backbone',
  'handlebars',
  'jquery',
  'scanner',
  '../models/scan',
  'text!templates/code.html'
], function(Backbone, Handlebars, $, ScanModel,scanner, scannerTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = new ScanModel();
      //writes scanning result into model
      //scanner(data); 
      var compiledTemplate = Handlebars.compile(scannerTemplate);
      var view = compiledTemplate.context(data);
      // Append our compiled template to this Views "el"
      this.$el.append( view );
    }
  });
  // Our module now returns our view
  return ProjectListView;
});