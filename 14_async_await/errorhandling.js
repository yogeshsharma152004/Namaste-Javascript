//error handling in async and await
//in the normal promise function we have the .catch() method to handle the error
//but in the async and await we have the .try() and the .catch() method to handle the error

//same example that used in the realword ex

const API_URL = "https://api.github.com/users/yogeshsharma152004";

async function handlePromise() {

    //if the result is sucessfull then the try block will be executed
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
    
  } 
  //if the any error then it will throw the error 
  catch (err) {
     console.log(err);
     
  }
}
handlePromise();//.catch((err) => console.log(err)) //we can also use this method to handle the error insetad of try and the catch 
