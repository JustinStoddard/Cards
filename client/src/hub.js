import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolExtension ? window.devtoolsExtension() : f => f
);

const hub = createStore(rootReducer, [], enhancers);

if (module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    hub.replaceReducer(nextRootReducer); 
  });
}

export default hub;