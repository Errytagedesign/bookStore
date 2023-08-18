import React from 'react';
import AddBooks from './AddBooks';
import Book from './Book';

function Books() {
  const books = [
    { title: 'ABC', author: 'xyz' },
    { title: 'ABC1', author: 'xyz1' },
    { title: 'ABC2', author: 'xyz2' },
  ];
  return (
    <main className="d-flex flex-column container mt-5">
      <section className="d-flex flex-column col-12 col-md-8 mx-auto mb-5">
        {books.map(({ idx, title, author }) => (
          <Book key={idx} title={title} author={author} />
        ))}
      </section>
      <AddBooks />
    </main>
  );
}

export default Books;
