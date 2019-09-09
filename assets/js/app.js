window.app = angular.module('DJP', ['ui.router', 'ngCookies', 'datatables']);

// RUN
(function () {
    'use strict';

    window.app
        .run(Run);

    Run.$inject = ['$state', '$rootScope', '$cookies', '$http'];
    function Run($state, $rootScope, $cookies, $http) {
        $rootScope['global'] = {
            user: angular.fromJson($cookies.get('user')),
            menu: angular.fromJson($cookies.get('menu'))
        } || {};
        if (typeof $rootScope.global.user === 'undefined') {
            $state.go('login');
        } else {
            // $http.defaults.headers.common = { token: $rootScope.global.user.token };
            $state.go('etl');
        }
    }
})();

// ROUTES
require('../routes/app.route');
require('../routes/etl.route');

// SERVICES
require('../services/util.service');
require('../services/file-processor.service');
require('../services/person.service');
require('../services/excel-rule.service');
require('../services/normalization-rule.service');
require('../services/user.service');

// DIRECTIVES
require('../directives/tr-files.directive');

// COMPONENTS
require('../components/tr-wrapper/tr-wrapper');
require('../components/tr-loading/tr-loading');

// VIEWS
require('../views/login/login');
require('../views/etl-container/etl-container');
require('../views/dashboard/dashboard');
require('../views/load-data/load-data');
require('../views/proximity/proximity');
require('../views/detail-data/detail-data');
require('../views/report-matching/report-matching');
require('../views/matching/matching');
require('../views/cleansing-rule/cleansing-rule');
require('../views/cleansing-rule-form/cleansing-rule-form');
require('../views/history-data-processing/history-data-processing');
require('../views/activity-list/activity-list');