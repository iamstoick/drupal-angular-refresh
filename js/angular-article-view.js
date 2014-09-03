var articles = angular.module('articles', ['datarefresh']);
// Bootstrap the Angular the all-articles.tpl.php get loaded.

(function ($) {

  Drupal.behaviors.angular_view = {
    // This behavior function is called when new element is being added.
    attach: function (context, settings) {
      //angular.bootstrap($('#article', context), ['articles']);
    }
  };

})(jQuery);

articles.controller('BodyController', [function () { }]);
articles.controller('articlecontroller', ['$scope', '$http', function($scope, $http) {
  // $scope.foobar = 'Ang mga pusa na lumalaki.';
  //$http.get('/nodes/json').success(function(result) {
  //  // $scope.articles = result;
  //  $scope.articles = (function () {
  //    return result.nodes;
  //  })();
  //});
}]);
