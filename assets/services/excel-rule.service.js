(function () {
    'use strict';

    window.app
        .service('ExcelRuleService', ExcelRuleService);

    ExcelRuleService.$inject = ['$http', 'CONFIG'];
    function ExcelRuleService($http, CONFIG) {
        this.process = process;

        const url = CONFIG.serviceAddress;

        function process(file) {
            let fd = new FormData();
            fd.append('file', file);
            return $http.post(`${url}/excel/process`, fd, {
                transformResponse: angular.identity,
                headers: { 'Content-Type': undefined }
            });
        }
    }
})();