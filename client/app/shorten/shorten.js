angular.module('shortly.shorten', [])
.controller('ShortenController', function ($scope, $location, Shorten, Auth) {
  angular.extend($scope, Shorten, Auth);
});
