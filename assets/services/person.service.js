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
        this.similarity = similarity;
        this.uploadFile = uploadFile;

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

        /**
         * Show similarity score.
         * @param {Array} persons - Data persons.
         */
        function similarity(data, dataMaster) {
            let _data = angular.copy(data),
                _dataMaster = angular.copy(dataMaster);
            _data = {
                'NPWP': _data['NPWP'],
                'NIK': _data['NIK'],
                'Full Name': _data['Full Name'],
                'Place of Birth': _data['Place of Birth'],
                'Date of Birth': _data['Date of Birth'],
                'Full Address': _data['Full Address']
            };
            _dataMaster = {
                'NPWP': _dataMaster['npwp'],
                'NIK': _dataMaster['nik'],
                'Full Name': _dataMaster['name'],
                'Place of Birth': _dataMaster['placeOfBirth'],
                'Date of Birth': _dataMaster['dateOfBirth'],
                'Full Address': _dataMaster['address']
            };
            console.log(data, dataMaster);
            return $http.post(`${url}/person/similarity`, [_data, _dataMaster]);
        }

        /**
         * Upload master file.
         * @param {File} file - File xls|csv|txt|etc.
         */
        function uploadFile(file) {
            let fd = new FormData();
            fd.append('file', file);
            return $http.post(`${url}/person/master`, fd, {
                transformResponse: angular.identity,
                headers: { 'Content-Type': undefined }
            });
        }
    }
})();