angular.module('myApp', ['ngRoute','ngResource','myApp.controllers','myApp.factories'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'views/welcome.html',
    })
    .when('/chirps',{
    templateUrl:'views/list.html',
    controller:'showListController'
    })
    .when('/chirps/:id',{
        templateUrl:'views/single_chirps.html',
        controller:'singleViewController'
    })
    .when('/chirps/update',{
        templateUrl:'views/update.html',
        controller:'singleUpdateController'
    })
    .otherwise({
        redirectTo: '/'
    });
   
}]);