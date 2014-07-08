angular.module('phoneapp', ['ngRoute','phoneFilters']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/list', {templateUrl: '/tpl/list.tpl',   controller: phoneList}).
      when('/detail/:phoneId', {templateUrl: '/tpl/detail.tpl', controller: phoneDetail}).
      otherwise({redirectTo: '/list'});
}]);

 angular.module('phoneFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});