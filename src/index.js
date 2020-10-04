import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './pages/App.jsx';
import store from './store/index';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);