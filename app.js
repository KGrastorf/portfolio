angular.module("kevApp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state("home", {
        url: "/home",
        templateUrl: "./public/home.html"
      })
    .state("welcome", {
        url: "/welcome",
        templateUrl: "./public/welcome.html"
        })
    .state("story", {
        url: "/story",
        templateUrl: "./public/story.html"
        })
    .state("skills", {
        url: "/skills",
        templateUrl: "./public/skills.html"
        })
    .state("school", {
        url: "/school",
        templateUrl: "./public/school.html"
        })
    .state("projects", {
        url: "/projects",
        templateUrl: "./public/projects.html"
        });

        $urlRouterProvider.otherwise('welcome');

});
