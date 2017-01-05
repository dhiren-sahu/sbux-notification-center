/**
 * Created by dhiren.sahu on 02-01-2017.
 */
'use strict';

// Register `tdb` component, along with its associated controller and template
angular.
module('emptyProject').
component('sendSms', {
    templateUrl: 'view/send-sms.html',
    controller: function sendSmsController() {
    this.message="i am send sms";
    }

});