// To wrap the the app in a redux store

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import reducers from './reducers';
import actions from './actions';
import App from './App';
import * as Connectors from './connectors';

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
      <App store={store}>
        <Connectors.ProjectView/>
      </App>
    )
  }

}

