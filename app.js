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
      });

        $urlRouterProvider.otherwise('welcome');

});
