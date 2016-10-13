(function () {
    'use strict';

    const controllerId = 'baseController';

    angular
        .module('app')
        .controller(controllerId, controller);

    controller.$inject = [ 
        '$rootScope',
        '$location' 
    ];

    function controller($rootScope, $location) {
        var vm = this;
    };

})();
