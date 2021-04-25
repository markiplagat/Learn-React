import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message'


ReactDOM.render(
  <React.StrictMode>
    <Message />
    <App />
    <Greet />
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
