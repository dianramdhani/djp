(function () {
    'use strict';

    window.app
        .service('PrefileService', PrefileService);

    PrefileService.$inject = [''];
    function PrefileService() {
        this.uploadFile = uploadFile;
        this.urlSearch = urlSearch;
        this.statistics = statistics;
        this.exportInvalid = exportInvalid;

        const url = CONFIG.serviceAddress;

        /**
         * Upload file.
         * @param {File} file - File xls|csv|txt|etc.
         */
        function uploadFile(file) {
            let fd = new FormData();
            fd.append('file', file);
            return $http.post(`${url}/prefile/uploadFile`, fd, {
                transformResponse: angular.identity,
                headers: { 'Content-Type': undefined }
            });
        }

        /**
         * Search file/s.
         */
        function urlSearch() {
            return `${url}/prefile/search`;
        }

        /**
         * Get statistics.
         * @param {String} id - Id file.
         */
        function statistics(id) {
            return $http.get(`${url}/prefile/${id}/statistics`);
        }

        /**
         * Check export invalid.
         * @param {String} id - id file.
         */
        function exportInvalid(id) {
            return $http.get(`${url}/prefile/${id}/exportInvalid`);
        }
    }
})();