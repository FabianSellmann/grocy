define([
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'handlebars',
  'jquery',
  'text!templates/scanner.html'
], function(Backbone, Handlebars, $, scannerTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = Handlebars.compile(scannerTemplate);
      var view = compiledTemplate.context(data);
      // Append our compiled template to this Views "el"
      this.$el.append( view );
    }
  });
  // Our module now returns our view
  return ProjectListView;
});