(function () {
    'use strict';

    window.app
        .service('UtilService', UtilService);

    UtilService.$inject = [];
    function UtilService() {
        this.trLoading = trLoading;

        function trLoading() { }
    }
})();