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

    _.$inject = ['$stateParams', '$scope', '$compile', '$q', '$state', '$element', '$timeout', 'PersonService', 'DTOptionsBuilder', 'DTColumnBuilder'];
    function _($stateParams, $scope, $compile, $q, $state, $element, $timeout, PersonService, DTOptionsBuilder, DTColumnBuilder) {
        const initTable = () => {
            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    let q = $q.defer();
                    PersonService.findProximityPersonByPersonId($stateParams.idUnprocessed).then(({ data }) => {
                        $scope.dataMaster = angular.fromJson(data.content[0].solrMatcher) || [];
                        q.resolve($scope.dataMaster);
                    });
                    return q.promise;
                })
                .withOption('lengthMenu', [10, 20, 30])
                .withOption('order', [[3, 'desc']])
                .withOption('createdRow', (row, _, __) => { $compile(angular.element(row).contents())($scope); })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('npwp').withTitle('NPWP').withOption('defaultContent', '').withClass('wd-150 detail-data-detail'),
                DTColumnBuilder.newColumn('nik').withTitle('NIK').withOption('defaultContent', '').withClass('wd-150 detail-data-detail'),
                DTColumnBuilder.newColumn('name').withTitle('Full Name').withOption('defaultContent', '').withClass('wd-100 detail-data-detail'),
                DTColumnBuilder.newColumn('score').withTitle('Score').withClass('wd-100 detail-data-detail'),
                DTColumnBuilder.newColumn(null).withTitle('').notSortable().withClass('wd-80 text-center detail-data-detail')
                    .renderWith((data, _, __, ___) => {
                        return `<button class="btn btn-primary tr-btn-table" ng-click="matching('${data.id}')">Merge</button>`;
                    }),
            ];
            $scope.dtInstance = {};

            $timeout(() => {
                const format = (data) => {
                    return `
                    <table class="table mg-b-0">
                        <tbody>
                            <tr>
                                <th class="wd-150">NPWP</th>
                                <td>${data.npwp || ''}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">NIK</th>
                                <td>${data.nik || ''}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">Full Name</th>
                                <td>${data.name || ''}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">Place of Birth</th>
                                <td>${data.placeOfBirth || ''}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">Date of Birth</th>
                                <td>${data.dateOfBirth || ''}</td>
                            </tr>
                            <tr>
                                <th class="wd-150">Full Address</th>
                                <td>${data.address || ''}</td>
                            </tr>
                        </tbody>
                    </table>
                    `
                };

                $element.on('click', '.detail-data-detail', function () {
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

        let $ctrl = this;
        $ctrl.$onInit = () => {
            angular.element('.content-body').animate({ scrollTop: $element.offset().top }, 350);
            initTable();
            PersonService.findById($stateParams.idUnprocessed).then(({ data }) => { $scope.data = data; });
        };

        $scope.matching = (idDataMaster) => {
            let dataMaster = $scope.dataMaster.find(_ => angular.equals(_.id, idDataMaster));
            $state.go('etl.proximity.matching', { data: angular.toJson($scope.data), dataMaster: angular.toJson(dataMaster) });
        };
    }
})();