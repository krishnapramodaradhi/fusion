import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.totalAmount += action.payload.price * action.payload.amount;
      const cartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartItemIndex !== -1) {
        const existingCartItem = state.items[cartItemIndex];
        if (!action.payload.increment) {
          existingCartItem.amount += action.payload.amount;
        } else {
          existingCartItem.amount += action.payload.increment;
        }
      } else {
        state.items = state.items.concat(action.payload);
      }
    },
    removeItemFromCart(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingCartItem = state.items[existingCartItemIndex];
      if (existingCartItem !== -1 && existingCartItem.amount > 1) {
        existingCartItem.amount -= 1;
        state.totalAmount -= existingCartItem.price;
      } else {
        state.items.splice(existingCartItemIndex, 1);
        state.totalAmount -= existingCartItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
