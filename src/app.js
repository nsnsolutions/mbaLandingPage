(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular Modules
        'ngRoute',

    ]);
  
    /* 
     * Global App Configuration 
     */

    app.config([
    
        '$routeProvider',

        function($routeProvider, $locationProvider) {

            $routeProvider
                .when('/:name', {
                    templateUrl: "test.html"
                })    

                .otherwise({
                    redirectTo: '/'
                });


            //  $locationProvider.html5Mode(true);
        }

    ]);


    
})();
