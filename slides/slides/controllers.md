### Controller

JavaScript:

      angular
          .module('playground')
          .controller('HelloController', function () {
            var self = this;
            self.message = 'Hello MidwestJSers'
          });
 
HTML:
 
    <div ng-controller="HelloController as hello">
      {{hello.message}}
    </div>