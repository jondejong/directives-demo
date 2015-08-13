### &

Directive 

      scope: {
        callback: '&'
      },
      link: function (scope) {
        scope.callback()
      }
      
HTML

    <hello callback={{ctrl.functionName()}}"></hello>
    
Output

    Hello Jonny
    

    