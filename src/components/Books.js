import React from 'react';
import { useSelector } from 'react-redux';
import AddBooks from './AddBooks';
import Book from './Book';
import { selectBooks } from '../Redux/Features/booksSlice';

function Books() {
  const allBooks = useSelector(selectBooks);
  console.log(allBooks);
  return (
    <main className="d-flex flex-column container mt-5">
      <section className="d-flex flex-column col-12 col-md-8 mx-auto mb-5">
        {allBooks.map((book) => (
          <div key={book.item_id}>
            <Book title={book.title} author={book.author} />
          </div>
        ))}
      </section>
      <AddBooks />
    </main>
  );
}

export default Books;
