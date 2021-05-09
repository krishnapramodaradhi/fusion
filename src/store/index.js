import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui';
import mealsReducer from './meals';
import cartReducer from './cart';
import loginReducer from './login';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    meals: mealsReducer,
    cart: cartReducer,
    login: loginReducer,
  },
});

export default store;
