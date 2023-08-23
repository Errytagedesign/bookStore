import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Features/booksSlice';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  const handleDeleteBook = (e) => {
    const bookId = e.currentTarget.id;
    dispatch(removeBook(bookId));
  };

  return (
    <section id={id} className="d-flex flex-row justify-content-between mb-3">
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button onClick={handleDeleteBook} id={id} type="button">
        Remove
      </button>
    </section>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
  id: '',
};

export default Book;
