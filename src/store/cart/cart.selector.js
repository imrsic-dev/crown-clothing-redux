import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0)
);

/* const newTotalPrice = newCartItems.reduce((total, cartItem) => {
  return total + cartItem.quantity * cartItem.price;
}, 0);

const newCountCount = newCartItems.reduce((total, cartItem) => {
  return total + cartItem.quantity;
}, 0);

const payload = {
  cartItems: newCartItems,
  cartTotal: newTotalPrice,
  cartCount: newCountCount,
}; */
