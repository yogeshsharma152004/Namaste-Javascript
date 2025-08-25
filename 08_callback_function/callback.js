//what is a callback function in js 
//=> funciton inside the function is called as a callback function , so here the y is the callback function

setTimeout(function(){
    console.log("timer");
    
}, 5000)

function x(y){
  console.log("x");
  y();
}
x(function y(){
   console.log("y");
   
})