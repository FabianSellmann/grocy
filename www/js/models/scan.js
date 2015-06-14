define([
  'backbone'
], function(Backbone){
  var ScanModel = Backbone.Model.extend({
    results: function (resultArray) {
      this.scanned = resultArray[0]
      this.code = resultArray[1];
    },
    defaults: {
      scanned: "nothing scanned",
      code : "no code set",
      failed: false
    }
  });
  return ScanModel;
});