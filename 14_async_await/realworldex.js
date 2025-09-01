//real world example of the async await and how we can handle it 


const API_URL = "https://api.github.com/users/yogeshsharma152004"

async function handlePromise(){
    
//fetch() => fetch function is basically is a promise when it ir resolved it gives the response
//fetch() => response object and this object has a body which has a readable stream to convert readable files to json use the response.json() and the .json() will also a promise and when it resonse was resolved it give the reslut or the value 
//fetch() => response.json() => result (jason value)

const data = await fetch(API_URL) //return response

const jsonValue = await data.json()//convert the response body into the json

console.log(jsonValue)//get the jsondata 


}
handlePromise()