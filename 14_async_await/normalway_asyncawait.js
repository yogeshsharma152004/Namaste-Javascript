//diff between the using the normal function to handle the promise and the async and await to handle the promise 


//first we see that how can we handle the promises before the async and await 

const P = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("promise resolved");
    },10000)  //promise will only reslove after 10 seconds
    
})

function getData(){
    //js engine will not wait for the promise to resolve it will move to the next line and print the namaste js
   // P.then(res => console.log(res)) //this promise will be resolves after 10 seconds ans once it is resolves the it will do the console of the resolve value 
    //console.log("namaste js")
}

getData()

//here we see that how can we handle it with the async and await

//when we use the asynct and await the js engine will wait the promise to resolve or execute that in the line no 33  once that promise will reslove after the time that we given for ex 10 secod or 20 second it will wait or program will wait over the line no 33 and it will only go to the next line no 34 once the promise in line no 33 will resolve or execute.

const P1 = new Promise((resolve, reject) => {
     setTimeout( () => {
        resolve("promise resolved");
    },10000)
})

const P2 = new Promise((resolve, reject) => {
     setTimeout( () => {
        resolve("promise resolved");
    },5000)
})

async function handlePromise(){
    console.log("hello world");
    
    //js engine waiting for promise to be resolved 
  const val =   await P1;
  console.log("Namaste js")
  console.log(val);

  //here we pass the same promise as a val  but it will also excute the after 10 seconds parelell with the val1

  const val1 =   await P1;
  console.log("Namaste js 2")
  console.log(val1);

  //so here we pass the time of the 5 seconds but in the p1 and p2 promises we give the 10 seocnds but  we think that this promise p3 will  reslove the first because it have 5 second but no it will not resolve first it will wait to resolve the p1 & p2 promise and it will also resolve with them  aftet the 10 seconds  

  const val2 =   await P2;
  console.log("Namaste js 3")
  console.log(val2);
  
}
handlePromise()