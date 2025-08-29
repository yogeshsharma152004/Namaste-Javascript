//promises 

//ex:- ecommerce example

const cart = ["shoes", "watch" ,"hoodies"]

//this two api is asynchoronus and both dspendent on each other

createOrder(cart ,function (orderId){
proceedToPayment(orderId)
});//orderId



