import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = {todos: {}};
  let store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store}/>, root);
});