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
            // To export array to export file.
            $scope.exportType = [];

            FileProcessorService.retrieve($stateParams.idFile)
                .then(({ data }) => {
                    $scope.filename = data.filename;
                });

            FileProcessorService.retrieveStatistics($stateParams.idFile)
                .then(({ data }) => {
                    $scope.statistics = data;
                });

            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    return FileProcessorService.retrieveRecords($stateParams.idFile).then(_ => _.data || []);
                })
                .withOption('lengthMenu', [10, 20, 30])
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

        $scope.exportFile = async () => {
            let res = await FileProcessorService.exportInvalid($stateParams.idFile, $scope.exportType);
            const blob = new Blob([new Uint8Array(res.data)], {
                type: res.headers('Content-Type')
            });
            const URL = window.URL || window.MozURL || window.webkitURL || window.MSURL || window.OURL;

            var anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = $stateParams.idFile;
            document.body.appendChild(anchor);
            anchor.target = '_blank';
            anchor.click();
        };
    }
})();