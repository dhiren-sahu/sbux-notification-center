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
        when('/real-time-messaage', {
            template: '<real-time-messaage></real-time-messaage>'
        }).
        when('/send-sms', {
            template: '<send-sms></send-sms>'
        }).
        when('/send-notification', {
            template: '<send-notification></send-notification>'
        }).
        when('/send-wechat', {
            template: '<send-wechat></send-wechat>'
        }).
        when('/send-email', {
            template: '<send-email></send-email>'
        }).
        when('/send-edm', {
            template: '<send-edm></send-edm>'
        }).
        when('/schedule', {
            template: '<schedule></schedule>'
        }).
        when('/monitor', {
            template: '<monitor></monitor>'
        }).
        when('/report', {
            template: '<report></report>'
        }).
        when('/cost', {
            template: '<role-management></role-management>'
        }).
        when('/data-statistics', {
            template: '<data-statistics></data-statistics>'
        }).
        when('/detail-query', {
            template: '<detail-query></detail-query>'
        }).
        when('/dimension-analysis', {
            template: '<dimension-analysis></dimension-analysis>'
        }).
        when('/internal-application', {
            template: '<internal-application></internal-application>'
        }).
        when('/3rd-gateway', {
            template: '<3rd-gateway></3rd-gateway>'
        }).
        when('/filter-configuration', {
            template: '<filter-configuration></filter-configuration>'
        }).
        when('/template-management', {
            template: '<template-management></template-management>'
        }).
        when('/sms', {
            template: '<sms></sms>'
        }).
        when('/notification', {
            template: '<notification></notification>'
        }).
        when('/wechat', {
            template: '<wechat></wechat>'
        }).
        when('/email', {
            template: '<email></email>'
        }).
        when('/edm', {
            template: '<edm></edm>'
        }).
        when('/user-management', {
            template: '<user-management></user-management>'
        }).
        when('/role-management', {
            template: '<role-management></role-management>'
        }).
        when('/account-management', {
            template: '<account-management></account-management>'
        }).
        when('/system-configuration', {
            template: '<system-configuration></system-configuration>'
        }).
        when('/system-parameters', {
            template: '<system-parameters></system-parameters>'
        }).
        when('/system-warning', {
            template: '<system-warning></system-warning>'
        }).
        when('/system-log', {
            template: '<system-log></system-log>'
        }).
        otherwise('/home');
    }
]);
