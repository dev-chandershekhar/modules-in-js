import './shoppingCart.js';
import {addToCart} from './shoppingCart.js';

// console.log('Importing Module');

// addToCart('Egg', 5)

import *  as productCart  from './shoppingCart.js';

productCart.addToCart('Pencil', 5);
productCart.addToCart('Bag', 3);
productCart.addToCart('Copy', 20);

// console.log(productCart.productQuantity);

// console.log(productCart.cart)

// // fetch('https://jsonplaceholder.typicode.com/posts').then(response => {});

// // console.log(data);

// const getlatPost = async function() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return {title: data.at(-1).title, text: data.at(-1).body};
// }

// const lastPost = getlatPost();

// console.log(lastPost);

// const lastPost2 = await getlatPost();

// console.log(lastPost2);

// const shoppingCart = (function() {
//   const cart = [];
//   const productQuantity = 10;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added into cart`);
//   };

//   return {
//     cart, productQuantity, addToCart
//   }
// })();

// shoppingCart.addToCart('Bread', 5);
// shoppingCart.addToCart('Glass', 2);

// const orders = shoppingCart.cart;

// console.log(shoppingCart);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {product: 'Bread', quantity: 5},
    {product: 'Burger', quantity: 6},
  ],
  user: {loggedIn: true},
}

const stateClone = Object.assign({}, state);

console.log(stateClone);

state.user.loggedIn = false;

console.log(stateClone);

const stateDeepClone = cloneDeep(state);

console.log(stateDeepClone);

if(module.hot) {
  module.hot.accept();
}

Promise.resolve('Test').then(x=> console.log(x));

import 'core-js/stable';

// Polifilling async function

import 'regenerator-runtime/runtime';