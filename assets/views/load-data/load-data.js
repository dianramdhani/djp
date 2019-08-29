(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    window.app
        .component('loadData', {
            template: require('./load-data.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state', 'DTOptionsBuilder', 'DTColumnBuilder'];
    function _($scope, $state, DTOptionsBuilder, DTColumnBuilder) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                    url: 'http://cra.tritronik.com:8081/file/search',
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
                .withOption('language', { search: 'File Search' })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('uploadDate').withTitle('Upload Date'),
                DTColumnBuilder.newColumn('filename').withTitle('File Name'),
                DTColumnBuilder.newColumn('size').withTitle('Size (byte)'),
                DTColumnBuilder.newColumn('status').withTitle('Status'),
            ];
        };

        $scope.showData = () => {
            $state.go('etl.proximity');
        };
    }
})();