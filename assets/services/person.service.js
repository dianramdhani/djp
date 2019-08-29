(function () {
    'use strict';

    window.app
        .service('PersonService', PersonService);

    PersonService.$inject = ['$http', 'CONFIG'];
    function PersonService($http, CONFIG) {
        this.findById = findById;

        const url = `${CONFIG.serviceAddress}:${CONFIG.servicePort}`

        /**
         * Find person detail by id.
         * @param {String} id - Id person.
         */
        function findById(id) {
            return $http.get(`${url}/person/${id}`);
        }
    }
})();