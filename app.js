	var appMod = angular.module('app',[]); //Module Defined with DI
	appMod.controller('appController',['$scope',function($scope){ //Contoller with the DI
		/*Controller code*/
		$scope.name = 'Vijay';
	}]);