(function() {
  this.MarkdownEditor = angular.module('markdownEditor', []);

}).call(this);

(function() {
  this.MarkdownEditor.factory("MarkdownConverter", function() {
    return {
      convert: function(input) {
        return markdown.toHTML(input);
      }
    };
  });

}).call(this);

(function() {
  this.MarkdownEditor.controller("MainCtrl", [
    '$scope', '$sce', 'MarkdownConverter', function($scope, $sce, MarkdownConverter) {
      var converted;
      converted = MarkdownConverter.convert($scope.input);
      return $scope.input = $sce.trustAsHtml(converted);
    }
  ]);

}).call(this);
