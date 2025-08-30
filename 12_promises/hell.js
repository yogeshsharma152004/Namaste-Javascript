//callback hell problem slove using the promise chaining method

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfp) {
    showOrderSummery(paymentInfp, function () {
      updateWalletBalance();
    });
  });
});

//promise chaining
//when ever we use cahining we have to use the return the function because it will go the next function
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfp) {
    return showOrderSummery(paymentInfp);
  })
  .then(function (paymentInfp) {
    return updateWalletBalance(paymentInfp);
  });
