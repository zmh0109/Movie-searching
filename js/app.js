

var imdbApp = angular.module('imdbApp', [
    'ngRoute',
    'imdbControllers'
]);

imdbApp.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
    });
});

imdbApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/list', {
                templateUrl: './partials/list.html',
                controller: 'imdbListCtrl'
            }).
            when('/details/:movieRank', {
                templateUrl: './partials/movie-detail.html',
                controller: 'imdbDetailCtrl'
            }).
            when('/gallery', {
                templateUrl: './partials/gallery.html',
                controller: 'imdbGalleryCtrl'
            }).
            otherwise({
                redirectTo: '/list'
            });
    }]);

