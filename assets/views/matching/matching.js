require('./matching.css');

(function () {
    'use strict';

    // Usage:
    // Matching form.
    // Creates:
    // Call by detail-data view.

    window.app
        .component('matching', {
            template: require('./matching.html'),
            controller: _
        });

    _.$inject = ['$stateParams', '$scope'];
    function _($stateParams, $scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.data = angular.fromJson($stateParams.data);
            $scope.dataMaster = angular.fromJson($stateParams.dataMaster);
            console.log($scope.data, $scope.dataMaster);
        };
    }
})();