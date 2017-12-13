angular.module('myApp.factories',[])
.factory('chirpfact', ['$resource', function($resource) {
    return $resource('api/chirps/:id', {
            id:'@id'
    },{
        update: { method: 'PUT'}
    })

}]);

    

