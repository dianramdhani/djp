(function () {
    'use strict';

    // Usage:
    // Dashboard view.

    window.app
        .component('dashboard', {
            template: require('./dashboard.html'),
            controller: _
        });

    _.$inject = ['$scope', '$timeout', 'FileProcessorService'];
    function _($scope, $timeout, FileProcessorService) {
        var $ctrl = this;
        $ctrl.$onInit = () => {
            $timeout(async () => {
                $scope.files = await FileProcessorService.loadFiles(100).then(({ data }) => {
                    let content = data.content,
                        totalFiles = content.length,
                        totalMerged = content.reduce((acc, obj) => acc + obj.mergedRecords, 0),
                        totalRecords = content.reduce((acc, obj) => acc + obj.totalRecords, 0),
                        mergedPercentage = totalMerged / totalRecords * 100;
                    return { totalFiles, totalMerged, totalRecords, mergedPercentage };
                });
                $scope.$apply();

                var datapie = {
                    labels: ['Processed', 'Unprocessed'],
                    datasets: [{
                        data: [$scope.files.mergedPercentage, 100 - $scope.files.mergedPercentage],
                        backgroundColor: ['#f77eb9', '#7ebcff']
                    }]
                };

                var optionpie = {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                };

                var ctx2 = document.getElementById('chartDonut');
                var myDonutChart = new Chart(ctx2, {
                    type: 'doughnut',
                    data: datapie,
                    options: optionpie
                });
            });
        };
    }
})();