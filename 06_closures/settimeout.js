//=> setTimeout with the closure interview prespective

/*function x(){
    var i = 10;
    setTimeout(function(){
        console.log(i)
    },3000)
    console.log("Namaste Javascript")
}
x();*/


//----***----//

//=>let instead of var (solution in notes)

/*function x(){
    for(let i=1; i<=5;i++){
        setTimeout(function(){
        console.log(i)
    },i * 1000)
    }
    
    console.log("Namaste Javascript")
}
x();*/

//**--- */

//=> if we only use the the var and want to print the value 1 to 5 then we have to put the or hold the settimeout in the function and we have to call the i 

function x(){
    for(let i=1; i<=5;i++){
        function close(i){
           setTimeout(function(){
        console.log(i)
         },i * 1000)
        }
        close(i)
    }
    
    console.log("Namaste Javascript")
}
x();