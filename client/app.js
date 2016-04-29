(function(){

var app = angular.module('Textyz', ['ngRoute', 'ngAnimate']);


app.config(function($routeProvider){

    $routeProvider
    .when('/', {
    	// controller: 'homePageController',
        templateUrl: 'views/homepage.html'
    })
    .otherwise({redirectTo: '/'})
    
});
}());