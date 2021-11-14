import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';

const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

export default store;
