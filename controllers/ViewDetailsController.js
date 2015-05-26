

carManager.controller('ViewDetailsController', function($scope) {

        $scope.carsString = localStorage.getItem("cars");
            $scope.cars = JSON.parse($scope.carsString);
			
            $scope.viewDetails=function() {

                if($scope.phase=="Phase1") {
                    $scope.carInfo=$scope.cars.carInfos[$scope.car];
                    $scope.phaseVar1=true;
                    $scope.phaseVar2=false;
                    $scope.phaseVar3=false;
                    $scope.phaseVar4=false;
                    
                }
                  if($scope.phase=="Phase2") {
                    alert($scope.car);
                    $scope.carInfo=$scope.cars.carInfos[$scope.car];
                    $scope.phaseVar2=true;
                    $scope.phaseVar1=false;
                    $scope.phaseVar3=false;
                    $scope.phaseVar4=false;
                            
                }

                    if($scope.phase=="Phase3") {
                    alert($scope.car);
                    $scope.carInfo=$scope.cars.carInfos[$scope.car];
                    $scope.phaseVar3=true;
                    $scope.phaseVar1=false;
                    $scope.phaseVar2=false;
                    $scope.phaseVar4=false;
                            
                }


            if($scope.phase=="Phase4") {
                $scope.phaseVar4=true;
                $scope.phaseVar1=false;
                $scope.phaseVar2=false;
                $scope.phaseVar3=false;
                    
                $scope.a=$scope.cars.carInfos[$scope.car].jan;
                $scope.b=$scope.cars.carInfos[$scope.car].feb;
                $scope.c=$scope.cars.carInfos[$scope.car].mar;
                $scope.d=$scope.cars.carInfos[$scope.car].apr;
                $scope.e=$scope.cars.carInfos[$scope.car].may;
                $scope.f=$scope.cars.carInfos[$scope.car].jun;
                $scope.g=$scope.cars.carInfos[$scope.car].jul;
                $scope.h=$scope.cars.carInfos[$scope.car].aug;
                $scope.i=$scope.cars.carInfos[$scope.car].sep;
                $scope.j=$scope.cars.carInfos[$scope.car].oct;
                $scope.k=$scope.cars.carInfos[$scope.car].nov;
                $scope.l=$scope.cars.carInfos[$scope.car].dec;
              

                x=[];
                x[0]=parseFloat($scope.a);
                x[1]=parseFloat($scope.b);
                x[2]=parseFloat($scope.c);
                x[3]=parseFloat($scope.d);
                x[4]=parseFloat($scope.e);
                x[5]=parseFloat($scope.f);
                x[6]=parseFloat($scope.g);
                x[7]=parseFloat($scope.h);
                x[8]=parseFloat($scope.i);
                x[9]=parseFloat($scope.j);
                x[10]=parseFloat($scope.k);
                x[11]=parseFloat($scope.l);

                 $('#high').highcharts({
        title: {
            text: 'Monthly Average Sales',
            x: -20 //center
        },
        subtitle: {
            text: 'Source:Car Manager.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Number of cars sold'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
     
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: $scope.car,
            data: x
        }]
    });
   
    
        

        }
    }

    
    
});


	
	