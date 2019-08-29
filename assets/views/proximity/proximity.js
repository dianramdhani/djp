(function () {
    'use strict';

    // Usage:
    // Proximity view.

    window.app
        .component('proximity', {
            template: require('./proximity.html'),
            controller: _
        });

    _.$inject = ['$stateParams', '$scope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'FileService'];
    function _($stateParams, $scope, $compile, DTOptionsBuilder, DTColumnBuilder, FileService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            FileService.retrieve($stateParams.id)
                .then(({ data }) => {
                    $scope.filename = data.filename;
                });

            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    return FileService.retrieveRecords($stateParams.id).then(_ => _.data);
                })
                .withOption('lengthMenu', [5, 10, 20])
                .withOption('createdRow', (row, _, __) => { $compile(angular.element(row).contents())($scope); })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('NPWP').withTitle('NPWP'),
                DTColumnBuilder.newColumn('NIK').withTitle('NIK'),
                DTColumnBuilder.newColumn('Full Name').withTitle('Full Name'),
                DTColumnBuilder.newColumn('Place of Birth').withTitle('Place of Birth'),
                DTColumnBuilder.newColumn('Date of Birth').withTitle('Date of Birth'),
                DTColumnBuilder.newColumn('Full Address').withTitle('Full Address'),
                DTColumnBuilder.newColumn(null).withTitle('').notSortable()
                    .renderWith((data, _, __, ___) => {
                        return `
                        <button class="btn btn-warning tr-btn-table" ng-if="${data.status === 'Matched' ? "true" : "false"}" ui-sref="etl.proximity.detailData">Unprocessed</button>
                        <button class="btn btn-primary tr-btn-table" ng-if="${data.status === 'Completed' ? "true" : "false"}" ui-sref="etl.proximity.reportMatching">Processed</button>
                        `;
                    })
            ];
        };
    }
})();