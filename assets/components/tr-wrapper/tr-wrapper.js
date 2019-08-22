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

    _.$inject = ['$timeout'];
    function _($timeout) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            console.log('menu', $ctrl.menu);
            $timeout(() => {
                require('../../lib/dashforge/js/dashforge');
                require('../../lib/dashforge/js/dashforge.aside');
            });
        };
    }
})();