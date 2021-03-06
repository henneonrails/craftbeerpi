angular.module('craftbeerpi.about', []).controller('AboutController', function($scope, $location, CBPSteps, CBPKettle, CBPHardware, ChartFactory, CBPSwitch, CBPConfig, InfoMessage, $uibModal, ws, $timeout, $window) {

  $scope.confirmHalt = function(item) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/base/static/partials/about/confirm_halt.html',
      controller: 'HaltConfirmController',
      size: "sm",
      resolve: {
      }
    });

    modalInstance.result.then(function(target_temp) {
      console.log("OK");
      $window.location.href = '/halt';
    }, function() {
      console.log("dismiss");
    });
  };

}).controller('HaltConfirmController', function($scope, $uibModalInstance) {

  $scope.ok = function() {
    $uibModalInstance.close($scope.target_temp);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
