//Write a controller with and HTTP Request to the commerce tools platform

var projectKey = "down-under";
var token = "0BkAlJGKXOxEtMq2nnPctPFTl1EtKPlG";
var baseUrl = "https://api.sphere.io/${projectKey}";
var tokenHeader = "Authorization: Bearer ${token}";


DownUnder.controller('MainController', ['$http', '$scope', function($http, $scope) {

  console.log('MainController ran');
  $http.get(tokenHeader + "https://api.sphere.io/down-under/products/").then(function JSON_CALLBACK(response){
    $scope.products = response.data;
    console.log(data);
  });
    }]);


// THIS IS THE CONTROLLER for a specific product
// DownUnder.controller('DetailsController', ['$http', '$scope', function($http, $scope) {
//
//     $http.get('sample.json').success(function(data){
//       console.log("details have been populated");
//       $scope.products = data.products[0];
//     });
//  }]);



// Reference Sweet Event Store and controller
// Research the SDK options with PHP and node.js
// Test deployment of app to Heroku and get direct link
// Add some more products
// Create a new view for Product Details page
// Test and validate HTTP request from sphere
// Install Docker for dependencies?
// Determine if OAuth is neccesary for this process
// Authentication and Access Keys
// Visit Iron Yard to get some help?
// We maintain a Git repository of code samples of how to authenticate to our API in various languages - Link on the HTTP Autho page
//Provide client ID and client secret

// POST https://{host}/oauth/token?grant_type=client_credentials&scope={scope}
// Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==

// Example Request
// $ curl https://auth.sphere.io/oauth/token -X POST \
// 	-H "Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==" \
// 	-d "grant_type=client_credentials&scope=manage_project:{projectKey}"

//
