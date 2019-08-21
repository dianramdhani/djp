(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    window.app
        .component('dashboard', {
            template: require('./dashboard.html'),
            controller: _
        });

    _.$inject = ['$timeout', '$document'];
    function _($timeout, $document) {
        var $ctrl = this;
        $ctrl.$onInit = () => {
            $timeout(() => {
                let libDashforgeEl = document.createElement('script');
                libDashforgeEl.src = './assets/lib/dashforge/js/dashforge.aside.js';
                libDashforgeEl.id = 'dashforge-lib';
                angular.element(`#${libDashforgeEl.id}`).remove();
                angular.element($document[0].body).append(libDashforgeEl);
            });
        };
    }
})();