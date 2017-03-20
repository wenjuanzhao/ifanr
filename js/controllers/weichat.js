
app.controller('weichatCtrl',['$scope','weichats',function ($scope,weichats) {
    weichats.all().then(function (weis) {
        $scope.weichats=weis;
    })

}])