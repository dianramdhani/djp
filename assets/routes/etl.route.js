(function () {
    'use strict';

    window.app
        .config(RouteEtl);

    RouteEtl.$inject = ['$stateProvider'];

    function RouteEtl($stateProvider) {
        [
            { name: 'etl.dashboard', url: '/dashboard', component: 'dashboard' },
            { name: 'etl.loadData', url: '/load-data', component: 'loadData' },
            { name: 'etl.proximity', url: '/load-data/proximity?{idFile}', component: 'proximity' },
            { name: 'etl.proximity.detailData', url: '/?{idUnprocessed}', component: 'detailData' },
            { name: 'etl.proximity.matching', component: 'matching' },
            { name: 'etl.proximity.reportMatching', component: 'reportMatching' },
            { name: 'etl.cleansingRole', url: '/cleansing-role', component: 'cleansingRole' },
            { name: 'etl.historyDataProcessing', url: '/history-data-processing', component: 'historyDataProcessing' },
            { name: 'etl.activityList', url: '/activity-list', component: 'activityList' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();