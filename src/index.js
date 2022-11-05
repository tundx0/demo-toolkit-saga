import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { Provider } from 'react-redux'
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './catState'


const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: [saga]
});
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

