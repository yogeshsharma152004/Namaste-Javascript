//function invocation
//here we see the example of the function invoke where the same variable name is all over there then how the js will handle it 


var x = 1;
a();
b();
console.log(x)

function a(){
     var x = 10;
     console.log(x);
     
}

function b(){
    var x = 100;
    console.log(x);
    
}