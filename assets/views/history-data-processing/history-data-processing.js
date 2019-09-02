(function () {
    'use strict';

    // Usage:
    // History Data Processing container.

    window.app
        .component('historyDataProcessing', {
            template: require('./history-data-processing.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();