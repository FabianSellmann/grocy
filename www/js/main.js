
// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    handlebars: 'libs/handlebars.min',
    backbone: 'libs/backbone.min',
    jquery: 'libs/jquery.min',
    scanner: 'app/scanner'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});