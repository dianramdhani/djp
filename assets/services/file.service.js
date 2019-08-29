(function () {
    'use strict';

    window.app
        .service('FileService', FileService);

    FileService.$inject = ['$http', 'CONFIG'];
    function FileService($http, CONFIG) {
        this.searchUrl = searchUrl;
        this.retrieve = retrieve;
        this.retrieveRecords = retrieveRecords;

        const url = `${CONFIG.serviceAddress}:${CONFIG.servicePort}`

        /**
         * Search file/s.
         */
        function searchUrl() {
            return `${url}/file/search`;
        }

        /**
         * Get detail file.
         * @param {String} id - Id file.
         */
        function retrieve(id) {
            return $http.get(`${url}/file/${id}`);
        }

        /**
         * Show records inside file.
         * @param {String} id - Id file.
         */
        function retrieveRecords(id) {
            return $http.get(`${url}/file/${id}/records`);
        }
    }
})();