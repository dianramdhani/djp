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

    _.$inject = ['$stateParams', '$scope', '$state', 'PersonService', 'UtilService'];
    function _($stateParams, $scope, $state, PersonService, UtilService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.data = angular.fromJson($stateParams.data);
            $scope.dataMaster = angular.fromJson($stateParams.dataMaster);
            $scope.dataMerge = {
                personId: $scope.data.id,
                originId: $scope.dataMaster.id,
                npwp: '',
                nik: '',
                fullName: '',
                placeOfBirth: '',
                dateOfBirth: '',
                fullAddress: '',
            };
        };

        $scope.notEquals = (a, b) => !angular.equals(a, b);

        $scope.merge = () => {
            UtilService.trLoadingProcess(async () => {
                await PersonService.merge($scope.dataMerge);
                $state.go('etl.proximity', { idFile: $stateParams.idFile });
            });
        };
    }
})();