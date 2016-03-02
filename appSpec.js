describe('appController test',function(){
	var scope=null;
	var controller = null;
	//All the module are injected here
	beforeEach(function(){
		module('app');
	});
	beforeEach(inject(function($rootScope,$controller){
		scope= $rootScope.$new();
		controller = $controller('appController',{'$scope':scope});
	}));
	//Code to Each test case description
	describe('Check scope',function(){
		it('Name should not be empty',function(){
			expect(scope.name).not.toBe(undefined);
		});
	});
});