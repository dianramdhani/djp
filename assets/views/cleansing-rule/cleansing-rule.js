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
        let $ctrl = this, data;
        $ctrl.$onInit = () => {
            $scope.dtOptions = DTOptionsBuilder
                .fromFnPromise(() => {
                    return NormalizationRuleService.findAll().then(_ => {
                        data = _.data || []
                        return data;
                    });
                })
                .withOption('lengthMenu', [5, 10, 20])
                .withOption('createdRow', (row, _, __) => { $compile(angular.element(row).contents())($scope); })
                .withOption('drawCallback', () => feather.replace())
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
                DTColumnBuilder.newColumn('word').withTitle('Word').notSortable().withClass('wd-60')
                    .renderWith((data, _, { id }, ___) => {
                        return `
                            <div class="custom-control custom-switch pd-l-15">
                                <input type="checkbox" class="custom-control-input" id="sw-${id}" disabled ${data ? 'checked' : ''}>
                                <label class="custom-control-label" for="sw-${id}" title="Exact word. Please reconfig to change!"></label>
                            </div>
                        `;
                    }),
                DTColumnBuilder.newColumn(null).withTitle('').notSortable().withClass('text-right wd-80')
                    .renderWith(({ id }, _, __, ___) => {
                        return `
                            <button class="btn btn-primary ht-30 pd-y-0 btn-icon" ng-click="updateRule('${id}')">
                                <i data-feather="settings"></i>
                            </button>
                            <button class="btn btn-primary ht-30 pd-y-0 btn-icon" ng-click="deleteRule('${id}')">
                                <i data-feather="trash-2"></i>
                            </button>
                        `;
                    })
            ];
            $scope.dtInstance = {};
        };

        $scope.addRule = () => {
            $element.prepend($compile(angular.element(`
                <cleansing-rule-form reload="reload()"></cleansing-rule-form>
            `))($scope));
        };

        $scope.updateRule = (_id) => {
            $scope.rule = data.find(({ id }) => id === _id);
            $element.prepend($compile(angular.element(`
                <cleansing-rule-form reload="reload()" rule="rule"></cleansing-rule-form>
            `))($scope));
        };

        $scope.deleteRule = async (id) => {
            if (confirm("Are you sure want delete this record?")) {
                await NormalizationRuleService.deleteRule(id);
                $scope.reload();
            }
        };

        $scope.reload = () => {
            $scope.dtInstance.reloadData();
        };
    }
})();