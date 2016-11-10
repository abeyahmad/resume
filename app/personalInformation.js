(function() {
    'use strict';

    angular
        .module('resume')
        .component('personalInformation', personalInformation());

    /* @ngInject */
    function personalInformation() {
        var component = {
            templateUrl: 'app/personalInformation.html',
            controller: personalInformationController,
        };

        return component;
    }

    personalInformationController.$inject = ['resumeDataService'];

    /* @ngInject */
    function personalInformationController(resumeDataService) {
        var ctrl = this;
        console.log('hello world')
        ctrl.me = resumeDataService.resume().basics

    }
})();
