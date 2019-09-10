(function () {
    'use strict';

    window.app
        .service('PersonService', PersonService);

    PersonService.$inject = ['$http', 'CONFIG'];
    function PersonService($http, CONFIG) {
        this.findById = findById;
        this.findProximityPersonByPersonId = findProximityPersonByPersonId;
        this.findExactPersonByPersonId = findExactPersonByPersonId;
        this.merge = merge;
        this.findExactPerson = findExactPerson;

        const url = CONFIG.serviceAddress;

        /**
         * Find person detail by id.
         * @param {String} id - Id person.
         */
        function findById(id) {
            return $http.get(`${url}/person/${id}`);
        }

        /**
         * Find proximitiy by person id.
         * @param {String} id - Id of person.
         */
        function findProximityPersonByPersonId(id) {
            return $http.get(`${url}/person/proximity-by-personid`, { params: { personId: id } });
        }

        /**
         * Find Person has matched.
         * @param {String} id - Id person.
         */
        function findExactPersonByPersonId(id) {
            return $http.get(`${url}/person/exact-by-personid`, { params: { personId: id } });
        }

        /**
         * Merge person.
         * @param {Object} person - Data person.
         */
        function merge(person) {
            return $http.post(`${url}/person/merge`, person);
        }

        /**
         * Url find exact person.
         */
        function findExactPerson(limit) {
            return $http.get(`${url}/person/exact`, { limit });
        }
    }
})();