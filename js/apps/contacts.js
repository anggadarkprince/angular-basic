/**
 * Created by Angga on 1/3/2016.
 */
var app = angular.module('MyAngular', ['ngRoute']);

app.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/contact/:index', {
            // edit contact
            templateUrl: 'contact_edit.html',
            controller: 'Edit'
        })
        .when('/add', {
            // add contact
            templateUrl: 'contact_edit.html',
            controller: 'Add'
        })
        .when('/delete/:index', {
            // add contact
            templateUrl: 'contact_edit.html',
            controller: 'Delete'
        })
        .when('/', {
            // list all contacts
            templateUrl: 'contact_list.html'
        });
});

app.controller('Contacts', function($scope){
    // contacts is the parent controller, so $scope.contacts is available in all children
    $scope.contacts = [
        {name: "Tom Ricky", number: 8374639},
        {name: "Jeffrey Way", number: 45634733},
        {name: "Dan Ani", number: 4753465},
        {name: "Angga Ari", number: 3475434}
    ];
});

app.controller('Edit', function($scope, $routeParams){
    // load in a contact from the route (/contact/:index)
    $scope.mode = "Edit";
    $scope.contact_inject = $scope.contacts[$routeParams.index];
    $scope.index = $routeParams.index;
});

app.controller('Add', function($scope, $routeParams){
    var length = $scope.contacts.push({
        name: 'New contact',
        number: '085-'
    });
    $scope.mode = "Add";
    $scope.contact_inject = $scope.contacts[length - 1];
    $scope.index = length - 1;
});

app.controller('Delete', function($scope, $routeParams, $location){
    $scope.contacts.splice($routeParams.index, 1);
    $location.path('/').replace();
});