(function () {
    'use strict';

    window.app
        .service('FileProcessorService', FileProcessorService);

    FileProcessorService.$inject = ['$http', 'CONFIG'];
    function FileProcessorService($http, CONFIG) {
        this.urlSearch = urlSearch;
        this.retrieve = retrieve;
        this.retrieveRecords = retrieveRecords;

        const url = `${CONFIG.serviceAddress}:${CONFIG.servicePort}`

        /**
         * Search file/s.
         */
        function urlSearch() {
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