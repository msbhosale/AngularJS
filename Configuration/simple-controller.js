let myApp = angular.module('myApp', []);

let myAppCTRL = myApp.controller('myAppCTRL', function ($scope) {
    $scope.appTitle = "My App - Simple Controller";
    $scope.student = {
        rollNumber: 101,
        firstName: "MS",
        lastName: "Bhosale",
        age: 29
    }
});