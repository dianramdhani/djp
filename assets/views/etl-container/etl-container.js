(function () {
    'use strict';

    // Usage:
    // DJP - ETL container.

    window.app
        .component('etlContainer', {
            template: require('./etl-container.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();