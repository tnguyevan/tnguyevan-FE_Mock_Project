import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import  storeRedux  from './redux/store/storeRedux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Provider store={storeRedux}>
        <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

