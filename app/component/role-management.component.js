/**
 * Created by dhiren.sahu on 02-01-2017.
 */
'use strict';

// Register `tdb` component, along with its associated controller and template
angular.
module('emptyProject').
component('roleManagement', {
    templateUrl: 'view/role-management.html',
    controller: function roleManagementController() {
    this.message="i am role Management";
    }

});