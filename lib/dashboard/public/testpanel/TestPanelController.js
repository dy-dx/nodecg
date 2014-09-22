app.controller('TestPanelController', ['$scope', function ($scope) {
    /*
     * expose the event object to the scope
     */
    $scope.clickMe = function (clickEvent) {
        console.log("hey man nice job");
    };
}]);

console.log('hey Ive been loaded');

// Once the DOM-Ready event has fired, we know that AngularJS
// will have bootstrapped the application. As such, we want to
// try adding our "lazy bindings" after the DOM-ready event.
$( lazyBindings );

// I define the modules after bootstrapping. Remember, inside
// of this function, the shorthand methods (ex, app.controller)
// NO LONGER POINTER to the core shorthands; instead, they
// point to the method definitions we defined in the config()
// method executed at application bootstrap.
function lazyBindings() {

    console.log( "Lazy bindings added to application." );

    // Lazy-loaded controller.
    app.controller(
        "TestPanelController",
        function( $scope ) {

            $scope.clickMe = function (clickEvent) {
                console.log("hey man nice job");
            };

        }
    );

}