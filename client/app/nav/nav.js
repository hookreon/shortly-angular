angular.module('shortly.nav',[])

.controller('NavController', function($scope, Auth){
  angular.extend($scope, Auth);
})
