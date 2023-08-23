import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/Features/booksSlice';

function AddBook() {
  const [count, setCount] = useState(3);
  const [bookData, setBookData] = useState({
    item_id: `item${count}`,
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const clearInput = (data) => ({
    ...data,

    title: '',

    author: '',
  });

  const handleAddBook = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);

    const updateId = `item${count + 1}`;
    const updateBookData = { ...bookData, item_id: updateId };
    setBookData(updateBookData); // Update the state with the new bookData
    dispatch(addBook(updateBookData));

    // Clear input fields
    const clearedBookData = clearInput(updateBookData);
    setBookData(clearedBookData);
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
