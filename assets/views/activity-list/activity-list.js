(function () {
    'use strict';

    // Usage:
    // Activity List container.

    window.app
        .component('activityList', {
            template: require('./activity-list.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            feather.replace();
        };
    }
})();