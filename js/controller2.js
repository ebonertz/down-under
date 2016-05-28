var projectKey = "down-under";
var token = "aFgroaXhmKXnrv8Zgc-78CaGey0dHqlk";
var baseUrl = "https://api.sphere.io/${projectKey}";
var tokenHeader = "Authorization: Bearer ${token}";


DownUnder.controller('DetailsController', ['$http', '$scope', function($http, $scope) {
          console.log('DetailsController ran');
          var productID = localStorage.getItem('ID');

          $http.get('https://api.sphere.io/down-under/products/49a54e18-a3be-4384-a97e-f213da37c1a7/?token=',
          {headers: { Authorization: 'Bearer aFgroaXhmKXnrv8Zgc-78CaGey0dHqlk'}})
          .then(function successCallback(response){
            $scope.products = response.data;
            console.log(response);
            console.log($scope.products);

          });
    }]);
