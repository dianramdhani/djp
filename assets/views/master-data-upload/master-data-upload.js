(function () {
    'use strict';

    // Usage:
    // Master Data Upload view.

    window.app
        .component('masterDataUpload', {
            template: require('./master-data-upload.html'),
            controller: _
        });

    _.$inject = ['$scope', 'PersonService', 'UtilService'];
    function _($scope, PersonService, UtilService) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.upload = () => {
            UtilService.trLoadingProcess(async () => {
                for (const i in $scope.files) {
                    let res = await PersonService.uploadMasterFile($scope.files[i]);
                }
                alert('Upload Master File Success');
            });
        };
    }
})();