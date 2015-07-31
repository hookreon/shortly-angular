angular.module('shortly.links', ['ngFx'])

.controller('LinksController',
  function ($scope, $location, Links, Auth) {
    angular.extend($scope, Links, Auth);
    $scope.getLinks()
 })
.directive('linkView', function(){
  return {
    restrict: 'EA',
    templateUrl: 'app/links/link.html',
  }
});
