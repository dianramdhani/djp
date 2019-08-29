(function () {
    'use strict';

    // Usage:
    // Proximity view.

    window.app
        .component('proximity', {
            template: require('./proximity.html'),
            controller: _
        });

    _.$inject = ['$stateParams', '$scope', 'DTOptionsBuilder', 'DTColumnBuilder', 'FileService'];
    function _($stateParams, $scope, DTOptionsBuilder, DTColumnBuilder, FileService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    return FileService.retrieveRecords($stateParams.id).then(_ => _.data);
                })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('NIK').withTitle('NIK'),
                DTColumnBuilder.newColumn('Full Address').withTitle('Full Address'),
                DTColumnBuilder.newColumn('NPWP').withTitle('NPWP'),
                DTColumnBuilder.newColumn('Full Name').withTitle('Full Name'),
                DTColumnBuilder.newColumn('Place of Birth').withTitle('Place of Birth'),
            ];
        };
    }
})();