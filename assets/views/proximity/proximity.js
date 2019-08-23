require('./proximity.css');

(function () {
    'use strict';

    // Usage:
    // Proximity view.

    window.app
        .component('proximity', {
            template: require('./proximity.html'),
            controller: _
        });

    _.$inject = ['$scope'];
    function _($scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.exactMatch = () => {
            $scope.showExactMatch = true;
        }
    }
})();