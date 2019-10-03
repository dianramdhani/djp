(function () {
    'use strict';

    // Usage:
    // Proximity view.

    window.app
        .component('proximity', {
            template: require('./proximity.html'),
            controller: _
        });

    _.$inject = ['$stateParams', '$scope', '$compile', '$timeout', '$element', 'DTOptionsBuilder', 'DTColumnBuilder', 'FileProcessorService'];
    function _($stateParams, $scope, $compile, $timeout, $element, DTOptionsBuilder, DTColumnBuilder, FileProcessorService) {
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
                DTColumnBuilder.newColumn('NPWP').withTitle('NPWP').withClass('wd-150 proximity-detail'),
                DTColumnBuilder.newColumn('NIK').withTitle('NIK').withClass('wd-150 proximity-detail'),
                DTColumnBuilder.newColumn('Full Name').withTitle('Full Name').withClass('wd-150 proximity-detail'),
                DTColumnBuilder.newColumn('Date of Birth').withTitle('Date of Birth').withClass('wd-150 proximity-detail'),
                DTColumnBuilder.newColumn('status').withTitle('Status').withClass('wd-100 proximity-detail'),
                DTColumnBuilder.newColumn(null).withTitle('').notSortable().withClass('wd-100 text-center')
                    .renderWith((data, _, __, ___) => {
                        return `
                            <button class="btn btn-warning tr-btn-table" ng-if="${data.status === 'Matched' ? "true" : "false"}" ui-sref="etl.proximity.detailData({idUnprocessed: '${data.id}'})">Find Match</button>
                            <button class="btn btn-primary tr-btn-table" ng-if="${data.status === 'Completed' ? "true" : "false"}" ui-sref="etl.proximity.reportMatching({idProcessed: '${data.id}'})">Show Detail</button>
                        `;
                    })
            ];
            $scope.dtInstance = {};

            $timeout(() => {
                const format = (data) => {
                    return `
                    <table class="table mg-b-0">
                        <tbody>
                            <tr>
                                <th class="wd-150">NPWP</th>
                                <td>${data['NPWP']}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">NIK</th>
                                <td>${data['NIK']}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">Full Name</th>
                                <td>${data['Full Name']}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">Place of Birth</th>
                                <td>${data['Place of Birth']}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">Date of Birth</th>
                                <td>${data['Date of Birth']}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">Full Address</th>
                                <td>${data['Full Address']}</td>
                            </tr>
                        </tbody>
                    </table>
                    `
                };

                $element.on('click', '.proximity-detail', function () {
                    let tr = angular.element(this).closest('tr'),
                        row = $scope.dtInstance.DataTable.row(tr);
                    if (row.child.isShown()) {
                        row.child.hide();
                        tr.removeClass('shown');
                    } else {
                        row.child(format(row.data())).show();
                        tr.addClass('shown');
                    }
                });
            });
        };

        $scope.exportFile = async () => {
            let res = await FileProcessorService.exportInvalid($stateParams.idFile, $scope.exportType);
            const blob = new Blob([new Uint8Array(res.data)], {
                type: res.headers('Content-Type')
            });
            const URL = window.URL || window.MozURL || window.webkitURL || window.MSURL || window.OURL;

            var anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = `${$scope.filename} - invalid.xlsx`;
            document.body.appendChild(anchor);
            anchor.target = '_blank';
            anchor.click();
        };
    }
})();