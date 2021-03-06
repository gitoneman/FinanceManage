'use strict';


// Declare app level module which depends on filters, and services
angular.module('FinanceManage', [
  'ngRoute',
  'FinanceManage.filters',
  'FinanceManage.services',
  'FinanceManage.directives',
  'FinanceManage.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'newEventCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
