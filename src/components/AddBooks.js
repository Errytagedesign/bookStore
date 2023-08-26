import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../Redux/Features/booksSlice';

function AddBook() {
  const [bookData, setBookData] = useState({
    item_id: nanoid(),
    title: '',
    author: '',
    category: 'All Books',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const clearInput = () => {
    setBookData({
      item_id: nanoid(),
      title: '',
      author: '',
      category: 'All Books',
    });
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    dispatch(addBook(bookData));
    clearInput();
  };

  return (
    <div className="form">
      <h2>Add New Book</h2>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          name="title"
          value={bookData.title}
          placeholder="Book Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          value={bookData.author}
          placeholder="Book Author"
          onChange={handleChange}
          required
        />
        <button type="submit" id="add-book">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBook;
