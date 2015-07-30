angular.module('shortly.shorten', ['ngRoute'])


.config(function($routeProvider){
  $routeProvider
    .when('/shorten', {
      templateUrl: 'app/shorten/shorten.html',
      controller: 'ShortenController',
      authenticate: true
    })
})
.controller('ShortenController', function ($scope, $location, Shorten, Auth) {
  angular.extend($scope, Shorten, Auth);
})
.factory('Shorten', function($http, $location){
  var link = {};
  var addLink = function(url){
    return $http({
      method: 'POST',
      url: '/api/links',
      data: JSON.stringify({url:url})
    })
    .then(function(resp){
      $location.path('/');
    })
  }
  return {
    link: link,
    addLink: addLink
  }
});
