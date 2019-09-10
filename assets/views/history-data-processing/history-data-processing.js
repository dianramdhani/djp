(function () {
    'use strict';

    // Usage:
    // History Data Processing container.

    window.app
        .component('historyDataProcessing', {
            template: require('./history-data-processing.html'),
            controller: _
        });

    _.$inject = ['$scope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'PersonService'];
    function _($scope, $compile, DTOptionsBuilder, DTColumnBuilder, PersonService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    return PersonService.findExactPerson().then(_ => _.data.content);
                })
                .withOption('lengthMenu', [5, 10, 20])
                .withOption('createdRow', (row, _, __) => { $compile(angular.element(row).contents())($scope); })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('npwp').withTitle('NPWP'),
                DTColumnBuilder.newColumn('nik').withTitle('NIK'),
                DTColumnBuilder.newColumn('fullName').withTitle('Name'),
                DTColumnBuilder.newColumn('placeOfBirth').withTitle('Place of Birth'),
                DTColumnBuilder.newColumn('dateOfBirth').withTitle('Date of Birth'),
                DTColumnBuilder.newColumn('fullAddress').withTitle('Address'),
                DTColumnBuilder.newColumn('lastModifiedDate').withTitle('Last Modified Date')
                    .renderWith((data, _, __, ___) => {
                        return (new Date(data)).toLocaleString();
                    })
            ];
        };
    }
})();