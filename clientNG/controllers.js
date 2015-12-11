exports.EuromapsController = function ($scope, $routeParams, $http) {
  // var encoded = encodeURIComponent($routeParams.category);

  $scope.load = function () {

    $http.
    get('/api/v1/maps', {}).
    success(function (data) {
      console.log(data)
      $scope.euromaps = data.euromaps;
    });
  };

  $scope.load();

  setTimeout(function () {
    $scope.$emit('EuromapsController');
  }, 0);
};

exports.EventsController = function ($scope, $routeParams, $http) {
  // var encoded = encodeURIComponent($routeParams.category);

  $scope.load = function () {

    $http.
    get('/api/v1/events', {}).
    success(function (data) {
      console.log(data)
      $scope.events = data.events;
    });
  };

  $scope.load();

  setTimeout(function () {
    $scope.$emit('EventsController');
  }, 0);
};