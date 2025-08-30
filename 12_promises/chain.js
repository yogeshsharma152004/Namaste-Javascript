//promise chain

//ecommerce ex

const cart = ["shoes", "pants", "watch"];

//this is consumer part

createOrder(cart)//this is a aync funciton it will return as the promise and we add the callback function to the promise and that function will call the proceedpayment
.then(function (orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedPayment(orderId);
})
.then(function(paymentinfo){
    console.log(paymentinfo); 
    
})
.catch(function (err){
    console.log(err.message);
 
})//to handle  the error gracefully in promise this will catch the error from the top its function after the catch function if any function will called then it will return the value 
.then(function(orderId){
    console.log("hello");
    
});


 

//now we will write the our own promise
//this is the producere part

function createOrder(cart) {
  //this is the way to create he promise

  const pr = new Promise(function (resolve, reject) {
    //create order
    //validate cart
    //orderid

    //to reject the promise
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }

    //to resolve the promise
    //logic for the create order
    const orderId = "12345";
    if (orderId) {
       setTimeout(function(){
          resolve(orderId);
       },5000)
    }
  });

  return pr;
}


function proceedPayment(orderId){
   return new Promise(function (reslove, reject){
         reslove("payment sucessfull")
   })
}

function validateCart(cart){
    return true;//for the reslove 
    //return false; //for the reject value 
}