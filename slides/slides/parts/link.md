### Link Function

HTML
    
    <hello color='red' name='Lori'></hello>

JavaScript

    scope: {
        name: '@'
    },
    link: function (scope, el, attrs) {
        console.log(scope.name) // Lori
        
        element.class('fancy-class') // jqLite element
         
        console.log(attrs.color) // red
    }