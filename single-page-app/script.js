var aboutApp = angular.module('aboutApp', ['ngRoute']);

aboutApp.controller('mainController', function($scope){
    $routeProvider

      //HOMEPAGE
      .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
      })

      //ABOUT PAGE
      .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutController'
      })

      .when('/contact', {
          templateUrl : 'pages/contact.html',
          controller  : 'contactController'
      });
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
