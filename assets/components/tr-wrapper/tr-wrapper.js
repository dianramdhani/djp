(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    window.app
        .component('trWrapper', {
            template: require('./tr-wrapper.html'),
            controller: _,
            bindings: {
                menu: '='
            }
        });

    _.$inject = ['$timeout', '$scope', '$state'];
    function _($timeout, $scope, $state) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $timeout(() => {
                require('../../lib/dashforge/js/dashforge');
                require('../../lib/dashforge/js/dashforge.aside');
                angular.forEach($ctrl.menu.sidebar, (menu, index) => {
                    if (menu.active) {
                        $scope.goToState(index);
                    }
                });
            });
        };

        $scope.goToState = (index) => {
            angular.forEach($ctrl.menu.sidebar, (menu, _index) => {
                if (menu.type === 'link') {
                    menu.active = false;
                }
                if (_index === index) {
                    menu.active = true;
                }
            });
            $state.go($ctrl.menu.sidebar[index].state.to, $ctrl.menu.sidebar[index].state.params);
        };
    }
})();