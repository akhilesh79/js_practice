// creation of promise and promise chaining with example.

// promise is a object which represents the eventual completion or failure of an asynchronous operations and its resulting values.
// promise has three states: pending, fulfilled, rejected.
/* it helps in mainly resolving two type of problems which occur in asynchronous programming: callback hell and inversion of control.
   1. callback hell: it is a situation where we have multiple nested callbacks which makes the code difficult to read and maintain. - this resolved with promise chaining.
   2. inversion of control: it is a situation where we have to pass a callback function to a third party library or API, which can lead to loss of control over the flow of the program.
        - second problem is resolved as it allows us to attach the callback function to promise object, which gives us the gurarantee that promise will either be resolved or rejected.
*/

// creating a promise
const cart = ['shoes', 'pants', 'kurta'];

/* steps
  1. create a order
    2. proceed to payment
    3. show order summary
*/

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    // reject if any error while validation.
    if (!cart || cart.length === 0) {
      reject(new Error('Cart is empty'));
    } else {
      // simulating order creation process with setTimeout
      setTimeout(() => {
        const orderId = Math.floor(Math.random() * 1000000);
        resolve(orderId);
      }, 2000);
    }
    // resolved once order is created successfully. and return the order id.
  });

  return promise;
}

function proceedToPayment(orderId) {
  const promise = new Promise((resolve, reject) => {
    // reject if any error while processing payment.
    if (!orderId) {
      reject(new Error('Invalid order id'));
    } else {
      // simulating payment process with setTimeout
      setTimeout(() => {
        const paymentId = Math.floor(Math.random() * 1000000);
        resolve({ orderId, paymentId, message: 'Payment successful' });
      }, 2000);
    }
  });

  return promise;
}

function showOrderSummary(paymentInfo) {
  const promise = new Promise((resolve, reject) => {
    // reject if any error while showing order summary.
    if (!paymentInfo || !paymentInfo.paymentId) {
      reject(new Error('Invalid payment info'));
    } else {
      // simulating order summary process with setTimeout
      setTimeout(() => {
        const orderSummary = {
          orderId: paymentInfo.orderId,
          paymentId: paymentInfo.paymentId,
          message: 'Order summary displayed successfully',
        };
        resolve(orderSummary);
      }, 2000);
    }
  });

  return promise;
}

createOrder(cart)
  .then((orderId) => {
    console.log('Order created successfully with order id:', orderId);
    return proceedToPayment(orderId);
  })
  .catch((error) => {
    console.error('Error while creating an order:', error.message);
  })
  .then((paymentInfo) => {
    console.log('Payment processed successfully with payment info:', paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .catch((error) => {
    console.error('Error while processing payment:', error.message);
  })
  .then((orderSummary) => {
    console.log('Order summary displayed successfully with order summary:', orderSummary);
  })
  .catch((error) => {
    console.error('Error while showing order summary:', error.message);
  });
