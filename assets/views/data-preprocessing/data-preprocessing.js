(function () {
    'use strict';

    // Usage:
    // Data Preprocessing view.

    window.app
        .component('dataPreprocessing', {
            template: require('./data-preprocessing.html'),
            controller: _,
        });

    _.$inject = ['$scope', 'FilePreprocessorService'];
    function _($scope, FilePreprocessorService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            // To export array to export file.
            $scope.exportType = [];
        };

        $scope.showStatistic = async (index) => {
            $scope.statistics = {};
            $scope.statistics['resUploadFile'] = await FilePreprocessorService.uploadFile($scope.files[index]).then(_ => angular.fromJson(_.data));
            $scope.statistics = Object.assign($scope.statistics, await FilePreprocessorService.retrieveStatistics($scope.statistics.resUploadFile.id).then(_ => _.data));
            $scope.$apply();

            console.log($scope.statistics);
        }

        $scope.exportFile = () => {
            console.log('test export file', $scope.exportType);
        }
    }
})();