/**
 * Created by Angga on 1/5/2016.
 */
var app = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'artistController',
    'detailController'
]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListController'
        })
        .when('/detail/:itemId', {
            templateUrl: 'partials/detail.html',
            controller: 'DetailController'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);