//Function statement (Funciton Declaration)

function a(){
    console.log("a is called")
} //to make funciton like this is called as a function statement

//Function Expression 

var b = function (){
    console.log("b called")
} // to store the function in any variable is called as a funciton expression 

//Function Declaration(Funciton statement is called as a funciton declaration)


//Anonymous Function => the function without it name is called as a this function but we run this then it will show error becuse funciton statement require the name so we do store it in a variable or give it a name 

//=> this funciton are used where function are used as a values.

/* function (){

 } */


//Named Function Expression :- it is same as a funciton expression but the only change is that we use the function name there instead of the anonymous function

var b = function xyz(){
    console.log("b called")
}

//First Class Function :- ability to used like values and the function are used as a first class citizens

var x  = function(param){
   return function xyz(){

   }
}
console.log(b());




