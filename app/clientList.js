(function() {
    'use strict';

    angular
        .module('resume')
        .component('clientList', clientList());

    /* @ngInject */
    function clientList() {
        var component = {
            templateUrl: 'app/clientList.html',
            controller: clientListController,
        };

        return component;
    }

    /* @ngInject */
    clientListController.$inject = ['resumeDataService']
    function clientListController(resumeDataService) {
        var ctrl = this;
        ctrl.engagements = resumeDataService.resume().engagements;
    }
})();
