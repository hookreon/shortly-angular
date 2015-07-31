angular.module('shortly.services', [])

.factory('Links', function($http, $window, $location){
  var data = {};

  var getLinks = function () {
    // $http call to backend
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function(resp){
      data.links = resp.data;
    });
  };

  // var setRedirect = function(path){
  //   data.links.forEach(function(link){
  //     console.log('checking', path);
  //     if('/'+link.code === path){
  //       console.log('get on with it');
  //       $window.open('/api/links/' + link.code);
  //     }
  //   });
  //   $location.path('/links');
  // };

  return {
    data: data,
    getLinks: getLinks,
    // setRedirect: setRedirect
  }
})

.factory('Shorten', function($http, $location){
  var link = {};
  var addLink = function(url){
    console.log('addLink', url);
    return $http({
      method: 'POST',
      url: '/api/links',
      data: JSON.stringify({url:url})
    })
    .then(function(resp){
      $location.path('/links');
    })
  }
  return {
    link: link,
    addLink: addLink
  }
})

.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
})
.directive('navView', function(){
  return {
    restrict: 'EA',
    templateUrl: 'app/nav/nav.html',
    replace: true,
  };
})
;
