//Write a controller with and HTTP Request to the commerce tools platform
var projectKey = "down-under";
var token = "yKH8OyILZZZaCkrzdLOjV-_6XGIgDn1Z";
var baseUrl = "https://api.sphere.io/${projectKey}";
var tokenHeader = "Authorization: Bearer ${token}";

DownUnder.controller('MainController', ['$http', '$location', '$scope', function($http, $location, $scope) {
          console.log('MainController ran');
          $http.get('https://api.sphere.io/down-under/products?token=',
          {headers: { Authorization: 'Bearer yKH8OyILZZZaCkrzdLOjV-_6XGIgDn1Z'}})
          .then(function successCallback(response){
            $scope.products = response.data.results;
            console.log(response);
            console.log($scope.products);

                    $scope.saveID = function () {
                    localStorage.setItem('productID', this.product.id);
                    $location.path('/details');
                }


          });
    }]);

    // var identify = angular.module("identify", ['ngStorage']);
    //
    // identity.controller("IdentifierController", function($scope, $localStorage) {
    //
    //     // save id to local storage with ng-click function
    //
    // });
        //     $scope.details = function(productId) {
        //     console.log("product ID function is running");
        //     this.$scope.products = productId;
        //     console.log(productID);
        //
        //     localStorage.setItem('theEventID', productID);
        //     $location.path('/details');
        //   };

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
