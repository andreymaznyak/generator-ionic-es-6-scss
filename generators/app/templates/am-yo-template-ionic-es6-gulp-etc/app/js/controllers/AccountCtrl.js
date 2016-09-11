/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';

function AccountCtrl($scope) {
  $scope.settings = {
    enableFriends: true
  };
}

AccountCtrl.$inject = ["$scope"];


export default {
  name: 'AccountCtrl',
  fn: AccountCtrl
}
