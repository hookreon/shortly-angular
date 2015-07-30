angular.module('shortly.links', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider
    .when('/links', {
      templateUrl: 'app/links/links.html',
      controller: 'LinksController',
      authenticate: true
    })
})
.controller('LinksController', function ($scope, Links, Auth) {
  angular.extend($scope, Links, Auth);
  $scope.getLinks();
})
.factory('Links', function($http){
  var data = {};
  var getLinks = function getLinks () {
    // $http call to backend
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function(resp){
      console.log(resp.data);
      data.links = resp.data;
    });
  };

  return {
    data: data,
    getLinks: getLinks
  }
});
