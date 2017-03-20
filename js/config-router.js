'use strict';
angular.module('app')
    .run(
        [          '$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(['$stateProvider','$urlRouterProvider',
        function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/index');
    $stateProvider.state('app',{
        abstract:true,
        url:'/app',
        templateUrl:"tpls/app.html"
    })
        .state('app.index',{
            url:'/index',
            templateUrl:"tpls/index.html",
        })
        .state('app.weichat',{
        url:'/weichat',
        resolve:{
            deps:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load(['js/controllers/weichat_ser.js','js/controllers/weichat.js'])
            }]
        },
        templateUrl:"tpls/weichat.html",
    })
}])