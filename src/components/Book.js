import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author, handleDeleteBook }) {
  return (
    <section className="d-flex flex-row justify-content-between mb-3">
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button onClick={handleDeleteBook} type="button">
        Remove
      </button>
    </section>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  handleDeleteBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
