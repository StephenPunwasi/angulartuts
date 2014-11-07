var aboutApp = angular.module('aboutApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider){
      //HOMEPAGE
      $routeProvider.when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
      })

      //ABOUT PAGE
      $routeProvider.when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutController'
      })

      $routeProvider.when('/contact', {
          templateUrl : 'pages/contact.html',
          controller  : 'contactController'
      });

      $routeProvider.otherwise({
        redirectTo    : '/'
      });

      $locationProvider.html5Mode(true);
});

aboutApp.controller('mainController', function($scope){
  $scope.message = 'It Works!';
});

aboutApp.controller('aboutController', function($scope){
  $scope.message = "I'm the about page!";
});

aboutApp.controller('contactController', function($scope){
  $scope.message = "I'm the contact page";
});
