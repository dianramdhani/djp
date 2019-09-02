(function () {
    'use strict';

    // Usage:
    // Cleansing Role container.

    window.app
        .component('cleansingRole', {
            template: require('./cleansing-role.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();