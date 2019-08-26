(function () {
    'use strict';

    // Usage:
    // Show detail data and list posible match.
    // Creates:
    // Call by proximity view.

    window.app
        .component('detailData', {
            template: require('./detail-data.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();