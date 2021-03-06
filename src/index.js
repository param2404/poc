import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'


const reduxStore = store()
ReactDOM.render(
  <Provider store={reduxStore.store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


