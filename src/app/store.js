import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/Cart/cartSlice';

const store = configureStore({
  reducer: {
    count: counterReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
