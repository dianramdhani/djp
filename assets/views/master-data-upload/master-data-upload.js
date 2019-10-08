(function () {
    'use strict';

    // Usage:
    // Master Data Upload view.

    window.app
        .component('masterDataUpload', {
            template: require('./master-data-upload.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();