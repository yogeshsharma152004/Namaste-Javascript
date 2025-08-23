//=> closure means the function together (like bundled) with its lexical envireonment or closure is along with it lexical scope together bundled is known as a closure.



/*function x(){
    var a = 7;
    function y(){
        console.log(a);
        
    }
    y()
}
x()*/


/*function x(){
    var a = 7;
    function y(){
        console.log(a);
        
    }
    return y;
}
var z = x() // so here the variable z is hold the whole function y()
console.log(z);//it will return the whole function y()*/

//here we also return the function like this and it also behave like the same 

/*function x(){
    var a = 7;
    return function y(){
        console.log(a);
        
    }
    
}
var z = x()
console.log(z)  */


//=> here we see the some other secenerio 

//=> here we see that we change the value of the a to 100 becuse it will not refer to the value it will the refernce to the a will be pursue 

/*function x(){
    var a = 7;
     function y(){
        console.log(a);
        
    }
    a = 100 
    return y
}
var z = x()
console.log(z)*/

//=> here we see the other case senerio 

//=> so in this we want to access the parent element and its parent element and its parent element 
//=> so here y foams the closure with the funciton x and the z (see in the console debugger) and it will return the value of the a and the b into the there respective closure 
function z(){
    var b = 900
    function x(){
    var a = 7;
     function y(){
        console.log(a , b);
        
    }
    y()
}
x()
}
z()
