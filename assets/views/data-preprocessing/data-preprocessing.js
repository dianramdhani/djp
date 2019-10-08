(function () {
    'use strict';

    // Usage:
    // Data Preprocessing view.

    window.app
        .component('dataPreprocessing', {
            template: require('./data-preprocessing.html'),
            controller: _,
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();