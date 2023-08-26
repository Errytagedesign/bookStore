import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import AddBooks from './AddBooks';
import Book from './Book';
import {
  getBooks,
  removeBook,
  selectBooks,
} from '../Redux/Features/booksSlice';

function Books() {
  const { books, isLoading } = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDeleteBook = (book) => {
    dispatch(removeBook(book));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="d-flex flex-column container mt-5">
      <section className="d-flex flex-column bookWrapper mx-auto mb-5">
        {books.map((book) => (
          <div key={book.item_id}>
            <Book
              handleDeleteBook={() => handleDeleteBook(book)}
              id={book.item_id}
              title={book.title}
              author={book.author}
            />
          </div>
        ))}
      </section>
      <AddBooks />
    </main>
  );
}

export default Books;
