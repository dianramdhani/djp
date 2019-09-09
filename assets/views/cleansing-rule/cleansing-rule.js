require('./cleansing-rule.css');

(function () {
    'use strict';

    // Usage:
    // Cleansing Rule container.

    window.app
        .component('cleansingRule', {
            template: require('./cleansing-rule.html'),
            controller: _
        });

    _.$inject = ['$scope', '$compile', '$timeout', '$element', 'NormalizationRuleService', 'DTOptionsBuilder', 'DTColumnBuilder'];
    function _($scope, $compile, $timeout, $element, NormalizationRuleService, DTOptionsBuilder, DTColumnBuilder) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    return NormalizationRuleService.findAll().then(_ => _.data || []);
                })
                .withOption('lengthMenu', [5, 10, 20])
                .withOption('createdRow', (row, _, __) => { $compile(angular.element(row).contents())($scope); })
                .withOption('initComplete', () => {
                    let addBtnContainer = $element.find('.dataTables_filter'),
                        btnElm = `
                            <button class="mg-l-10 btn btn-primary ht-30 pd-y-0 btn-icon" ng-click="addRule()">
                                <i data-feather="plus"></i>
                            </button>
                        `;
                    addBtnContainer.append($compile(angular.element(btnElm))($scope));
                    feather.replace();
                })
                .withPaginationType('simple_numbers');
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('fieldName').withTitle('Field Name'),
                DTColumnBuilder.newColumn('oldContent').withTitle('Old Content'),
                DTColumnBuilder.newColumn('newContent').withTitle('New Content'),
            ];
        };

        $scope.addRule = () => {
            console.log('hallo indonesia');
        };
    }
})();