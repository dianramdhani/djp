(function () {
    'use strict';

    // Usage:
    // Data Preprocessing view.

    window.app
        .component('dataPreprocessing', {
            template: require('./data-preprocessing.html'),
            controller: _,
        });

    _.$inject = ['$scope'];
    function _($scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            // To export array to export file.
            $scope.exportType = [];
        };

        $scope.upload = () => {
            console.log($scope.files);
        }

        $scope.exportFile = () => {
            console.log('test export file', $scope.exportType);
        }
    }
})();