//Write a controller with and HTTP Request to the commerce tools platform

var projectKey = "down-under";
var token = "aFgroaXhmKXnrv8Zgc-78CaGey0dHqlk";
var baseUrl = "https://api.sphere.io/${projectKey}";
var tokenHeader = "Authorization: Bearer ${token}";


DownUnder.controller('MainController', ['$http', '$scope', function($http, $scope) {
        var store = this;


          console.log('MainController ran');
          $http.get('https://api.sphere.io/down-under/products?token=',
          {headers: { Authorization: 'Bearer aFgroaXhmKXnrv8Zgc-78CaGey0dHqlk'}})
          .then(function successCallback(response){
            $scope.products = response.data.results;
            console.log(response);
            console.log($scope.products);

          });
    }]);

//last attemp {headers: {token }}

// THIS IS THE CONTROLLER for a specific product details
// DownUnder.controller('DetailsController', ['$http', '$scope', function($http, $scope) {
//
//     $http.get('sample.json').success(function(data){
//       console.log("details have been populated");
//       $scope.products = data.products[0];
//     });
//  }]);

//Parse data and use ng-repeat to display to the page
// Test deployment of app to Heroku and get direct link
// Create a new view for Product Details page
