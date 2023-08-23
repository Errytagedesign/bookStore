import { createSlice } from '@reduxjs/toolkit';

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
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const selectBooks = (state) => state.books;
export default bookSlice.reducer;
