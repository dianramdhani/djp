(function () {
    'use strict';

    // Usage:
    // Modal form cleansing rule. 
    // Creates:
    // Call by cleansing rule view.

    window.app
        .component('cleansingRuleForm', {
            template: require('./cleansing-rule-form.html'),
            controller: _,
            bindings: {
                reload: '&',
                rule: '<'
            }
        });

    _.$inject = ['$scope', '$timeout', '$element', 'NormalizationRuleService'];
    function _($scope, $timeout, $element, NormalizationRuleService) {
        let $ctrl = this, modalEl;
        $ctrl.$onInit = () => {
            $scope.id = $scope.$id;
            $scope.rule = $ctrl.rule || {
                fieldName: 'title',
                oldContent: undefined,
                newContent: undefined,
                word: true
            };
            $timeout(() => {
                modalEl = $element.find(`#modal-${$scope.id}`)
                    .modal('show')
                    .on('hidden.bs.modal', () => {
                        $element.remove();
                    });
            });
        };

        $scope.saveRule = async () => {
            await NormalizationRuleService.save($scope.rule);
            $ctrl.reload();
            modalEl.modal('hide');
        };
    }
})();