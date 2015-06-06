// Filename: router.js
define([
  'backbone',
  'views/code'
], function(Backbone, CodeView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
	    '/scanner' : 'showScanner', //raw view of scannercamer input for dev purpose
      '/code': 'showCode', //raw view of scanned code for dev purpose
      '/product': 'showProduct',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    
    // app_router.on('showScanner', function(){
    //   var projectListView = new ProjectListView(); //TODO
    //   projectListView.render(); //TODO
    // });

    app_router.on('showCode', function(){ 
      var codeView = new CodeView(); //TODO
      codeView.render(); //TODO
    });

    // app_router.on('showProduct', function(){ 
    //   var userListView = new UserListView(); //TODO
    //   userListView.render(); //TODO
    // });
    
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    app_router.navigate('/code', {trigger: true});
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});