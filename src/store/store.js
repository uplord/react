import { configureStore } from '@reduxjs/toolkit';
import posts from './posts';

// Configure the Redux store
const store = configureStore({
  reducer: {
    posts: posts,
  },
});

export default store;
