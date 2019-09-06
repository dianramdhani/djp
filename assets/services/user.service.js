(function () {
    'use strict';

    window.app
        .service('UserService', UserService);

    UserService.$inject = ['$http', '$rootScope', '$cookies', 'CONFIG'];
    function UserService($http, $rootScope, $cookies, CONFIG) {
        this.login = login;
        this.logout = logout;

        const url = CONFIG.serviceAddress;

        /**
         * Login service.
         * @param {String} username - String username.
         * @param {String} password - String password.
         */
        async function login(username, password) {
            $rootScope.global['user'] = await $http.post(`${url}/user/login`, { username, password }).then(_ => _.data);
            // $http.defaults.headers.common = { token: $rootScope.global.user.token };
            let expires = new Date();
            expires.setDate(expires.getDate() + 7);
            $cookies.putObject('user', $rootScope.global.user, { expires });
            return $rootScope.global.user;
        }

        /**
         * Logout service.
         */
        function logout() {
            $http.defaults.headers.common = {};
            $rootScope.globals = {};
            $cookies.remove('user');
            $cookies.remove('menu');
        }
    }
})();