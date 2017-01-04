/**
 * Created by dhiren.sahu on 02-01-2017.
 */
'use strict';

// Register `tdb` component, along with its associated controller and template
angular.
module('emptyProject').
component('home', {
    templateUrl: 'view/home.html',
    controller: function homeController() {
    this.message="i am home";
    }

});