import React from 'react';
import { useQuery } from '@apollo/client';

import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
  const { loading, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  const displayBookDetails = () => {
    if (!loading && data.book) {
      return (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All Books by this author:</p>
          <ul className='other-books'>
            {data.book.author.books.map((book) => {
              return <li key={book.id}>{book.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected</div>;
    }
  };

  return <div id='book-details'>{displayBookDetails()}</div>;
};

export default BookDetails;
