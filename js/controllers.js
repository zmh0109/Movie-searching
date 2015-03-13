

var imdbControllers = angular.module('imdbControllers', []);

imdbControllers.controller('imdbListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('data/imdb250.json').success(function(data) {
            $scope.movies = data;
        });
        $scope.orderProp = 'rank';
        $scope.query = '';
        $scope.reverse = false;

    }]);

imdbControllers.controller('imdbGalleryCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('data/imdb250.json').success(function(data) {
            $scope.movies = data;
        });
        $scope.orderProp = 'rank';
        $scope.genre = 'All';

        $scope.selectMovies = function(genre){
            var temp = [];
            if (genre == 'All') {
                return $scope.movies;
            }
            for(var entry in $scope.movies){
                for(var i=0; i<$scope.movies[entry].genre.length; i++){
                    if(genre == $scope.movies[entry].genre[i]){
                        temp.push($scope.movies[entry]);
                        break;
                    }
                }
            }
            return temp;
        };


    }]);


imdbControllers.controller('imdbDetailCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams){

        $scope.rank = $routeParams.movieRank;
        if ($scope.rank < 1) {
            $scope.rank = 250;
        }
        if ($scope.rank > 250) {
            $scope.rank = 1;
        }
        $http.get('data/imdb250.json').success(function(data){
            $scope.movies = data;
            for(var entry in $scope.movies){
                if($scope.movies[entry].rank == $scope.rank){
                    $scope.movie = $scope.movies[entry];
                    break;
                }
            }
        });
    }]);





