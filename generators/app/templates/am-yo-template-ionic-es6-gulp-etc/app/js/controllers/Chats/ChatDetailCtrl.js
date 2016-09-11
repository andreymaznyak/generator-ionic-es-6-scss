/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';
function ChatsDetailCtrl($scope, $stateParams, chats) {

  $scope.chat = chats.get($stateParams.chatId);

}

ChatsDetailCtrl.$inject = ["$scope", "$stateParams", "chats"];


export default {
  name: 'ChatsDetailCtrl',
  fn: ChatsDetailCtrl
}
