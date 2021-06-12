import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { getAuthorsQuery } from '../queries/queries';

const AddBook = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const { loading, data } = useQuery(getAuthorsQuery);

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading...</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, genre, authorId);
  };

  return (
    <form id='add-book' onSubmit={submitForm}>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>Add</button>
    </form>
  );
};

export default AddBook;
