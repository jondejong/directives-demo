(function (){
    'use strict';

    angular
        .module('playground')
        .service('DogService', function ($timeout, $q) {

            var dogs = [
                {name: 'Bear', age: '3', breed: 'Border Collie'},
                {name: 'Ellie', age: '7', breed: 'Lab'},
                {name: 'Snoop', age: '4', breed: 'Puggle'},
                {name: 'Cici', age: '11', breed: 'Chihuahua'},
                {name: 'Speedy', age: '5', breed: 'Greyhound'}
            ];

            var getDogs = function () {

                var promise = $q.promise();

                $timeout(function () {
                    promise.resolve(dogs);
                }, 2000);

                return promise;
            }


        });
    
})();