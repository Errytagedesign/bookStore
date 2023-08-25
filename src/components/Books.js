import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBooks from './AddBooks';
import Book from './Book';
import { getBooks, selectBooks } from '../Redux/Features/booksSlice';

function Books() {
  const allBooks = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <main className="d-flex flex-column container mt-5">
      <section className="d-flex flex-column col-12 col-md-8 mx-auto mb-5">
        {allBooks.map((book) => (
          <div key={book.item_id}>
            <Book id={book.item_id} title={book.title} author={book.author} />
          </div>
        ))}
      </section>
      <AddBooks />
    </main>
  );
}

export default Books;
