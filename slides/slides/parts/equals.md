### @

Directive 

      scope: {
        user: '='
      },
      template: '<p>Hello {{user.firstName}}</p>
      
HTML

    <hello name="{{ctrl.user}}"></hello>
    
Output

    Hello Jonny
    

    