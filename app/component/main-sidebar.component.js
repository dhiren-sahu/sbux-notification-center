/**
 * Created by dhiren.sahu on 02-01-2017.
 */
'use strict';

// Register `tdb` component, along with its associated controller and template
angular.
module('emptyProject').
component('mainSidebar', {
    templateUrl: 'view/main-sidebar.html',
    controller: ['$http', function mainSidebarController($http) {
        var self = this;

        $http.get('data/menu.json').then(function(response) {
            self.sideMenu = response.data;
            console.log("response.data: ",response.data);
        });
        this.menu = "home";
    }
    ]
});