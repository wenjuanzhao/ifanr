app.controller('lunbo',["$scope","$interval",function ($scope,$interval) {
    $scope.lunbo=[true,false,false];
    $scope.numbers=[0,1,2];
    $scope.selected=0
    var i=0;
    $interval(function () {
        angular.forEach($scope.lunbo,function (i,v) {
            $scope.lunbo[v]=false;
        })
    if(i==3){
       i=0;
   }$scope.lunbo[i]=true;
        $scope.selected=i;
    i++;
  },2000)
    $scope.lunbo_dong=function (index) {
        angular.forEach($scope.lunbo,function (i,v) {
            $scope.lunbo[v]=false;
        })
        i=index;
        $scope.lunbo[index]=true;
        $scope.selected=index;
    }
}])