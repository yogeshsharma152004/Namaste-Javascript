//async => it is a keyword that used before the function to create the async function 
//=> it is always return the promise

//with the value  that will automatically converted into the promise

/*async function getData(){
    return "Namaste" //automatically conveted to the promise 
}

const dataPromise = getData()
//console.log(dataPromise)
dataPromise.then((res) => console.log(res))*/


//with the promise return
//here it will not wrap in the onther promise and the return it will already promise so it will return as it is 

const P = new Promise((resolve, reject) => {
    resolve("promise resolved")
}) 

async function getData(){
    return P;
}

const dataPromise1 = getData()
console.log(dataPromise1)
dataPromise1.then((res) => console.log(res))