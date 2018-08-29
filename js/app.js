console.log(document.body.offsetHeight);
//document.querySelector(".my_foot").style.marginTop;
var app = angular.module("myApp", []);

 
app.controller("myCtrl", function($scope, $timeout){
   
    $scope.selectAll = false;
    $scope.tasks = [];
    /*var taskData = localStorage['tasksList'];
    $scope.count = JSON.parse(taskData).length;
   if(taskData !== undefined){
       $scope.tasks = JSON.parse(taskData);
    }*/
    $scope.isdis = true;
     
    $scope.searchEnter = function(){
        //console.log(event.which | event.keyCode);
        if(event.which == 13 && $scope.task != ""){
            $scope.addTask();
            $scope.clear_item = b;
            $scope.isdis = false;
            //console.log(taskData)
        }   
    };
   
    $scope.addTask =  function(){
        $scope.tasks.push({"oneTask":$scope.task, "status":false});
        $scope.task = "";
        $scope.count = $scope.tasks.length;
        
        //localStorage['tasksList'] = JSON.stringify($scope.tasks);
    };


    $scope.edit = function(msg){
        for(var i = 0; i< $scope.tasks.length; i++){
            if($scope.tasks[i].oneTask == msg){
                $scope.tasks[i].oneTask = event.target.innerText;
            }
        };
        //localStorage['tasksList'] = JSON.stringify($scope.tasks);
        event.target.contentEditable = event.target.contentEditable == "false" ? "true": "false";
    };


    $scope.enterAgain = function(msg){
        if(event.which == 13 && msg != ""){
            $scope.edit(msg);
        }   
    };

    
    $scope.remove_selected = function(){
        $scope.selectAll = false;
        $scope.tasks = $scope.tasks.filter(function(item){
            return !item.status;
        });
        $scope.count = $scope.tasks.length;
        b = 0;
        $scope.clear_item = b;
        if($scope.count == 0){
            var countUp = function(){
                window.location.reload();
                $timeout(countUp, 200);
            }
            $timeout(countUp, 200);
        };
        //localStorage['tasksList'] = JSON.stringify($scope.tasks);
    };
   var a = 0,
     b = 0;
    $scope.ptishka = false;
    $scope.checkAll = function(){
        $scope.clear_item = $scope.count;
        if($scope.tasks.length> 0){
            //$scope.selectAll = $scope.selectAll == true ? false : true;
            if($scope.selectAll){
                $scope.selectAll = false;
                b=0;
            }
            else{
                b = $scope.tasks.length;
                $scope.selectAll =true;
            }
            angular.forEach($scope.tasks, function (user) {
                user.status = $scope.selectAll;
            });
        }
        
    };
    var ind = [],
        ind2; 
    $scope.trigger = function($event){
        ind.push(this.$index);
       if($event.target.checked){
           $scope.ptishka = true;
            $scope.selectAll = true;    
            b++;
           $scope.clear_item = b;
       }
       if(!$event.target.checked){   
          a++;
          b--;
           $scope.clear_item = b;
          if(b == 0){
           $scope.ptishka = false;
          }   
       }
       if(!$scope.ptishka){
          $scope.selectAll = false;  
       }
            
    };

    $scope.comp_act = "Complate";
    $scope.complate = function () {
    $scope.comp_act = $scope.comp_act == "Active" ? "Complate" : "Active";
        $scope.isActive = !$scope.isActive;
        
    };
    
    $scope.del = function(item){
        
        var index = $scope.tasks.indexOf(item);
        $scope.tasks.splice(index, 1);
        $scope.count = $scope.tasks.length;
        switch (0){
            case $scope.count: 
                var countUp = function(){
                    window.location.reload();
                    $timeout(countUp, 200);
                }
                $timeout(countUp, 200);
                break;
        }
        //localStorage['tasksList'] = JSON.stringify($scope.tasks);
    };
    
});


