(function () {
    'use strict';

    // Usage:
    // Matching form.
    // Creates:
    // Call by detail-data view.

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