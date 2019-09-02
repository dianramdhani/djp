(function () {
    'use strict';

    // Usage:
    // Load data view.

    window.app
        .component('loadData', {
            template: require('./load-data.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state', '$compile', '$element', 'DTOptionsBuilder', 'DTColumnBuilder', 'FileProcessorService'];
    function _($scope, $state, $compile, $element, DTOptionsBuilder, DTColumnBuilder, FileProcessorService) {
        const refreshData = () => {
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                    url: FileProcessorService.urlSearch(),
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
        let $ctrl = this;
        $ctrl.$onInit = () => {
            console.log($element);
            refreshData();
        };

        $scope.showData = () => {
            $state.go('etl.proximity');
        };

        $scope.upload = async () => {
            for (const i in $scope.files) {
                let res = await FileProcessorService.uploadFile($scope.files[i]);
                console.log(res);
            }
            refreshData();
            angular.element('.content-body').animate({ scrollTop: $element.find('table').offset().top }, 350);
            /**
             * @todo
             * add loading
             */
        }
    }
})();