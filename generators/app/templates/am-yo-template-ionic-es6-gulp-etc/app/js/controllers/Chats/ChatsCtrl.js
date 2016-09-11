/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';
function ChatsCtrl($scope, chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = chats.all();
  $scope.remove = function(chat) {
    chats.remove(chat);
  };
}

ChatsCtrl.$inject = ["$scope", "chats"];


export default {
  name: 'ChatsCtrl',
  fn: ChatsCtrl
}
