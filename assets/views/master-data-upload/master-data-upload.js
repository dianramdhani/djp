(function () {
    'use strict';

    // Usage:
    // Master Data Upload view.

    window.app
        .component('masterDataUpload', {
            template: require('./master-data-upload.html'),
            controller: _
        });

    _.$inject = ['$scope'];
    function _($scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.upload = () => {
            console.log($scope.files);
        }
    }
})();