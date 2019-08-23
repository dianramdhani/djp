(function () {
    'use strict';

    window.app
        .config(RouteEtl);

    RouteEtl.$inject = ['$stateProvider'];

    function RouteEtl($stateProvider) {
        [
            { name: 'etl.dashboard', url: '/dashboard', component: 'dashboard' },
            { name: 'etl.loadData', url: '/load-data', component: 'loadData' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();