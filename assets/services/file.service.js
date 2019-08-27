(function () {
    'use strict';

    window.app
        .service('FileService', FileService);

    FileService.$inject = ['$http', 'CONFIG'];
    function FileService($http, CONFIG) {
        this.search = search;

        const url = `${CONFIG.serviceAddress}:${CONFIG.servicePort}`

        /**
         * Search file/s.
         * @param {Object} arg - Argument consists of filename (String), sortBy (String), sortOrder (Number), page (Number), limit (Number).
         */
        function search() {
            // return $http.get(`${url}/file/search`, arg);
            return $http.get('http://192.168.11.88:8081/file/search');
        }
    }
})();