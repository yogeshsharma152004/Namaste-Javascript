//promises

//ex:- ecommerce example

const cart = ["shoes", "watch", "hoodies"];

//this two api (createorder and proceedpayment) is asynchoronus and both dependent on each other

createOrder(cart , function(orderId){
  proceedToPayment(orderId)
}) //pass the callback function to the onther function (inverstion of control problem )


//the upper  will be handled through the promise

//using promise
//this is the better way to write the code then upper one

const promise = createOrder(cart); //retrurn the empty object or undefined value and fill it later at some point of time //{data:undefined}

promise.then(function (orderId) {
  proceedToPayment(orderId);
}); //attach the callback function to the promises object
