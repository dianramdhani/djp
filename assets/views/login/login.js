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

    _.$inject = ['$scope', '$state', 'UserService'];
    function _($scope, $state, UserService) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.login = async () => {
            try {
                await UserService.login($scope.username, $scope.password);
                $state.go('etl');
            } catch (error) {
                alert(error.data.message);
            }
        };
    }
})();