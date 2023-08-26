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
    <div className="addBook">
      <h2>Add New Book</h2>
      <form
        onSubmit={handleAddBook}
        className="d-flex flex-row justify-content-between"
      >
        <div className="col-5">
          <input
            type="text"
            name="title"
            value={bookData.title}
            placeholder="Book Title"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-3">
          <input
            type="text"
            name="author"
            value={bookData.author}
            placeholder="Book Author"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button className="Btns col-3" type="submit" id="add-book">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBook;
