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

            $timeout(() => {
                let el = $element.find(`#chart-${$scope.id}`),
                    datapie = {
                        labels: ['New', 'Processed', 'Completed'],
                        datasets: [{
                            data: [20, 20, 60],
                            backgroundColor: ['#f77eb9', '#fdbd88', '#7ebcff']
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
                    };

                let chart = new Chart(el, {
                    type: 'doughnut',
                    data: datapie,
                    options: optionpie
                });
            });
        };
    }
})();