import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import Footer from './components/Footer';

ReactDOM.render(
  <React.Fragment>
    <App />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);
