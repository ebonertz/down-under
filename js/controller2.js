var projectKey = "down-under";
var token = "d6D9E6-93NqAiEe9nRFb2e0Ie9KaFmD2";
var baseUrl = "https://api.sphere.io/${projectKey}";
var tokenHeader = "Authorization: Bearer ${token}";
theProductId = localStorage.getItem('productID');


DownUnder.controller('DetailsController', ['$http', '$location', '$scope', '$route', function($http, $location, $scope, $route) {
          console.log('DetailsController ran');
          console.log(theProductId);
          var theProductId = localStorage.getItem('productID');
       $http.get('https://api.sphere.io/down-under/products/' + theProductId + '/?token=',
          {headers: { Authorization: 'Bearer d6D9E6-93NqAiEe9nRFb2e0Ie9KaFmD2'}})
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
