/**
 * Created by dhiren.sahu on 02-01-2017.
 */
'use strict';

angular.
module('emptyProject').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/home', {
            template: '<home></home>'
        }).
        when('/role-management', {
            template: '<role-management></role-management>'
        }).
        otherwise('/home');
    }
]);
