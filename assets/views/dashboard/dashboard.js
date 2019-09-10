(function () {
    'use strict';

    // Usage:
    // Dashboard view.

    window.app
        .component('dashboard', {
            template: require('./dashboard.html'),
            controller: _
        });

    _.$inject = ['$scope', '$timeout', '$element', 'FileProcessorService'];
    function _($scope, $timeout, $element, FileProcessorService) {
        var $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.id = $scope.$id;
            $scope.dataMatchingProgress = {};

            $timeout(() => {
                FileProcessorService.getSummary().then(({ data }) => {
                    Object.keys(data).forEach(_ => data[_] = Number(data[_]));
                    $scope.dataMatchingProgress = data;

                    $scope.dataMatchingProgress['dashboard'] = {
                        processed: ($scope.dataMatchingProgress.processedRecords / $scope.dataMatchingProgress.totalRecords) * 100,
                        completed: ($scope.dataMatchingProgress.completedRecords / $scope.dataMatchingProgress.totalRecords) * 100
                    };
                    $scope.dataMatchingProgress.dashboard['new'] = 100 - ($scope.dataMatchingProgress.dashboard.processed + $scope.dataMatchingProgress.dashboard.completed);

                    let dataChart = angular.copy($scope.dataMatchingProgress.dashboard),
                        el = $element.find(`#chart-${$scope.id}`),
                        datapie = {
                            labels: ['New', 'Processed', 'Completed'],
                            datasets: [{
                                data: [
                                    dataChart.new,
                                    dataChart.processed,
                                    dataChart.completed
                                ],
                                backgroundColor: ['#f10075', '#fd7e14', '#0168fa']
                            }]
                        },
                        optionpie = {
                            maintainAspectRatio: false,
                            responsive: true,
                            legend: { display: false },
                            animation: {
                                animateScale: true,
                                animateRotate: true
                            },
                            tooltips: { enabled: false }
                        },
                        chart = new Chart(el, {
                            type: 'doughnut',
                            data: datapie,
                            options: optionpie
                        });

                    feather.replace();
                });

            });
        };
    }
})();