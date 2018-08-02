var myApp = {};
(function(context) { 
    var id = 0;
 
    context.next = function() {
        return id++;    
    };
 
    context.reset = function() {
        id = 0;     
    }
})(this);