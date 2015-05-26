carManager.controller('HomeController', function($scope) {
			$scope.disVar=true;
			$scope.searchVar=$scope.notFound=$scope.enterCar=$scope.msgVar=$scope.listVar=false;
			
			$scope.carsString = localStorage.getItem("cars");
			$scope.cars = JSON.parse($scope.carsString);
			if(!$scope.cars) {
				$scope.cars = {car2:[],carNames: {}, carInfos: {}};
			}

			$scope.list=function() {
				if($scope.searchInput!="")
						$scope.listVar=true;
				else
						$scope.listVar=false;
			}

			$scope.searchFilter = function (cars) {
       				 var re = new RegExp($scope.searchInput, 'i');
        				return !$scope.searchInput || re.test(cars);
   			}

			$scope.disInfo=function() {
				$scope.disVar=false;
			}
			
			$scope.addCar=function(index) {
				$scope.msgVar=false;
				if($scope.carName==null) {
					$scope.enterCar=true;
				}
				else {
					$scope.enterCar=false;
					$scope.carNames={};
					$scope.carNames.name=$scope.carName;
					$scope.carNames.phase="phase1";
					$scope.cars.car2.push($scope.carName);
					$scope.cars.carNames[$scope.carName] = $scope.carNames;
					localStorage.setItem("cars",JSON.stringify($scope.cars));
				}
			}

			$scope.form1=function(index) {
					localStorage.setItem("indexButton",index);
					window.location.href="#Phases";
			}

			$scope.searchCar=function() {
				if($scope.searchInput==null) {
					alert("please enter name of car");
				}
				else {
					$scope.carInfo=$scope.cars.carInfos[$scope.searchInput];
						if($scope.carInfo!=undefined) {	
							$scope.searchVar=true;	
							$scope.notFound=false;
						}
						else {
							$scope.searchVar=false;
							$scope.notFound=true;				
						}					
				}
			}
	});

	