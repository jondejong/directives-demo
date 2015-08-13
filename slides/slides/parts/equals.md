### =

Directive 

      scope: {
        user: '='
      },
      template: '<p>Hello {{user.firstName}}</p>
      
HTML

    <hello user="{{ctrl.user}}"></hello>
    
Output

    Hello Jonny
    

    