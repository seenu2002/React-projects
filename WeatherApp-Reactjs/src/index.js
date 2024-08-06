import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//**********NOTE:-EXECUTE THIS FIRST----->[$env:NODE_OPTIONS="--openssl-legacy-provider"]*********************
serviceWorker.unregister();
