(function () {
    'use strict';

    // Usage:
    // Proximity view.

    window.app
        .component('proximity', {
            template: require('./proximity.html'),
            controller: _
        });

    _.$inject = ['$stateParams', '$scope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'FileProcessorService'];
    function _($stateParams, $scope, $compile, DTOptionsBuilder, DTColumnBuilder, FileProcessorService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            FileProcessorService.retrieve($stateParams.idFile)
                .then(({ data }) => {
                    $scope.filename = data.filename;
                });

            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    return FileProcessorService.retrieveRecords($stateParams.idFile).then(_ => _.data || []);
                })
                .withOption('lengthMenu', [5, 10, 20])
                .withOption('createdRow', (row, _, __) => { $compile(angular.element(row).contents())($scope); })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('NPWP').withTitle('NPWP').withClass('wd-150'),
                DTColumnBuilder.newColumn('NIK').withTitle('NIK').withClass('wd-150'),
                DTColumnBuilder.newColumn('Full Name').withTitle('Full Name').withClass('wd-150'),
                DTColumnBuilder.newColumn('Place of Birth').withTitle('Place of Birth').withClass('wd-150'),
                DTColumnBuilder.newColumn('Date of Birth').withTitle('Date of Birth').withClass('wd-150'),
                DTColumnBuilder.newColumn('Full Address').withTitle('Full Address').withClass('wd-200'),
                DTColumnBuilder.newColumn('status').withTitle('Status').withClass('wd-100'),
                DTColumnBuilder.newColumn(null).withTitle('').notSortable().withClass('wd-100 text-center')
                    .renderWith((data, _, __, ___) => {
                        return `
                            <button class="btn btn-warning tr-btn-table" ng-if="${data.status === 'Matched' ? "true" : "false"}" ui-sref="etl.proximity.detailData({idUnprocessed: '${data.id}'})">Unprocessed</button>
                            <button class="btn btn-primary tr-btn-table" ng-if="${data.status === 'Completed' ? "true" : "false"}" ui-sref="etl.proximity.reportMatching({idProcessed: '${data.id}'})">Processed</button>
                        `;
                    })
            ];
        };
    }
})();