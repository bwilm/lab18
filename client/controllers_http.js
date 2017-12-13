angular.module('myApp.controllers',[])
.controller('showListController',['$scope','chirpfact',function($scope, chirpfact){
   console.log('showlist');

  $scope.chirpsList = chirpfact.query();


}]).controller('singleViewController',['$scope', '$routeParams','chirpfact' ,function($scope, $routeParams, chirpfact){

 let id = $routeParams.id;

$scope.singleChirp = chirpfact.get({id});


// }.then(function(chirp){
//     $scope.singleChirpuser =chirp.data[0].user;
//     $scope.singleChirpm = chirp.data[0].message;
// })



//     console.log(id);

//    var chirps = chirpfact.get({id},function(chirp){

    // }).then(function(chirp) {
    //     console.log(chirp);
    //     $scope.singleChirpuser =(chirp.data[0].user);
    //     $scope.singleChirpm =(chirp.data[0].message);
    //     $scope.singleChirpt=(chirp.data[0].time);
        
       
           


     

}])
.controller('singleUpdateController',['$scope','$resource','chirpfact',function($scope,$routeParams,chirpfact){

    $scope.addChirp = function(){
        console.log('testy');
        let message = $scope.message;
        let user = $scope.user;
        let d = new Date();
        let time = (d.getHours()+" :"+d.getMinutes()+" :"+d.getSeconds())
        console.log($scope.message);
            
     //PUSH CHIRPS TO SQL   
    
        let chirp = {
            message: message,
            user: user, 
        }    

        let c = new chirpfact(chirp);
    
        c.$save(function(){
            $scope.chirpsList = chirps.query();
        });
        
    }
}])



