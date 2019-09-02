(function () {
    'use strict';

    window.app
        .config(RouteApp);

    RouteApp.$inject = ['$stateProvider'];

    function RouteApp($stateProvider) {
        [
            { name: 'login', url: '/login', component: 'login' },
            { name: 'etl', url: '/etl', component: 'etlContainer' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();