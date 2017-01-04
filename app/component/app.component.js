/**
 * Created by dhiren.sahu on 02-01-2017.
 */
'use strict';

// Register `app` component, along with its associated controller and template
angular.
module('emptyProject').
component('app', {
    templateUrl: 'view/app.html',
    controller: function AppController() {
        this.message ="Home";

        }
});
