// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import booksSlice from '../Features/booksSlice';
import categoriesSlice from '../Features/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});

export default store;
