define([
  'backbone',
  'router',
], function (Backbone, Router) {
    var app = {
        // Application Constructor
        initialize: function () {
            this.bindEvents();
            Router.initialize();

        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function () {
            
        },
    };
    return app;
});
