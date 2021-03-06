(function () {
    'use strict';
    angular.module('app')
    .run( runApp );

    function runApp($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar (true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if( window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }
})();