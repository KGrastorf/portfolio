angular.module("kevApp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state("welcome", {
        url: "/welcome",
        templateUrl: "./public/welcome.html"
        })
    .state("skills", {
        url: "/skills",
        templateUrl: "./public/skills.html"
      })
      .state("inquiry", {
          url: "/inquiry",
          templateUrl: "./public/inquiry.html"
        });

        $urlRouterProvider.otherwise('welcome');

});
