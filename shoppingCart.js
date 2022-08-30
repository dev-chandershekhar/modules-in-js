
console.log('Exporting Module');
const cart = [];
const productQuantity = 10;


const addToCart = function(product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added into cart`);
}

export {cart, productQuantity, addToCart};