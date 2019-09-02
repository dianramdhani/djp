(function () {
    'use strict';

    // Usage:
    // Show result matching.
    // Creates:
    // Call by proximty view.

    window.app
        .component('reportMatching', {
            template: require('./report-matching.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();