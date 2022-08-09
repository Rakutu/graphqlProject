import React from 'react';
import { Header } from './Components/Header';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ClientContainer } from './Components/ClientContainer';
import { AddClientModalContainer } from './Components/AddClientModalContainer';
import { ProjectsContainer } from './Components/ProjectsContainer';


const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge: (existing, incoming) => incoming,
                },
                projects: {
                    merge: (existing, incoming) => incoming,
                }
            }
        }
    }
})

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache,
});

function App() {
  return (
      <ApolloProvider client={client}>
          <Header />
          <div className="container">
              <AddClientModalContainer />
              <ProjectsContainer />
              <ClientContainer />
          </div>
      </ApolloProvider>
  );
}

export default App;
