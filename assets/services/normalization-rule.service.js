(function () {
    'use strict';

    window.app
        .service('NormalizationRuleService', NormalizationRuleService);

    NormalizationRuleService.$injectService = ['$http', 'CONFIG'];
    function NormalizationRuleService($http, CONFIG) {
        this.findAll = findAll;

        const url = CONFIG.serviceAddress;
        function findAll() {
            return $http.get(`${url}/title/rule`);
        }
    }
})();