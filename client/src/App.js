import React from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import BookList from './components/BookList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
};

export default App;