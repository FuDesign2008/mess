# The Controller


@MarkdownEditor.controller "MainCtrl", ['$scope', '$sce',
'MarkdownConverter'
    ($scope, $sce, MarkdownConverter) ->
        converted = MarkdownConverter.convert($scope.input)
        $scope.input = $sce.trustAsHtml(converted)
]


