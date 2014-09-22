var ncgDashboard = angular.module('ncgDashboard', []);

ncgDashboard.controller('TestPanelController', ['$scope', function ($scope) {
    /*
     * expose the event object to the scope
     */
    $scope.clickMe = function (clickEvent) {
        console.log("hey man nice job");
    };
}]);

console.log('hey Ive been loaded');