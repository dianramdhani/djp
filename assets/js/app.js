window.app = angular.module('DJP', ['ui.router', 'ngCookies', 'datatables']);

// CONFIG
require('./config');

// RUN
(function () {
    'use strict';

    window.app
        .run(Run);

    Run.$inject = ['$state'];
    function Run($state) {
        $state.go('login');
    }
})();

// ROUTES
require('../routes/app.route');
require('../routes/etl.route');

// SERVICES
require('../services/file.service');
require('../services/person.service');
require('../services/excel-rule.service');

// DIRECTIVES
require('../directives/tr-files.directive');

// COMPONENTS
require('../components/tr-wrapper/tr-wrapper');

// VIEWS
require('../views/login/login');
require('../views/etl-container/etl-container');
require('../views/dashboard/dashboard');
require('../views/load-data/load-data');
require('../views/proximity/proximity');
require('../views/detail-data/detail-data');
require('../views/report-matching/report-matching');
require('../views/matching/matching');
require('../views/cleansing-role/cleansing-role');
require('../views/history-data-processing/history-data-processing');
require('../views/activity-list/activity-list');
