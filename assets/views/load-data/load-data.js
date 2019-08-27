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

    _.$inject = ['$scope', '$state', '$http'];
    function _($scope, $state, $http) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $http.get('/assets/test/fileSearch.json').then(res => {
                let data = res.data;
            });
        };

        $scope.showData = () => {
            $state.go('etl.proximity');
        };
    }
})();