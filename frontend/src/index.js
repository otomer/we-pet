import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { API_URL } from './constants';
import store from './store';
import App from './containers/App';
import './index.scss';

axios.defaults.baseURL = API_URL;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
