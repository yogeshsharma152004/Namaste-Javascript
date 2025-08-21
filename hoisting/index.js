//hoisting means we can access the variable and the function before it will initilize or put some value 

/*getName() // here we access the funciton before but it will manage to get that function and give the console value 
console.log(x)//but it will not give access the value before and give the undefined 
console.log(getName);//but if we console this then it will return the whole fucntion to us 


var x = 7;

function getName(){
   console.log("Nmaste Javascript");
   
}*/


//js is allocate the memory to the variable and function before we start to run the program 

/*var x = 7; //it will allocated the memory as undefined in the memory before we execute the code

function getName(){
   console.log("Namaste Javascript");
   
}//for the funciton it will store the whole function in the memory before we run the code

getName()
console.log(x);
console.log(getName);*/

//=> here we see that if we put the console is before the function declare how it will react 


getName()
console.log(x);
console.log(getName);


var x = 7

function getName(){
    console.log("Nmaste js");
    
}//it will retrun the whole function in the memory phase 

/* 
//if we have the getname as a arrow function

let getName =() =>{
   console.log("Namaste Javascript");
   
}//if we run this and see in the browser console it will say that getname is not the function becuase if we declare it as a arrow function it will behave like the another variable so in the execution phase it will define as a undefined becuase it will behave like the another variable beacude we declare is the arrow function


//what id we declare the functionas a variable 

let getName2 = function(){

   
}//if we see this is also behave like the another variable so it will be also define as a another variable */