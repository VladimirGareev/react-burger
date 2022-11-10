import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './services';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  
    <Provider store={store}>
    <App />
    </Provider>
  
);


reportWebVitals();
