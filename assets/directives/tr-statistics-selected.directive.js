(function () {
    'use strict';

    window.app
        .directive('trStatisticsSelected', trStatisticsSelected);

    trStatisticsSelected.$inject = [];
    function trStatisticsSelected() {
        // Usage:
        // Set module statistics array from id.
        // Creates:
        // Call by proximity component.
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            element.on('change', () => {
                if (element.prop('checked') === true) {
                    if (typeof scope.exportType.find(_ => _ === attrs.id) === 'undefined') {
                        scope.exportType.push(attrs.id);
                    }
                } else {
                    scope.exportType = scope.exportType.filter(_ => _ !== attrs.id);
                }
            });
        }
    }
})();