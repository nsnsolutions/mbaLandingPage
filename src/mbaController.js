(function() {
    'use strict';

    const controllerName = 'mba';
    const controllerId = 'mbaController';
    
    angular
        .module('app')
        .controller(controllerId, controller);

    controller.$inject = [
        '$scope',
        '$routeParams',
        '$http'
    ];

    function controller($scope, $routeParams, $http) {

            console.log("In mba Controller");
            var vm = this;
            vm.name = $routeParams.name;


    $http.get("https://s3.amazonaws.com/velmadocs/Velma/test.json")
        .then(function(response) {
            function getQueryVariable(variable) {
                //var query = window.location.href;
                var vars = vm.name;
                var name = vars.split('.');
                return (name);
            }
            
            var finalName = getQueryVariable(name);

            console.log("Final Name = " + finalName);

            console.log(response);

            for (var x = 0; x < response.data.people.length; x++) {
                console.log(response.data.people[x].firstName.toLowerCase() + ' == ' + finalName[0].toLowerCase() + ' && ' + response.data.people[x].lastName.toLowerCase() + ' == ' + finalName[1].toLowerCase());
                if ((response.data.people[x].firstName.toLowerCase() == finalName[0].toLowerCase()) && (response.data.people[x].lastName.toLowerCase() == finalName[1].toLowerCase())) {
                    console.log("Record Found");
                    
                    $scope.firstName = response.data.people[x].firstName;
                    $scope.lastName = response.data.people[x].lastName;
                    $scope.address1 = response.data.people[x].address1;
                    $scope.address2 = response.data.people[x].address2;
                    $scope.company = response.data.people[x].company;
                    $scope.title = response.data.people[x].title;
                    $scope.state = response.data.people[x].state;
                    $scope.city = response.data.people[x].city;
                    $scope.zip = response.data.people[x].zip;

                } else {
                    console.log("No record found");
                }
            } 
        });









    }


})();