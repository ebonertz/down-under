var DownUnder = angular.module("DownUnder", ['ngRoute']);

DownUnder.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/index.html',
      controller: 'MainController'
    })
    .when('/details', {
      templateUrl: 'views/details.html',
      controller: 'DetailsController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
