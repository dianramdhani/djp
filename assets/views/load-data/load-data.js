(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    window.app
        .component('loadData', {
            template: require('./load-data.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();