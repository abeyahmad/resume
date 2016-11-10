(function() {
    'use strict';

    angular
        .module('resume')
        .component('projectDetail', projectDetail());

    function projectDetail() {
        var component = {
            templateUrl: 'app/projectDetail.html',
            controller: projectController,
            bindings: {
                project: '<'
            }
        };

        return component;
    }

    function projectController() {
        var ctrl = this
        console.log(ctrl.project)
    }
})();
