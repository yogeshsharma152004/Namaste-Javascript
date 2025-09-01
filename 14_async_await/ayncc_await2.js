//same example from the noraml vs async&await but here we reverse the order

const P1 = new Promise((resolve, reject) => {
     setTimeout( () => {
        resolve("promise resolved");
    },20000)
})

const P2 = new Promise((resolve, reject) => {
     setTimeout( () => {
        resolve("promise resolved");
    },40000)
})

async function handlePromise(){
    console.log("hello world");
    

//promise resolve after the 5 seconds 
  const val =   await P1;
  console.log("Namaste js")
  console.log(val);

//promise resolve after the 10 seconds
  const val2 =   await P2;
  console.log("Namaste js 2")
  console.log(val2);
  
}
handlePromise()


//just revesre the time ex:2

/*const P1 = new Promise((resolve, reject) => {
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
    

//promise resolve after the 5 seconds 
  const val =   await P1;
  console.log("Namaste js")
  console.log(val);

  
//promise resolve after the 10 seconds
  const val2 =   await P2;
  console.log("Namaste js 2")
  console.log(val2);
  
  
}
handlePromise()*/

