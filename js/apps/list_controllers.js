var artist = angular.module('artistController', []);

artist.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('../../js/apps/data.json')
        .success(function (data) {
            $scope.artists = data;
            $scope.artistOrder = 'name';
        });
}]);

