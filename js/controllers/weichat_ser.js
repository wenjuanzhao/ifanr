app.factory('weichats',["$http",function ($http) {
    var path="js/controllers/weichat.json";

    var weichats=$http.get(path).then(function (resp) {
        return resp.data.weichats;
    })
    var factory={};
    factory.all=function () {
        return weichats;
    }
    return factory;
}])