define([
  'backbone'
], function(Backbone){
  var scanModel = Backbone.Model.extend({
    defaults: {
      "appetizer":  "caesar salad",
      "entree":     "ravioli",
      "dessert":    "cheesecake"
    }
  });
  return scanModel;
});