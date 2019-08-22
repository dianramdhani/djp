(function () {
    'use strict';

    // Usage:
    // DJP - ETL container.

    window.app
        .component('etlContainer', {
            template: require('./etl-container.html'),
            controller: _
        });

    _.$inject = ['$scope'];
    function _($scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.menu = {
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
                            to: '',
                            params: {}
                        },
                        active: true
                    },
                    {
                        type: 'link',
                        label: 'Load Data',
                        icon: 'arrow-down-circle',
                        state: {
                            to: '',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Cleansing Role',
                        icon: 'shield',
                        state: {
                            to: '',
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
                            to: '',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Activity List',
                        icon: 'book',
                        state: {
                            to: '',
                            params: {}
                        },
                        active: false
                    },
                ]
            }
        };
    }
})();