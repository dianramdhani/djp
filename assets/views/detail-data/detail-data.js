(function () {
    'use strict';

    // Usage:
    // Show detail data and list posible match.
    // Creates:
    // Call by proximity view.

    window.app
        .component('detailData', {
            template: require('./detail-data.html'),
            controller: _
        });

    _.$inject = ['$stateParams', '$scope', '$compile', '$q', '$state', '$element', 'PersonService', 'DTOptionsBuilder', 'DTColumnBuilder'];
    function _($stateParams, $scope, $compile, $q, $state, $element, PersonService, DTOptionsBuilder, DTColumnBuilder) {
        const initTable = () => {
            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    let q = $q.defer();
                    PersonService.findProximityPersonByPersonId($stateParams.idUnprocessed).then(({ data }) => {
                        $scope.dataMaster = angular.fromJson(data.content[0].solrMatcher);
                        q.resolve($scope.dataMaster);
                    });
                    return q.promise;
                })
                .withOption('lengthMenu', [5, 10, 20])
                .withOption('order', [[0, 'desc']])
                .withOption('createdRow', (row, _, __) => { $compile(angular.element(row).contents())($scope); })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('score').withTitle('Score').withClass('wd-100')
                    .renderWith((data, _, __, ___) => {
                        return `
                        <div class="progress ht-20">
                            <div class="progress-bar tx-10" role="progressbar" aria-valuenow="${data}" aria-valuemin="0" aria-valuemax="100" style="width: ${data}%">${data}%</div>
                        </div>
                        `;
                    }),
                DTColumnBuilder.newColumn(null).withTitle('').notSortable().withClass('wd-80 text-center')
                    .renderWith((data, _, __, ___) => {
                        return `<button class="btn btn-primary tr-btn-table" ng-click="matching('${data.id}')">Matching</button>`;
                    }),
                DTColumnBuilder.newColumn('npwp').withTitle('NPWP').withOption('defaultContent', '').withClass('wd-150'),
                DTColumnBuilder.newColumn('name').withTitle('Name').withOption('defaultContent', '').withClass('wd-150'),
                DTColumnBuilder.newColumn('placeOfBirth').withTitle('Place of Birth').withOption('defaultContent', '').withClass('wd-150'),
                DTColumnBuilder.newColumn('dateOfBirth').withTitle('Date of Birth').withOption('defaultContent', '').withClass('wd-150'),
                DTColumnBuilder.newColumn('address').withTitle('Address').withOption('defaultContent', '').withClass('wd-200')
            ];
        };

        let $ctrl = this;
        $ctrl.$onInit = () => {
            angular.element('.content-body').animate({ scrollTop: $element.offset().top }, 350);
            initTable();
            PersonService.findById($stateParams.idUnprocessed).then(({ data }) => { $scope.data = data; });
        };

        $scope.matching = (idDataMaster) => {
            let dataMaster = $scope.dataMaster.map(_ => _.id === idDataMaster ? _ : false)[0];
            $state.go('etl.proximity.matching', { data: angular.toJson($scope.data), dataMaster: angular.toJson(dataMaster) });
        };
    }
})();