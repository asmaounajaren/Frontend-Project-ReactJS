import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store,persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
<<<<<<< HEAD
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
=======



ReactDOM.render(
  <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
>>>>>>> 21f36d3c3d5b71f7d282e0cd6298ab99e7325601
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);