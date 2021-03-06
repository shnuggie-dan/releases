/* global window: false */
(function(angular) {
    "use strict";
    var app = angular.module(
        'releaseApp',
        [
            'releaseApp.config',
            'releaseApp.controllers',
            'releaseApp.services',
            'ngRoute',
            'ngMessages',
            'firebase',
        ]
    );
})(window.angular);
