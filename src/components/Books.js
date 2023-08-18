import React from 'react';
import AddBooks from './AddBooks';
import Book from './Book';

const Books = () => (
  <main className="d-flex flex-column container mt-5">
    <section className="d-flex flex-row col-12 col-md-8 justify-content-between align-items-center mx-auto mb-5">
      <Book title="Book title" author="Book author" />
      <button type="button">Remove</button>
    </section>
    <AddBooks />
  </main>
);

export default Books;
