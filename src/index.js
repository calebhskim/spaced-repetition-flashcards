import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import initialState from './constants/initialState';
import Store from './store';
import * as serviceWorker from './serviceWorker';

import './index.css';

// Grab the state from a global variable injected during SSR or use constant state
const preloadedState = window.PRELOADED_STATE || initialState;
const store = new Store(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
