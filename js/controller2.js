var projectKey = "down-under";
var token = "aFgroaXhmKXnrv8Zgc-78CaGey0dHqlk";
var baseUrl = "https://api.sphere.io/${projectKey}";
var tokenHeader = "Authorization: Bearer ${token}";

var req = {
 method: 'GET',
 url: 'https://api.sphere.io/down-under/products',
 headers:
 {
   'Authorization: Bearer aFgroaXhmKXnrv8Zgc-78CaGey0dHqlk'
}

};

$http(req).then(function(){
    console.log(response);
 } , function(){
     console.log(data);
 });
