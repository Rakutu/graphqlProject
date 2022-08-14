import React from 'react';
import { Header } from './Components/Header';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, NotFound, Project } from './pages';


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
          <BrowserRouter>
              <Header />
              <div className="container">
                  <Routes>
                      <Route element={<Home />} path="/"/>
                      <Route element={<Project />} path="/projects/:id"/>
                      <Route element={<NotFound />} path="*"/>
                  </Routes>
              </div>
          </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
