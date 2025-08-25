//=> data hiding and data privacy and encapsulation


/*function counter(){
var count = 0;
return function incrementCounter(){
    count ++;
    console.log(count)
}
}

var counter1 = counter()
counter1()
counter1()

//if we have the onther variable call with the counter and run that then it will consider the new counter as a funciton and create the new closure with that and give the same value staritng with the 1

var counter2 = counter()
counter2()*/

//to meke this code scalable and optimizable we use the constructor function

function Counter(){
var count = 0;
this.incrementCounter =  function (){
    count ++;
    console.log(count)
}
this.decrementCounter =  function (){
    count --;
    console.log(count)
}
}

var counter1 = new  Counter();
counter1.incrementCounter()
counter1.decrementCounter()
