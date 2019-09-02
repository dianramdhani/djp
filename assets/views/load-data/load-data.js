(function () {
    'use strict';

    // Usage:
    // Load data view.

    window.app
        .component('loadData', {
            template: require('./load-data.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state', '$compile', '$http', 'DTOptionsBuilder', 'DTColumnBuilder', 'FileService'];
    function _($scope, $state, $compile, $http, DTOptionsBuilder, DTColumnBuilder, FileService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                    url: FileService.urlSearch(),
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
                .withOption('lengthMenu', [5, 10, 20])
                .withOption('createdRow', (row, _, __) => { $compile(angular.element(row).contents())($scope); })
                .withOption('language', { search: 'File Search' })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('uploadDate').withTitle('Upload Date'),
                DTColumnBuilder.newColumn('filename').withTitle('File Name'),
                DTColumnBuilder.newColumn('size').withTitle('Size (byte)'),
                DTColumnBuilder.newColumn('status').withTitle('Status'),
                DTColumnBuilder.newColumn(null).withTitle('').notSortable()
                    .renderWith((data, _, __, ___) => {
                        return `<button class="btn btn-primary tr-btn-table" ui-sref="etl.proximity({idFile: '${data.id}'})">Show File</button>`;
                    })
            ];
        };

        $scope.showData = () => {
            $state.go('etl.proximity');
        };

        $scope.upload = async () => {
            for (const i in $scope.files) {
                let fd = new FormData();
                fd.append('file', $scope.files[i]);
                let res = await $http.post('http://cra.tritronik.com:8081/excel/process', fd, {
                    transformResponse: angular.identity,
                    headers: { 'Content-Type': undefined }
                });
                console.log($scope.files[i], i, fd, res);
            }
        }
    }
})();