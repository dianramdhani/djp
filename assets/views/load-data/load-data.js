(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    window.app
        .component('loadData', {
            template: require('./load-data.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state'];
    function _($scope, $state) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.showData = () => {
            $state.go('etl.proximity');
        };
    }
})();