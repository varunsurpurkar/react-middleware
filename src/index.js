import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from  './store'
import { Provider } from 'react-redux'

export const store = configureStore();

store.subscribe(()=>{
  console.log('STATE of THE STORE====>',store.getState())
})

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
