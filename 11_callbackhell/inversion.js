//Inversion of control :- means that we loose the control of our code when we use the callback


const cart = ["shoes" , "watch" , "kurta"]


api.createOrder(cart , function(){

    api.proceedPayment()

})   //here give the callback function to the create order api and we trust that at some point time createrorder will creat an order and call our function back but this is very riscky here we give the control of our program to the createorder api so now it is the responsibility to createorder api to call our function back and wee blindly trust the createorder api 