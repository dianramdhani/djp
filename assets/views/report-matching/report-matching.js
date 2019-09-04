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

    _.$inject = ['$scope', '$stateParams', '$element', 'PersonService'];
    function _($scope, $stateParams, $element, PersonService) {
        let $ctrl = this;
        $ctrl.$onInit = async () => {
            angular.element('.content-body').animate({ scrollTop: $element.offset().top }, 350);
            $scope.data = await PersonService.findExactPersonByPersonId($stateParams.idProcessed).then(({ data }) => data.content[0]);
            $scope.$apply();
        };
    }
})();