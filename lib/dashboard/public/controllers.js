var ncgDashboard = angular.module('ncgDashboard', []);

ncgDashboard.controller('PanelsController', function ($scope) {
    $scope.templates =
        [
            { name: 'testpanel', url: '/dashboard/testpanel/panel.html'}
        ];
    $scope.template = $scope.templates[0];
});