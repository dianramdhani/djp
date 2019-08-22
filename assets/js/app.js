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

// SERVICES

// DIRECTIVES

// COMPONENTS
require('../components/tr-wrapper/tr-wrapper');

// VIEWS
// require('../views/dashboard/dashboard');
require('../views/etl-container/etl-container');
require('../views/load-data/load-data');
require('../views/login/login');
