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

    _.$inject = ['$timeout', '$scope'];
    function _($timeout, $scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            console.log('menu', $ctrl.menu);
            $timeout(() => {
                require('../../lib/dashforge/js/dashforge');
                require('../../lib/dashforge/js/dashforge.aside');
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
            /**
             * @todo 
             * add state go
             */
        };
    }
})();