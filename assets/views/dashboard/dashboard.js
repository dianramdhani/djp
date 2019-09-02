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

    _.$inject = [];
    function _() {
        var $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();