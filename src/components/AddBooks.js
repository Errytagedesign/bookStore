import React from 'react';

const AddBook = () => (
  <div className="form">
    <h2>Add New Book</h2>
    <form>
      <input type="text" name="title" placeholder="Book Title" />
      <input type="text" name="author" placeholder="Book Author" />
      <button type="submit" id="add-book">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default AddBook;
