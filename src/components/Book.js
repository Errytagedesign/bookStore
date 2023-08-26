import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author, handleDeleteBook }) {
  return (
    <section className="d-flex flex-row justify-content-between mb-3 book">
      <article className="d-flex flex-column col-4">
        <div className="d-flex flex-column">
          <h4> Action </h4>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <div className="d-flex flex-row justify-content-between btns col-9 mt-3">
          <button type="button">Comment</button>
          <div className="vertical-divider" />
          <button onClick={handleDeleteBook} type="button">
            Remove
          </button>
          <div className="vertical-divider" />
          <button type="button">Edit</button>
        </div>
      </article>
      <article className="d-flex align-items-center justify-content-between col-7">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div className="progress-stat">
          <h4 className="percent-complete">64%</h4>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <small className="current-chapter">Chapter 17</small>
          </div>
          <div>
            <button className="Btns" type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </article>
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
