import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <section className="d-flex flex-row justify-content-between mb-3">
    <h3>{title}</h3>
    <h4>{author}</h4>
    <button type="button">Remove</button>
  </section>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
