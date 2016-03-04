app.controller('MainController', ['$scope', function($scope) {
	$scope.shoplist=["Meat", "Bread", "Apple"];
	
	$scope.addItem = function(item){
		$scope.shoplist.push($scope.newItem);
		$scope.newItem="";
	};
	
	$scope.removeItem = function(item){
		$scope.shoplist.splice(item, 1);
	};
	
}]);