(function () {
    'use strict';

    // Usage:
    // Matching form.

    window.app
        .component('matching', {
            template: require('./matching.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();