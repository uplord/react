import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
