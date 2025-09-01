//async with the await => this is combo used to handle the promises

//first we see that how can we handle the promises before the async and await 

const P = new Promise((resolve, reject) => {
    resolve("promise resolved")
})

function getData(){
    P.then(res => console.log(res))
}

getData()

//here we see that how can we handle it with the async and await

//await can only used inside the async function

const P1 = new Promise((resolve, reject) => {
    resolve("promise resolved value")
})

async function handlePromise(){
  const val =   await P1;//use the await keyword infornt of the promise and the val contain the value of the promise p1 resloved value 
  console.log(val);
  
}
handlePromise()