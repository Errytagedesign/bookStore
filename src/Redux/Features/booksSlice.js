import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'M5jX7uUZefDFqFe1EDT7';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.post(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      percentage: 64,
      chapter: 'Chapter 17',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      percentage: 8,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      percentage: 0,
      chapter: 'Introduction',
    },
  ],

  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },

    removeBook: (state, action) => {
      const bookIdtoRemove = action.payload;
      return state.filter((book) => book.item_id !== bookIdtoRemove);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const selectBooks = (state) => state.books;
export default bookSlice.reducer;
