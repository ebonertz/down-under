var projectKey = "down-under";
var token = "lCeejUUWBx4wUinsLI481UVixnnFIA7v";
var baseUrl = "https://api.sphere.io/${projectKey}";
var tokenHeader = "Authorization: Bearer ${token}";
theProductId = localStorage.getItem('productID');


DownUnder.controller('DetailsController', ['$http', '$location', '$scope', '$route', function($http, $location, $scope, $route) {
          console.log('DetailsController ran');
          console.log(theProductId);
          var theProductId = localStorage.getItem('productID');
       $http.get('https://api.sphere.io/down-under/products/' + theProductId + '/?token=',
          {headers: { Authorization: 'Bearer lCeejUUWBx4wUinsLI481UVixnnFIA7v'}})
          .then(function successCallback(response){
            $scope.products = response.data;
            console.log(response);
            console.log($scope.products);

            $scope.clearID = function() {
                localStorage.setItem('productID', " ");
                $location.path('/#home');
            }

          });
    }]);
