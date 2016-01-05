/**
 * Created by Angga on 1/5/2016.
 */
var app = angular.module('myApp', [
    'ngRoute',
    'artistController'
]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListController'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);