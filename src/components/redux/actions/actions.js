// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';

// Action to add a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Action to remove a product from the cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Action to update the quantity of a product in the cart
export const updateCartQuantity = (productId, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { productId, quantity },
});
