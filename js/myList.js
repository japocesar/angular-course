angular.module("courseTest", [])
	.controller("testController", function($scope){
		$scope.myList = [
			{name:'Cesar',age:27},
			{name:'Sofia',age:16},
			{name:'Silvia',age:51},
			{name:'Ruben',age:52},
			{name:'Norma',age:36},
			{name:'Sergio',age:32}
		];
		$scope.addPerson = function(){
			$scope.myList.push({name: $scope.name, age: $scope.age});
			$scope.name='';
			$scope.age=0;
		}
	});