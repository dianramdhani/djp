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

    _.$inject = ['$stateParams', '$scope', '$compile', '$q', 'PersonService', 'DTOptionsBuilder', 'DTColumnBuilder'];
    function _($stateParams, $scope, $compile, $q, PersonService, DTOptionsBuilder, DTColumnBuilder) {
        const initTable = () => {
            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    let q = $q.defer();
                    PersonService.findProximityPersonByPersonId($stateParams.idUnprocessed).then(({ data }) => {
                        console.log(data);
                        q.resolve(angular.fromJson(data.content[0].solrMatcher));
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
                        console.log(data);
                        return `
                        <div class="progress ht-20">
                            <div class="progress-bar tx-10" role="progressbar" aria-valuenow="${data}" aria-valuemin="0" aria-valuemax="100" style="width: ${data}%">${data}%</div>
                        </div>
                        `;
                    }),
                DTColumnBuilder.newColumn('npwp').withTitle('NPWP').withOption('defaultContent', '').withClass('wd-150'),
                DTColumnBuilder.newColumn('name').withTitle('Name').withOption('defaultContent', '').withClass('wd-150'),
                DTColumnBuilder.newColumn('placeOfBirth').withTitle('Place of Birth').withOption('defaultContent', '').withClass('wd-150'),
                DTColumnBuilder.newColumn('dateOfBirth').withTitle('Date of Birth').withOption('defaultContent', '').withClass('wd-150'),
                DTColumnBuilder.newColumn('address').withTitle('Address').withOption('defaultContent', '').withClass('wd-200'),
                DTColumnBuilder.newColumn(null).withTitle('').notSortable().withClass('wd-60')
                    .renderWith((data, _, __, ___) => {
                        return `<button class="btn btn-primary tr-btn-table">Matching</button>`;
                    })
            ];
        };

        let $ctrl = this;
        $ctrl.$onInit = () => {
            initTable();
            PersonService.findById($stateParams.idUnprocessed).then(({ data }) => { $scope.data = data; });
        };
    }
})();