var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'countryList.tpl.html',
            controller: 'CountryListCtrl'
        }).
        when('/country/:countryName', {
            templateUrl: 'countryDetail.tpl.html',
            controller: 'CountryDetailCtrl'
        }).
        when('/about', {
            templateUrl: 'about.tpl.html'
        }).
        when('/contact', {
            templateUrl: 'contact.tpl.html'
        }).
        otherwise({
            redirectTo: '/'
        });
});

countryApp.controller('CountryListCtrl', function ($scope, $http) {
    $http.get('countries.json').success(function (data) {
        $scope.countries = data;
    });
});

countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams) {
    $scope.countryName = $routeParams.countryName;
});