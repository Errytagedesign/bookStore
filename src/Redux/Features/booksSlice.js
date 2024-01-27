import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'WvVZRVRmWzuS1p0t1MJs';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  const response = await axios.post(url, newBook);
  return response.data === 'Created' ? newBook : null;
});

export const removeBook = createAsyncThunk('books/removeBook', async (book) => {
  const response = await axios.delete(`${url}/${book.item_id}`);
  return response.data === 'The book was deleted successfully!' ? book : null;
});

const initialState = {
  books: [],
  isLoading: false,
  isError: '',
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload !== '') {
          const books = [];
          const keys = Object.keys(action.payload);
          keys.forEach((x) => {
            books.push({ item_id: x, ...action.payload[x][0] });
          });
          state.books = books;
          if (state.books.length === 0) state.isError = 'No result was found!';
        }
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isError = action.error.message;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.isError = '';
          state.books = state.books.filter(
            (book) => book.item_id !== action.payload.item_id,
          );
          if (state.books.length === 0) state.isError = 'No result was found!';
        } else {
          state.isError = 'Unable to remove record!';
        }
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isError = action.error.message;
      });
  },
});

export const selectBooks = (state) => state.books;
export default bookSlice.reducer;
