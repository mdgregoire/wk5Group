const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/track.html',
        controller: 'EmployeeController as ec'
    }).when('/add', {
        templateUrl: 'views/add.html',
        controller: 'EmployeeController as ec'
    }).when('/report', {
        templateUrl: 'views/report.html',
        controller: 'EmployeeController as ec'
    }).when('/track', {
        redirectTo: '/'
    }).otherwise({ template: '<h1>404 Page Not Found</h1>'})
})