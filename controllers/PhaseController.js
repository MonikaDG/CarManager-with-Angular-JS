

	carManager.controller('PhaseController', function($scope) {

		$scope.carsString = localStorage.getItem("cars");
		$scope.cars = JSON.parse($scope.carsString);
		if(!$scope.cars) {
				$scope.cars = {carNames:{} , carInfos: {}};
		}


			$scope.myVar1=false;
			$scope.myVar2=false;
			$scope.myVar3=false;
			$scope.myVar4=false;
			$scope.index=localStorage.getItem("indexButton");

				$scope.load=function() {
				$scope.carsString = localStorage.getItem("cars");
				$scope.cars = JSON.parse($scope.carsString);
				$scope.name=$scope.cars.car2[$scope.index];
			
				$scope.temp=$scope.cars.carNames[$scope.name].phase;
		
				if($scope.temp=="phase1") {
					$scope.showForm1();
				}
				if($scope.temp=="phase2") {
					$scope.showForm2();
				}
				if($scope.temp=="phase3") {
					$scope.showForm3();
				}
				if($scope.temp=="phase4") {
					$scope.showForm4();
				}
					
				}

				$scope.close=function() {
					window.location.href="#home";
				}

				



				$scope.getCarInfo=function() {
					$scope.carsString = localStorage.getItem("cars");
					$scope.cars = JSON.parse($scope.carsString);
					if(!$scope.cars) {
						$scope.cars = {carNames: [], carInfos: {}};
					}
				
					$scope.carInfo={};

					$scope.carInfo.name=$scope.cars.carInfos[$scope.name].name;
					$scope.carInfo.image=$scope.cars.carInfos[$scope.name].image;
					$scope.carInfo.mileage=$scope.cars.carInfos[$scope.name].mileage;
					$scope.carInfo.seats=$scope.cars.carInfos[$scope.name].seats;
					$scope.carInfo.description=$scope.cars.carInfos[$scope.name].description;
					$scope.carInfo.wheels=$scope.cars.carInfos[$scope.name].wheels;
					$scope.carInfo.colour=$scope.cars.carInfos[$scope.name].colour;
					$scope.carInfo.capacity=$scope.cars.carInfos[$scope.name].capacity;
					$scope.carInfo.bodyType=$scope.cars.carInfos[$scope.name].bodyType;
					$scope.carInfo.fuelType=$scope.cars.carInfos[$scope.name].fuelType;
					$scope.carInfo.fuelConsumption=$scope.cars.carInfos[$scope.name].fuelConsumption;
				
				}
				

			$scope.saveForm1=function() {
				$scope.mileageVar = $scope.seatsVar= $scope.descVar=false;
				$scope.carsString = localStorage.getItem("cars");
				$scope.cars = JSON.parse($scope.carsString);
				if(!$scope.cars) {
					$scope.cars = {carNames: [], carInfos: {}};
				}
				
				$scope.carInfo={};
				$scope.carNames={};
				$scope.carNames.name=$scope.name;
				$scope.carNames.phase="phase2";
				$scope.carInfo.image=localStorage.getItem("sharu");
				$scope.carInfo.name=$scope.name;
				$scope.carInfo.mileage=$scope.mileage;
				
				$scope.carInfo.seats=$scope.seats;
				$scope.carInfo.description=$scope.description;
				$scope.carInfo.btn=localStorage.getItem("indexButton");
				
				$scope.cars.carInfos[$scope.name] = $scope.carInfo;
				$scope.cars.carNames[$scope.name] = $scope.carNames;

			
				

				if($scope.mileage==null) {
					$scope.mileageVar=true;
				}
				if($scope.seats==null) {
					$scope.seatsVar=true;
				}
				if($scope.description==null) {
					$scope.descVar=true;
				}
				if($scope.name==null) {
					$scope.nameVar=true;
				}
				if($scope.mileage != null && $scope.seats!=null && $scope.description!=null ) {
					localStorage.setItem("cars",JSON.stringify($scope.cars));
					$scope.showForm2();
				}
				
				
			}


			$scope.saveForm2=function() {
				$scope.colourVar = $scope.powerVar= $scope.weightVar=false;

				$scope.getCarInfo();
				$scope.carNames={};
				$scope.carNames.name=$scope.name;
				$scope.carNames.phase="phase3";
				$scope.carInfo.wheels=$scope.wheels;
				$scope.carInfo.colour=$scope.colour;
				$scope.carInfo.capacity=$scope.capacity;
				$scope.cars.carInfos[$scope.name] = $scope.carInfo;
				$scope.cars.carNames[$scope.name] = $scope.carNames;


				if($scope.wheels==null) {
					$scope.weightVar=true;
				}
				if($scope.capacity==null) {
					$scope.powerVar=true;
				}
				if($scope.colour==null) {
					$scope.colourVar=true;
				}
				if($scope.name==null) {
					$scope.nameVar=true;
				}
				if($scope.wheels != null && $scope.capacity!=null && $scope.colour!=null ) {
					localStorage.setItem("cars",JSON.stringify($scope.cars));
					$scope.showForm3();
				}
				


				
			}


				$scope.saveForm3=function() {
					$scope.bodyVar = $scope.fuelVar= $scope.consumptionVar=false;

				$scope.getCarInfo();
				$scope.carNames={};
				$scope.carNames.name=$scope.name;
				$scope.carNames.phase="phase4";
				$scope.carInfo.bodyType=$scope.bodyType;
				$scope.carInfo.fuelType=$scope.fuelType;
				$scope.carInfo.fuelConsumption=$scope.fuelConsumption;
				
				
				$scope.cars.carInfos[$scope.name] = $scope.carInfo;
				$scope.cars.carNames[$scope.name] = $scope.carNames;

				if($scope.bodyType==null) {
					$scope.bodyVar=true;
				}
				if($scope.fuelType==null) {
					$scope.fuelVar=true;
				}
				if($scope.fuelConsumption==null) {
					$scope.consumptionVar=true;
				}
				if($scope.name==null) {
					$scope.nameVar=true;
				}
				if($scope.bodyType != null && $scope.fuelType!=null && $scope.fuelConsumption!=null ) {
					localStorage.setItem("cars",JSON.stringify($scope.cars));
					$scope.showForm4();
				}
				
				
			}



			$scope.saveForm4=function() {
	
			
				
				$scope.getCarInfo();
				$scope.carNames={};
				$scope.carNames.name=$scope.name;
				$scope.carNames.phase="Done";
				
				//$scope.carInfo.name=$scope.cars.carInfos[$scope.name].name;
			
			
				
				$scope.carInfo.jan=$scope.jan;
				$scope.carInfo.feb=$scope.feb;
				$scope.carInfo.mar=$scope.mar;
				$scope.carInfo.apr=$scope.apr;
				$scope.carInfo.may=$scope.may;
				$scope.carInfo.jun=$scope.jun;
				$scope.carInfo.jul=$scope.jul;
				$scope.carInfo.aug=$scope.aug;
				$scope.carInfo.sep=$scope.sep;
				$scope.carInfo.oct=$scope.oct;
				$scope.carInfo.nov=$scope.nov;
				$scope.carInfo.dec=$scope.dec;
				
				
				$scope.cars.carInfos[$scope.name] = $scope.carInfo;
				$scope.cars.carNames[$scope.name] = $scope.carNames;


				localStorage.setItem("cars",JSON.stringify($scope.cars));

				window.location.href="#home";
				
			}


			$scope.showForm1=function() {
				$scope.val1=true;
				$scope.val2=false;
				$scope.val3=false;
				$scope.val4=false;
				$scope.myVar2=false;
				$scope.myVar3=false;
				$scope.myVar4=false;
				$scope.myVar1=true;
			
			}

			$scope.showForm2=function() {
				$scope.val2=true;
				$scope.val1=false;
				$scope.val3=false;
				$scope.val4=false;
				$scope.myVar1=false;
				$scope.myVar3=false;
				$scope.myVar4=false;
				$scope.myVar2=true;
			
			}

			$scope.showForm3=function() {
				$scope.val3=true;
				$scope.val2=false;
				$scope.val1=false;
				$scope.val4=false;
				$scope.myVar2=false;
				$scope.myVar1=false;
				$scope.myVar4=false;
				$scope.myVar3=true;
			
			}

			$scope.showForm4=function() {
				$scope.val4=true;
				$scope.val2=false;
				$scope.val3=false;
				$scope.val1=false;
				$scope.myVar2=false;
				$scope.myVar3=false;
				$scope.myVar1=false;
				$scope.myVar4=true;
			
			}
			
			
						
			
			
		
});


	
	