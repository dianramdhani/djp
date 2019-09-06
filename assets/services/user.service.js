(function () {
    'use strict';

    window.app
        .service('UserService', UserService);

    UserService.$inject = ['$http', 'CONFIG'];
    function UserService($http, CONFIG) {
        this.login = login;

        const url = CONFIG.serviceAddress;
        async function login(username, password) {
            let res = await $http.post(`${url}/user/login`, { username, password });
            console.log(res);
        }
    }
})();