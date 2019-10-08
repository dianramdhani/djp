(function () {
    'use strict';

    // Usage:
    // Data Preprocessing view.

    window.app
        .component('dataPreprocessing', {
            template: require('./data-preprocessing.html'),
            controller: _,
        });

    _.$inject = ['$scope', '$compile', '$element', 'DTOptionsBuilder', 'DTColumnBuilder', 'FilePreprocessorService', 'UtilService'];
    function _($scope, $compile, $element, DTOptionsBuilder, DTColumnBuilder, FilePreprocessorService, UtilService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                    url: FilePreprocessorService.urlSearch(),
                    dataFilter: (data) => {
                        data = angular.fromJson(data);
                        return angular.toJson({
                            recordsTotal: data.totalElements,
                            recordsFiltered: data.totalElements,
                            data: data.content
                        });
                    },
                    dataSrc: 'data',
                    data: (data) => {
                        let params = {
                            limit: data.length,
                            filename: data.search.value,
                            page: data.start / data.length
                        };
                        if (data.order.length !== 0) {
                            params['sortBy'] = data.columns[data.order[0].column].data;
                            params['sortOrder'] = data.order[0].dir;
                        }
                        return params;
                    }
                })
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withOption('lengthMenu', [10, 20, 30])
                .withOption('order', [[0, 'desc']])
                .withOption('createdRow', (row, _, __) => { $compile(angular.element(row).contents())($scope); })
                .withOption('language', { search: 'File Search' })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('uploadDate').withTitle('Upload Date')
                    .renderWith((data, _, __, ___) => {
                        return `${(new Date(data)).toLocaleString()}`;
                    }),
                DTColumnBuilder.newColumn('filename').withTitle('File Name'),
                DTColumnBuilder.newColumn('filesize').withTitle('Size File (Byte)'),
                DTColumnBuilder.newColumn('totalRecords').withTitle('Total Records'),
                DTColumnBuilder.newColumn('mergedRecords').withTitle('Merged Records'),
                DTColumnBuilder.newColumn('status').withTitle('Status'),
                DTColumnBuilder.newColumn(null).withTitle('').notSortable().withClass('text-center')
                    .renderWith((data, _, __, ___) => {
                        return `<button class="btn btn-primary tr-btn-table" ng-click="showStatistic('${data.id}', '${data.filename}')">Show Statistic</button>`;
                    })
            ];
            $scope.dtInstance = {};

            $scope.exportType = [];
        };

        $scope.upload = () => {
            UtilService.trLoadingProcess(async () => {
                for (const i in $scope.files) {
                    await FilePreprocessorService.uploadFile($scope.files[i]);
                }
                $scope.dtInstance.reloadData();
                angular.element('.content-body').animate({ scrollTop: $element.find('table').offset().top }, 350);
            });
        }

        $scope.showStatistic = async (id, filename) => {
            $scope.statistics = Object.assign({ file: { filename, id } }, await FilePreprocessorService.retrieveStatistics(id).then(_ => _.data));
            $scope.$apply();
            angular.element('.content-body').animate({ scrollTop: $element.find('#statistics').offset().top }, 350);
            $scope.exportType = [];
            $element.find(':checkbox').prop('checked', false).parent().removeClass('active');
        };

        $scope.exportFile = async () => {
            let res = await FilePreprocessorService.exportInvalid($scope.statistics.file.id, $scope.exportType);
            const blob = new Blob([new Uint8Array(res.data)], {
                type: res.headers('Content-Type')
            });
            const URL = window.URL || window.MozURL || window.webkitURL || window.MSURL || window.OURL;

            var anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = `${$scope.statistics.file.filename} - invalid.xlsx`;
            document.body.appendChild(anchor);
            anchor.target = '_blank';
            anchor.click();
        };
    }
})();