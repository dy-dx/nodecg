// Create an application module for our demo
var app = angular.module('ncgDashboard', []);


// -------------------------------------------------- //
// -------------------------------------------------- //


// After the AngularJS has been bootstrapped, you can no longer
// use the normal module methods (ex, app.controller) to add
// components to the dependency-injection container. Instead,
// you have to use the relevant providers. Since those are only
// available during the config() method at initialization time,
// we have to keep a reference to them.
// --
// NOTE: This general idea is based on excellent article by
// Ifeanyi Isitor: http://ify.io/lazy-loading-in-angularjs/
app.config(
    function ($controllerProvider, $provide, $compileProvider) {

        // Since the "shorthand" methods for component
        // definitions are no longer valid, we can just
        // override them to use the providers for post-
        // bootstrap loading.
        console.log("Config method executed.");

        // Let's keep the older references.
        app._controller = app.controller;
        app._service = app.service;
        app._factory = app.factory;
        app._value = app.value;
        app._directive = app.directive;

        // Provider-based controller.
        app.controller = function (name, constructor) {

            $controllerProvider.register(name, constructor);
            return( this );

        };

        // Provider-based service.
        app.service = function (name, constructor) {

            $provide.service(name, constructor);
            return( this );

        };

        // Provider-based factory.
        app.factory = function (name, factory) {

            $provide.factory(name, factory);
            return( this );

        };

        // Provider-based value.
        app.value = function (name, value) {

            $provide.value(name, value);
            return( this );

        };

        // Provider-based directive.
        app.directive = function (name, factory) {

            $compileProvider.directive(name, factory);
            return( this );

        };

        // NOTE: You can do the same thing with the "filter"
        // and the "$filterProvider"; but, I don't really use
        // custom filters.

    }
);


// -------------------------------------------------- //
// -------------------------------------------------- //


// I control the root of the application.
app.controller(
    "PanelsController",
    function( $scope ) {

        // Since this Controller will be instantiated once
        // the application is bootstrapped, let's log it to
        // the console so we can see the timing.
        console.log( "Controller instantiated (after bootstrap)." );

        $scope.templates = [
            { name: 'testpanel', url: '/admin/testpanel/panel.html'}
        ];
        $scope.template = $scope.templates[0];

    }
);
