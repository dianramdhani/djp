(function () {
    'use strict';

    window.app
        .service('FilePreprocessorService', FilePreprocessorService);

    FilePreprocessorService.$inject = ['$http', 'CONFIG'];
    function FilePreprocessorService($http, CONFIG) {
        this.uploadFile = uploadFile;
        this.urlSearch = urlSearch;
        this.retrieveStatistics = retrieveStatistics;
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
        function retrieveStatistics(id) {
            return $http.get(`${url}/prefile/${id}/statistics`);
        }

        /**
         * Export file invalid data.
         * @param {String} id - Id of file.
         * @param {Array} exportType - Array strings of type export.
         */
        function exportInvalid(id, exportType) {
            return $http.post(`${url}/prefile/${id}/exportInvalid`, exportType, { responseType: 'arraybuffer' });
        }
    }
})();