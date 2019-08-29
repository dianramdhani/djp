(function () {
    'use strict';

    // Usage:
    // Show detail data and list posible match.
    // Creates:
    // Call by proximity view.

    window.app
        .component('detailData', {
            template: require('./detail-data.html'),
            controller: _
        });

    _.$inject = ['$stateParams', '$scope', 'PersonService'];
    function _($stateParams, $scope, PersonService) {
        let $ctrl = this;
        $ctrl.$onInit = async () => {
            $scope.data = await PersonService.findById($stateParams.idUnprocessed).then(_ => _.data);
            $scope.$apply();
            console.log($scope.data);
        };
    }
})();