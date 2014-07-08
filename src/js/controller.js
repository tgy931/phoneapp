var phoneList = ["$scope", "$http", "$routeParams",function($scope, $http, $routeParams){
	$scope.title = "我的angular";
	$http.get("/data/phone.json").success(function(data){
		$scope.phones = data;
		$scope.setTitle = function(title){
			$scope.title = title;
		}
	});
}];

var phoneDetail = ["$scope", "$http","$routeParams",function($scope, $http, $routeParams){
	$http.get("/data/phonedetail.json").success(function(data){
		$scope.phone = data;
	});
}];