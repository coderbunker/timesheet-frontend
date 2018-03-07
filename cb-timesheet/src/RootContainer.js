// To wrap the the app in a redux store

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import reducers from './reducers';
import actions from './actions';
import App from './App';
import * as Connectors from './connectors';

//To be able to use a Router if needed

import { 
  Route,
  Link,
  HashRouter 
} from 'react-router-dom';

//To get data from postgraphile server
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

//creating the Apollo Client
export const client = new ApolloClient({
  link: new HttpLink( { uri: 'http://localhost:5000/graphql' } ),
  cache: new InMemoryCache()
});

const initialState = {}
const deps = { // injected dependencies for logic
  logic: function(type, payload) {
    return {
      type,
      payload: payload || {}
    }
  }
};
const store = (initialState) => {
  const logicMiddleware = createLogicMiddleware(actions, deps);
  const middleware = applyMiddleware(logicMiddleware);
  return createStore(reducers, initialState, middleware);
}

export default class rootContainer extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <App store={store}>
            <Connectors.ProjectView/>
          </App>
        </HashRouter>
      </ApolloProvider>
    )
  }

}

