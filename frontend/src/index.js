import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as Constants from './constants';
import './index.scss';

axios.defaults.baseURL = Constants.API_URL;

ReactDOM.render(<App />, document.getElementById('root'));
