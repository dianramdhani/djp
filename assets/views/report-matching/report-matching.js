(function () {
    'use strict';

    // Usage:
    // Show result matching.
    // Creates:
    // Call by proximty view.

    window.app
        .component('reportMatching', {
            template: require('./report-matching.html'),
            controller: _
        });

    _.$inject = ['$scope', '$stateParams', 'PersonService'];
    function _($scope, $stateParams, PersonService) {
        let $ctrl = this;
        $ctrl.$onInit = async () => {
            $scope.data = await PersonService.findExactPersonByPersonId($stateParams.idProcessed).then(({ data }) => data.content[0]);
            $scope.$apply();
        };
    }
})();