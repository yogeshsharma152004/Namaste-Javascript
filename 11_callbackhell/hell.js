//=> callback 

console.log("namaste")


setTimeout(function (){
    console.log("javascript")
},5000) //callback function

console.log("season 2")

//ex :- card of the ecommerce wesite
//1. crete and order and 2. proceed to payment 3.ordersummery 4.updatewallet

const cart = ["shoes" , "watch" , "kurta"]

//callback hell :- so here we have the callback function inside onther callback function and in onther callback function is called as a callback hell

api.createOrder(cart , function(){

    api.proceedPayment(function(){

        api.shoeOrderSummery(function(){
            api.updateWallet()
        })
    })

    })

    








