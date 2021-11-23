import { createSlice, createSelector } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      // newItem = {id, product, quantity}
      const newItem = action.payload;

      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index !== -1) {
        state.cartItems[index].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },

    setQuantiry(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index !== -1) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      return state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantiry, removeFromCart } = actions;
// selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const countTotal = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((count, curr) => count + curr.quantity, 0)
);
export const cartTotal = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((total, curr) => total + curr.product.salePrice * curr.quantity, 0)
);
export default reducer;
