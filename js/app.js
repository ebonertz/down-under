var DownUnder = angular.module("DownUnder", ['ngRoute']);

DownUnder.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'list.html',
      controller: 'MainController'
    })
    .when('/cart', {
      templateUrl: 'admin.html',
      controller: 'CartController'
    })
    .when('/details', {
      templateUrl: 'details.html',
      controller: 'DetailsController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
