var offerApp = angular.module('offerApp', ['ui.router']);

offerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        })

        // nested list with custom controller
        .state('old', {
            url: '/old',
            templateUrl: 'views/oldAge.html'
        })

        // nested list with just some random string data
        .state('mid', {
            url: '/mid',
            templateUrl: 'views/middleAge.html'
        })
        .state('teen', {
            url: '/teen',
            templateUrl: 'views/teenager.html'
        })

});
