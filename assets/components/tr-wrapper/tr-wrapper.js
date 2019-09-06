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

    _.$inject = ['$timeout', '$scope', '$state', '$rootScope', '$cookies', 'UserService'];
    function _($timeout, $scope, $state, $rootScope, $cookies, UserService) {
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

            $rootScope.global.menu = $ctrl.menu;
            let expires = new Date();
            expires.setDate(expires.getDate() + 7);
            $cookies.putObject('menu', $rootScope.global.menu, { expires });

            $state.go($ctrl.menu.sidebar[index].state.to, $ctrl.menu.sidebar[index].state.params);
        };

        $scope.logout = () => {
            UserService.logout();
            $state.go('login');
        };
    }
})();