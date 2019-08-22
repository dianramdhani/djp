require('./login.css');

(function () {
    'use strict';

    // Usage:
    // Login form.

    window.app
        .component('login', {
            template: require('./login.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state'];
    function _($scope, $state) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.login = () => {
            $state.go('etlContainer');
        };
    }
})();