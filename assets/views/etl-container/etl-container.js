(function () {
    'use strict';

    // Usage:
    // DJP - ETL container.

    window.app
        .component('etlContainer', {
            template: require('./etl-container.html'),
            controller: _
        });

    _.$inject = ['$scope', '$rootScope'];
    function _($scope, $rootScope) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.menu = $rootScope.global.menu || {
                sidebar: [
                    // {
                    //     type: 'title | link | has-sub-link',
                    //     label: '',
                    //     icon: '',
                    //     state: {
                    //         to: '',
                    //         params: {}
                    //     },
                    //     active: true
                    // },
                    {
                        type: 'link',
                        label: 'Dashboard',
                        icon: 'monitor',
                        state: {
                            to: 'etl.dashboard',
                            params: {}
                        },
                        active: true
                    },
                    {
                        type: 'link',
                        label: 'Load Data',
                        icon: 'arrow-down-circle',
                        state: {
                            to: 'etl.loadData',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Cleansing Rule',
                        icon: 'shield',
                        state: {
                            to: 'etl.cleansingRule',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'title',
                        label: 'Master Data Management'
                    },
                    {
                        type: 'link',
                        label: 'History Data Processing',
                        icon: 'clock',
                        state: {
                            to: 'etl.historyDataProcessing',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Activity List',
                        icon: 'book',
                        state: {
                            to: 'etl.activityList',
                            params: {}
                        },
                        active: false
                    },
                ]
            }
        };
    }
})();