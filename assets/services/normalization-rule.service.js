(function () {
    'use strict';

    window.app
        .service('NormalizationRuleService', NormalizationRuleService);

    NormalizationRuleService.$injectService = ['$http', 'CONFIG'];
    function NormalizationRuleService($http, CONFIG) {
        this.findAll = findAll;
        this.save = save;

        const url = CONFIG.serviceAddress;

        /**
         * Find all rule.
         */
        function findAll() {
            return $http.get(`${url}/title/rule`);
        }

        /**
         * Save rule.
         * @param {Object} rule - Rule.
         */
        function save(rule) {
            return $http.post(`${url}/title/rule`, rule);
        }
    }
})();