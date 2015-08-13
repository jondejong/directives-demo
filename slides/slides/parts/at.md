### @

Directive 

      scope: {
        name: '@'
      },
      template: '<p>Hello {{name}}</p>
      
HTML

    <hello name='Jonny'></hello>
    
Output

    Hello Jonny
    
Can be values from a controller

    <hello name="{{ctrl.user.firstName}}"></hello>

