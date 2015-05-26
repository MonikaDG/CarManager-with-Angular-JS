//Define an angular module for our app
var carManager = angular.module('carManager', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
carManager.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	when('/home',{
	templateUrl:'partials/home.html',
	controller: 'HomeController'
	}).
      when('/Phases', {
	templateUrl: 'partials/form.html',
	controller: 'PhaseController'
      }).
      when('/ViewOrders', {
	templateUrl: 'partials/high.html',
	controller: 'ViewDetailsController'
      }).
      otherwise({
	redirectTo: '/home'
      });
}]);





   
